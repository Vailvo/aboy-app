import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { signOutUserStart } from './../../redux/User/user.actions'
import './styles.scss';
import Greeting from '../Greeting';
import { Link } from 'react-router-dom';
import Logo from './../../logo/logo_green.png';



const mapState = ({ user }) => ({
    currentUser: user.currentUser
});

const Header = props => {
    const dispatch = useDispatch();
    const { currentUser } = useSelector(mapState);

const signOut = () => {
    dispatch(signOutUserStart());
}

    return (
        <header className="header">
            <div className="wrap">
                <div className="logo">
                    <Link to="/">
                        <img src={Logo} alt="A Boy LOGO" />
                    </Link>
                </div>
                <div className="navbar">
                    {currentUser && (
                        <ul>
                            <li className="greeting">
                                <Greeting/> {currentUser.displayName}
                            </li>
                            <li>
                                <Link to="/Dashboard">
                                    My Account
                                </Link>
                            </li>
                            <li>
                                <span onClick={() => signOut()}>
                                    LogOut
                                </span>
                            </li>

                        </ul>
                    )}
                    {!currentUser && (
                        <ul>
                            
                            <li>
                                <Link to="/Registration">
                                    Register
                                </Link>
                            </li>
                            <li>
                                <Link to="/Login">
                                    Login
                                </Link>
                            </li>
                        </ul>
                    )}


                </div>
            </div>

        </header>
    );
};

Header.defaultProps = {
    currentUser: null
};


export default Header;