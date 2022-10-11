import React from 'react';
import ReactDOM from 'react-dom/client';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';
import AuthProvider from './contexts/Auth';
import {Home, SignUp} from './routes';

import './Main.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <PrivateRoute component={Home} />,
  },
  {
    path: '/signup',
    element: <SignUp />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthProvider>
    <RouterProvider router={router}></RouterProvider>
  </AuthProvider>,
);
