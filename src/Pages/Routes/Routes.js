import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../../Main/Main';
import ErrorPage from '../../Shared/ErrorPage';
import Login from '../../Shared/Login';
import SignUp from '../../Shared/SignUP/SignUp';
import Home from '../Home/Home';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        errorElement: <ErrorPage/>,
        children: [
          {
            path: '/',
            element: <Home />,
          },
          {
            path: '/login',
            element: <Login />,
          },
          {
            path: '/signup',
            element: <SignUp />,
          },
        ],
      },
])

export default router;