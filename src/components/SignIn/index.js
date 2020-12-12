import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import './styles.scss';

import { useDispatch, useSelector } from 'react-redux';
import { emailSignInStart, googleSignInStart } from './../../redux/User/user.actions';

import AuthWrapper from '../AuthWrapper';
import FormInput from '../forms/FormInput';
import Button from '../forms/Button';

const mapState = ({ user }) => ({
    currentUser: user.currentUser
})

const SignIn = props => {
    const { currentUser } = useSelector(mapState);
    const dispatch = useDispatch();
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    useEffect(() => {
        if (currentUser) {
            resetForm();
            history.push('/');
        }
    }, [currentUser, history])

    const resetForm = () => {
        setEmail('');
        setPassword('');
    }
    const handleSubmit = e => {
        e.preventDefault();
        dispatch(emailSignInStart({ email, password }))


    }

    const handleGoogleSignIn = () => {
        dispatch(googleSignInStart());
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
                            <Button onClick={handleGoogleSignIn}>
                                Sign in with Google
                                </Button>

                        </div>
                    </div>
                    <div className="links">

                        <Link to="/Recovery">
                            Reset Password
                        </Link>

                    </div>
                    <div className="links2">
                        <Link to="/Registration">
                            Don't have an account?
                        </Link>
                    </div>
                </form>
            </div>
        </AuthWrapper>
    );


}




export default SignIn;