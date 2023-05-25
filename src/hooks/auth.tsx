import cookie from 'js-cookie';
import { useEffect, useState } from 'react';

export const useIsLoggedIn = () => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

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
    setIsLoggedIn(false);
  };

  return { isLoggedIn, logout };
};
