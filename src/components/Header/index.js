import React from 'react';
import { connect } from 'react-redux';
import './styles.scss';
import Greeting from '../Greeting';
import { Link } from 'react-router-dom';
import Logo from './../../logo/logo_green.png';
import { auth } from '../../firebase/utils';

const Header = props => {
    const { currentUser } = props;
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
                                <span onClick={() => auth.signOut()}>
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

const mapStateToProps = ({ user }) => ({
    currentUser: user.currentUser
});
export default connect(mapStateToProps, null)(Header);