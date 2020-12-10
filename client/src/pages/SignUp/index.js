import React from 'react';
import SignUpForm from '../../components/SignUpForm';
import { useStoreContext } from '../../utils/GlobalState';
import { SIGN_UP } from '../../utils/actions';

const SignUpPage=()=>{
    const [state, dispatch] = useStoreContext();
    return <div>
        <SignUpForm onSignUp={(account) => {
            localStorage.setItem("authorization-token", account.token);
            dispatch({
                type: SIGN_UP,
                payload: account
            })
        }} />
    </div>
}
export default SignUpPage;