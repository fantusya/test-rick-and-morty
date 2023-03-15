import { useEffect, useState } from 'react';
import axios from 'axios';
import { GoogleLogin, googleLogout, useGoogleLogin } from '@react-oauth/google';

export default function useSignIn() {
  const [user, setUser] = useState(null);
  const [profile, setProfile] = useState(null);

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
  //   const login = () => {
  //     useGoogleLogin({
  //       onSuccess: codeResponse => {
  //         console.log('codeResponse', codeResponse);
  //         setUser(codeResponse);
  //         localStorage.setItem('user', JSON.stringify(codeResponse));
  //       },
  //       onError: error => console.log('Login Failed:', error),
  //     });
  //   };

  const logOut = () => {
    googleLogout();
    setProfile(null);
    localStorage.removeItem('user');
  };

  return { login, logOut, user, profile };
}
