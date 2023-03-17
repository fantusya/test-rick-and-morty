import { useEffect, useState } from 'react';
import axios from 'axios';
import { BASE_URL } from 'constants/urls';
import { Status } from 'constants/status';

export default function useCharactersSearch(query, page) {
  const [status, setStatus] = useState(Status.IDLE);
  const [characters, setCharacters] = useState([]);
  const [hasMore, setHasMore] = useState(false);

  useEffect(() => {
    setCharacters([]);
  }, [query]);

  useEffect(() => {
    setStatus(Status.PENDING);

    let cancel;
    axios({
      method: 'GET',
      url: BASE_URL,
      params: { name: query, page },
      cancelToken: new axios.CancelToken(c => (cancel = c)),
    })
      .then(res => {
        setCharacters(prevState => [...prevState, ...res.data.results]);

        setHasMore(
          res.data.results.length > 0 &&
            res.data.results.length < res.data.info.count
        );

        setStatus(Status.RESOLVED);
      })
      .catch(e => {
        if (axios.isCancel(e)) {
          return;
        }
        setStatus(Status.REJECTED);
        return;
      });

    return () => cancel();
  }, [query, page]);

  return { status, characters, hasMore };
}
