import {createContext, useReducer} from 'react';
import {getLocalStorageItem} from '../utils';

export const AuthContext = createContext();

const userReducer = (initalState = {}, {type, payload}) => {
  switch (type) {
    case 'SIGNUP':
    case 'LOGIN_MODIFY':
      const {name, email, phoneNumber} = payload;
      const result = {name, email, phoneNumber};

      console.log(result);
      return result;
    default:
      return {};
  }
};

const useAuth = () => {
  const defaultUserInfo = getLocalStorageItem('userInfo') ?? {};
  const [userInfo, dispatch] = useReducer(userReducer, defaultUserInfo);

  return {
    userInfo,
    dispatch,
  };
};

export default function AuthProvider({children}) {
  const value = useAuth();

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
