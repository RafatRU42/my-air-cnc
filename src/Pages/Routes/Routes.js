import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../../Main/Main';
import SignUp from '../../Shared/SignUP/SignUp';

const router = createBrowserRouter([
{path:'/',element:<Main></Main>,children:[
    {path:'/',element:<SignUp></SignUp>}
]}
])

export default router;