import cookie from 'js-cookie';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export const useIsLoggedIn = () => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const router = useRouter();

  useEffect(() => {
    const userToken = cookie.get('token');

    if (userToken) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, [isLoggedIn]);

  const logout = () => {
    cookie.remove('token');
    cookie.remove('user');
    setIsLoggedIn(false);
    router.push('/');
  };

  return { isLoggedIn, logout };
};
