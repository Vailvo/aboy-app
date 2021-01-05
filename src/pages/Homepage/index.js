import React from 'react';
import { Link } from 'react-router-dom';
import './styles.scss';
import faucet from './../../images/faucet.png';
import tub from './../../images/clawfootTub.png';
import sink from './../../images/sink.png';
import lighting from './../../images/lighting.png';
import garden from './../../images/garden.png';
import paint from './../../images/paint.png';
import Button from './../../components/forms/Button';
// import SlideShow from './../components/SlideShow';

const Homepage = props => {
    return (

        <div className="Homepage">

            <div className="frame">
                Image or SlideShow
            </div>
            <div className="recentlyViewed">


                <table className="viewed">
                    <tr>
                        <th>
                            Recently Viewed
                    </th>
                    </tr>
                    <tr>
                        <td>
                            1
                        </td>
                        <td>
                            2
                        </td>
                        <td>
                            3
                        </td>
                    </tr>
                    <tr>
                        <td>
                            1
                        </td>
                        <td>
                            2
                        </td>
                        <td>
                            3
                        </td>
                    </tr>
                    <tr>
                        <td>

                        </td>
                        <td>
                            <Button>
                                View All
                            </Button>
                        </td>
                        <td>

                        </td>
                    </tr>
                </table>

            </div>
            <div className="justForYou">

                <table className="forYou">
                    <tr>
                        <th>
                            Just For You
                        </th>
                    </tr>
                    <tr>
                        <td>
                            1
                    </td>
                        <td>
                            2
                    </td>
                        <td>
                            3
                        </td>
                    </tr>
                    <tr>
                        <td>
                            1
                        </td>
                        <td>
                            2
                    </td>
                        <td>
                            3
                        </td>
                    </tr>
                    <tr>
                        <td>

                        </td>
                        <td className="Button">
                            <Button>
                                View All
                            </Button>
                        </td>
                        <td>

                        </td>
                    </tr>

                </table>
                
            </div>


            <hr />
            <div className="topCatagories">


                <table className="topCatTable">
                    <tr>
                        <th>
                            Top Catagories
                        </th>
                    </tr>
                    <hr />
                    <tr>
                        <td>
                            <img src={tub} alt="tub" /><Link to="/Bathtubs"><h4>Bathtubs</h4></Link>
                        </td>
                        <td>
                            <img src={faucet} alt="faucet" /> <Link to="/Faucet"><h4>Faucets</h4></Link>
                        </td>
                        <td>
                            <img src={sink} alt="sink" /><Link to="/Sinks"><h4>Sinks</h4></Link>
                        </td>

                    </tr>
                    <tr>
                        <td>
                            <img src={lighting} alt="Lighting" /><Link to="/Lighting"><h4>Lighting</h4></Link>
                        </td>
                        <td>
                            <img src={garden} alt="garden" /><Link to="/Garden"><h4>Garden</h4></Link>
                        </td>
                        <td>
                            <img src={paint} alt="paint" /><Link to="/Paint"><h4>Paint</h4></Link>
                        </td>
                    </tr>
                </table>
            </div>
            <hr />
            <div className=" services">
                <h2 className="title">
                    Services
                </h2>
                <div className="clmn">
                    Key Cutting
                </div>
                <div className="clmn">
                    Paint Recycling
                </div>
                <div className="clmn">
                    Chain & Wire Cutting
                </div>
                <div className="clmn">
                    Pipe Cutting
                </div>
                <div className="clmn">
                    Load-Outs
                </div>
            </div>
            <hr />

        </div>



    );
};

export default Homepage;