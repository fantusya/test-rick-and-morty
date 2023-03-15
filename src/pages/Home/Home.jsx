import { useState, useEffect, useRef, useCallback } from 'react';
import { useSearchParams } from 'react-router-dom';
import { GoogleLogin, googleLogout, useGoogleLogin } from '@react-oauth/google';
import { Box } from 'components/Box/Box';
import { Status } from 'constants/status';
import { Container } from 'constants/GlobalStyle';
import SearchBar from 'components/SearchBar';
import rick from 'images/logo/logo_sm.png';
import { LogoImg } from './Home.styled';
import useCharactersSearch from 'hooks/useCharactersSearch';
import CharacterList from 'components/CharactersList';
import axios from 'axios';
import useSignIn from 'hooks/useSignIn';
import * as jose from 'jose';
import SignIn from 'components/SignIn';

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
      if (status === Status.PENDING) {
        return;
      }

      if (observer.current) {
        observer.current.disconnect();
      }

      observer.current = new IntersectionObserver(entries => {
        if (entries[0].isIntersecting && hasMore) {
          console.log('visible');
          setPage(prevState => prevState + 1);
        }
      });

      if (node) {
        observer.current.observe(node);
      }
    },
    [hasMore, status]
  );

  // const { login, logOut, user, profile } = useSignIn;

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

  // useEffect(() => {
  //   // (async () => {
  //   //   setTrendingMovies(await fetchTrendingMovies());
  //   // })();
  //   async function getCharacters() {
  //     setStatus(Status.PENDING);

  //     try {
  //       if (page === 0) {
  //         setPage(1);
  //         return;
  //       }
  //       const { info, results } = await fetchCharacters(page);
  //       console.log(info);
  //       setCharacters(prevState => [...prevState, ...results]);
  //       setTotal(info.count);
  //       setStatus(Status.RESOLVED);
  //     } catch (error) {
  //       setStatus(Status.REJECTED);
  //     }
  //   }

  //   getCharacters();
  // }, [page]);

  const handleChange = queryChar => {
    setSearchParams(queryChar !== '' ? { name: queryChar } : {});
    setPage(1);
  };

  // const responseMessage = response => {
  //   console.log('response', response);
  //   const protectedHeader = jose.decodeJwt(response.credential);
  //   console.log('protectedHeader', protectedHeader);
  //   setUser(protectedHeader);
  //   localStorage.setItem('user', JSON.stringify(protectedHeader));
  // };

  // const errorMessage = error => {
  //   console.log(error);
  // };

  return (
    <>
      {/* {status === 'pending' && <Pending />} */}
      {/* {status === 'rejected' && <Error />} */}
      <Box as="header" pt={4}>
        <Container>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="flex-start"
            gridGap={5}
          >
            {/* <GoogleLogin
              onSuccess={responseMessage}
              onError={errorMessage}
              type="standart"
              shape="circle"
            /> */}
            <SignIn profile={profile} login={() => login()} logOut={logOut} />
            <LogoImg src={rick} alt="logo" />
          </Box>
        </Container>
      </Box>

      <Box as="section" pt={5}>
        <Container>
          <SearchBar onChange={handleChange} />
        </Container>
      </Box>

      <Box as="section" pt={5} pb={5}>
        <Container>
          <CharacterList
            refValue={lastCharacterRef}
            charactersArray={characters}
          />
        </Container>
      </Box>
    </>
  );
};

export default Home;
