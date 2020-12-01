import React, { useState, useEffect } from 'react';
import { Link, withRouter } from 'react-router-dom';
import './styles.scss';

import { signInWithGoogle } from '../../firebase/utils';
import { useDispatch, useSelector } from 'react-redux';
import { signInUser } from './../../redux/User/user.actions';

import AuthWrapper from '../AuthWrapper';
import FormInput from '../forms/FormInput';
import Button from '../forms/Button';

const mapState = ({ user }) => ({
    signInUser: user.signInSuccess
})

const SignIn = props => {
    const { signInSuccess } = useSelector(mapState);
    const dispatch = useDispatch();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    useEffect(() => {
        if (signInSuccess) {
            resetForm();
            props.history.push('/');
        }
    })

    const resetForm = () => {
        setEmail('');
        setPassword('');
    }
    const handleSubmit = e => {
        e.preventDefault();
        dispatch(signInUser({email, password}))
        
        
    }


    const configAuthWrapper = {
        headline: 'LogIn'
    };

    return (
        <AuthWrapper {...configAuthWrapper}>
            <div className="formWrap">
                <form onSubmit={handleSubmit}>
                    <FormInput
                        type="email"
                        name="email"
                        value={email}
                        placeholder="Email"
                        handleChange={e => setEmail(e.target.value)}
                    />
                    <FormInput
                        type="password"
                        name="password"
                        value={password}
                        placeholder="Password"
                        handleChange={e => setPassword(e.target.value)}
                    />

                    <Button type="submit">
                        Login
                        </Button>
                    <div className="socialSignin">
                        <div className="row">
                            <Button onClick={signInWithGoogle}>
                                Sign in with Google
                                </Button>
                            <Link to="/Registration">
                                Don't have an account?
                            </Link>
                        </div>
                    </div>
                    <div className="links">
                        <Link to="/Recovery">
                            Reset Password
                            </Link>

                    </div>
                </form>
            </div>
        </AuthWrapper>
    );


}




export default withRouter(SignIn);