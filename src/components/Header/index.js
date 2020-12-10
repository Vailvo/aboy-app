import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { signOutUserStart } from './../../redux/User/user.actions'
import './styles.scss';
import Greeting from '../Greeting';
import { Link } from 'react-router-dom';
import Logo from './../../logo/logo_green.png';
import Magfi from './../../images/magfi.png';



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
                <div className="container">
                    <div className="row">
                        <div className="column">
                            <Link to="/Hardware"> Hardware </Link>
                        </div>
                        <div className="column1">
                            <Link to="/Plumbing">Plumbing</Link>
                        </div>
                        <div className="column2">
                            <Link to="/Lumber">Lumber</Link>
                        </div>
                        <div className="column3">
                            <Link to="/Paint"> Paint</Link>
                        </div>
                        <div className="column4">
                            <Link to="/Electrical">Electrical</Link>
                        </div>
                        <div className="column5">
                            <Link to="/Garden">Garden</Link>
                        </div>
                        <div className="dropdown" >
                            <div className="dropbtn"> Showroom <div class="triangle-down"></div> </div>
                            <div className="dropdown-content" >
                                <a href="/Lighting">Lighting</a>
                                <a href="/Bathtubs">Bathtubs</a>
                                <a href="/Sinks">Sinks</a>
                                <a href="/Faucets">Faucets</a>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="navbar">
                    <div className="search">
                        <input type="search" placeholder="Search..." ></input>
                        {/* <img src={Magfi} alt="Search" className="magfi" /> */}
                    </div>
                    <div className="cart">
                        Cart   <span class="glyphicon">&#xe116;</span>
                    </div>
                    <div className="stores">
                        <div className="dropdown">
                            <div className="dropbtn">Stores<div class="triangle-down"></div> </div>
                            <div className="dropdown-content">
                                <h4>My Store</h4>
                                <p>7365 SW Barbur Blvd,</p>
                                <p>Porland, OR 97219</p>
                                <p>(503)245-0714</p>
                                <a href="/">Change Store</a>
                                <a href="/">Details</a>
                                <hr/>
                                <h4> Locate a Store</h4>
                                <input type="number" placeholder="Enter Zipcode">

                                </input>
                                <a href="/">View All Stores</a>
                               
                            </div>
                        </div>
                    </div>
                    {/* <div className="contactUs">
                        Contact Us: (503)245-0714 
                    </div> */}
                    {currentUser && (
                        <ul>
                            <li className="greeting">
                                <Greeting /> {currentUser.displayName}
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

                        <>

                            <div className="register">
                                <Link to="/Registration">
                                    Register
                                </Link>
                            </div>
                            <div className="login">
                                <Link to="/Login">
                                    Login
                                </Link>
                            </div>
                        </>
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