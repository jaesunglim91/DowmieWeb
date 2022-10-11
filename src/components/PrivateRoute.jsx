import {useContext} from 'react';
import {Navigate} from 'react-router-dom';
import {AuthContext} from '../contexts/Auth';
import {isEmptyObject} from '../utils';

export default function PrivateRoute({component: Component}) {
  const {userInfo} = useContext(AuthContext);

  if (isEmptyObject(userInfo)) {
    return <Navigate to="/signup" />;
  }

  return <Component />;
}
