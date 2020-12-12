import React, { useState, useEffect } from 'react';
import { withRouter, Link } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { signUpUserStart } from './../../redux/User/user.actions';

import './styles.scss'
import FormInput from '../forms/FormInput';
import Button from '../forms/Button';

import AuthWrapper from '../AuthWrapper';


const mapState = ({ user }) => ({
    currentUser: user.currentUser,
    userErr: user.userErr
})
const Signup = props => {
    const { currentUser, userErr } = useSelector(mapState);
    const dispatch = useDispatch();
    const history = useHistory();
    const [displayName, setDisplayName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errors, setErrors] = useState([]);

    useEffect(() => {
        if (currentUser) {
            reset();
            history.push('/');
        }
    }, [currentUser, history]);

    useEffect(() => {
        if (Array.isArray(userErr) && userErr.length > 0) {
            setErrors(userErr);
        }
    }, [userErr])
    const reset = () => {
        setDisplayName('');
        setEmail('');
        setPassword('');
        setConfirmPassword('');
        setErrors([]);

    }
    
   

  const handleFormSubmit = async event => {
        event.preventDefault();
        dispatch(signUpUserStart({
            displayName,
            email,
            password,
            confirmPassword
        }))
       
    }
    
        
        const configAuthWrapper = {
            headline: 'Registration'
        };
        return (
            <AuthWrapper {...configAuthWrapper}>

                <div className="formWrap">
                    {errors.length > 0 && (
                        <ul>
                            {errors.map((err, index) => {
                                return (
                                    <li key={index}>
                                        {err}
                                    </li>
                                )
                            })}
                        </ul>
                    )}
                    <form onSubmit={handleFormSubmit}>
                        <FormInput
                            type="text"
                            name="displayName"
                            value={displayName}
                            placeholder="Full Name"
                            handleChange={e => setDisplayName(e.target.value)}
                        />

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
                            id="password"
                            value={password}
                            placeholder="Password"
                            handleChange={e => setPassword(e.target.value)}
                            required
                        />
                        

                        <FormInput
                            type="password"
                            name="confirmPassword"
                            value={confirmPassword}
                            placeholder="Confirm Password"
                            handleChange={e => setConfirmPassword(e.target.value)}
                        />

                        <Button type="submit">
                            Register
                       </Button>
                    </form>
                    <div className="link">
                    <Link to="/Login">
                        Already have an account?
                    </Link>
                    </div>
                    
                </div>
            </AuthWrapper>



        )
    };


export default withRouter(Signup);