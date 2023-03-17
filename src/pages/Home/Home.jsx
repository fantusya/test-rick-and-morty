import { useState, useEffect, useRef, useCallback } from 'react';
import { useSearchParams } from 'react-router-dom';
import { googleLogout, useGoogleLogin } from '@react-oauth/google';
import { Box } from 'components/Box/Box';
import { Status } from 'constants/status';
import { Container } from 'constants/GlobalStyle';
import SearchBar from 'components/SearchBar';
import logo_312 from 'images/logo/logo_312.png';
import logo_624 from 'images/logo/logo_624.png';
import logo_600 from 'images/logo/logo_600.png';
import logo_1200 from 'images/logo/logo_1200.png';
import { LogoImg, Error } from './Home.styled';
import useCharactersSearch from 'hooks/useCharactersSearch';
import CharacterList from 'components/CharactersList';
import axios from 'axios';
import useSignIn from 'hooks/useSignIn';
import SignIn from 'components/SignIn';
import error from 'images/error.png';
import { BallTriangle } from 'react-loader-spinner';

const Home = () => {
  const [user, setUser] = useState(null);
  // console.log('user.access_token', user?.access_token);
  const [profile, setProfile] = useState(null);
  // const [status, setStatus] = useState(Status.IDLE);
  const [page, setPage] = useState(1);
  // const [total, setTotal] = useState(0);
  // const [characters, setCharacters] = useState([]);
  // const [query, setQuery] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('name') ?? '';

  const { status, characters, hasMore } = useCharactersSearch(query, page);
  console.log('status', status);

  const observer = useRef();
  const lastCharacterRef = useCallback(
    node => {
      if (status === Status.PENDING || status === Status.REJECTED) {
        return;
      }

      if (observer.current) {
        observer.current.disconnect();
      }

      observer.current = new IntersectionObserver(entries => {
        if (entries[0].isIntersecting && hasMore) {
          // console.log('visible');
          setPage(prevState => prevState + 1);
        }
      });

      if (node) {
        observer.current.observe(node);
      }
    },
    [hasMore, status]
  );

  useEffect(() => {
    if (user || localStorage.getItem('user')) {
      axios
        .get(
          `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${
            user?.access_token ||
            JSON.parse(localStorage.getItem('user')).access_token
          }`,
          {
            headers: {
              Authorization: `Bearer ${
                user?.access_token ||
                JSON.parse(localStorage.getItem('user')).access_token
              }`,
              Accept: 'application/json',
            },
          }
        )
        .then(res => {
          console.log('res', res);
          setProfile(res.data);
        })
        .catch(err => console.log(err));
    }
  }, [user]);

  const login = useGoogleLogin({
    onSuccess: codeResponse => {
      console.log('codeResponse', codeResponse);
      setUser(codeResponse);
      localStorage.setItem('user', JSON.stringify(codeResponse));
    },
    onError: error => console.log('Login Failed:', error),
  });

  const logOut = () => {
    googleLogout();
    setProfile(null);
    localStorage.removeItem('user');
  };

  const handleChange = queryChar => {
    setSearchParams(queryChar !== '' ? { name: queryChar } : {});
    setPage(1);
  };

  return (
    <>
      <Box as="header" pt={4}>
        <Container>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="flex-start"
            gridGap={5}
          >
            <SignIn profile={profile} login={() => login()} logOut={logOut} />
            <LogoImg>
              <source
                media="(min-width: 1440px)"
                srcSet={`${logo_600} 1x, ${logo_1200} 2x`}
                type="image/png"
              />
              <source
                media="(max-width: 1439px)"
                srcSet={`${logo_312} 1x, ${logo_624} 2x`}
                type="image/png"
              />
              <img src={logo_312} alt="logo" loading="lazy" />
            </LogoImg>
          </Box>
        </Container>
      </Box>

      <Box as="section" py={5}>
        <Container>
          <SearchBar onChange={handleChange} />
        </Container>
      </Box>

      <Box as="section" pb={4}>
        <Container>
          <CharacterList
            refValue={lastCharacterRef}
            charactersArray={characters}
          />
        </Container>
      </Box>

      {status === Status.PENDING && (
        <Box display="flex" justifyContent="center">
          <BallTriangle />
        </Box>
      )}

      {status === Status.REJECTED && (
        <Error src={error} alt="error" width="300px" />
      )}
    </>
  );
};

export default Home;
