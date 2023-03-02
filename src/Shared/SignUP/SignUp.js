import React from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import {useContext} from 'React'


const SignUp = () => {
    const {googleSignIn} = useContext(AuthContext)
    const GoolesignIn = () =>{
        console.log('conns')
        googleSignIn()
        
    }
    return (
        <div>
            <button onClick={GoolesignIn}>google sign in</button>
        </div>
    );
};

export default SignUp;