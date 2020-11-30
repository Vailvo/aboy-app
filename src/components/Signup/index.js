import React, { useState } from 'react';
import { withRouter, Link } from 'react-router-dom';
import './styles.scss'
import FormInput from '../forms/FormInput';
import Button from '../forms/Button';
import { auth, handleUserProfile } from '../../firebase/utils'
import AuthWrapper from '../AuthWrapper';


const Signup = props => {
    const [displayName, setDisplayName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errors, setErrors] = useState([]);

    const reset = () => {
        setDisplayName('');
        setEmail('');
        setPassword('');
        setConfirmPassword('');
        setErrors([]);

    }
    

  const handleFormSubmit = async event => {
        event.preventDefault();
       
        if (password  < 8) {
            const err = ['Password should be at least 8 characters long']
            setErrors(err);
        }
        if (password !== confirmPassword) {
            const err = ['Passwords Don\'t Match'];
           setErrors(err);
            return;
        }
        try {
            const { user } = await auth.createUserWithEmailAndPassword(email, password);
            await handleUserProfile(user, { displayName });
            reset();
            props.history.push('/');

        } catch (error) {
            console.log(error);
        }
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
                            value={password}
                            placeholder="Password"
                            handleChange={e => setPassword(e.target.value)}
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
                    <Link to="/Login">
                        Already have an account?
                    </Link>
                </div>
            </AuthWrapper>



        )
    };


export default withRouter(Signup);