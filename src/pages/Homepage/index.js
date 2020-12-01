import React from 'react';
import './styles.scss';
import Hardware from './../../images/hardware.jpg';
import Plumbing from './../../images/plumbing.jpg';
import Lumber from './../../images/lumber.png';
import Paint from './../../images/paint.jpg';
// import SlideShow from './../components/SlideShow';

const Homepage = props => {
    return (

        <div className="Homepage">

            <div className="row">
                <div className="column">
                    <h1>Hardware</h1>
                    <img src={Hardware} alt="Hardware" width="308" height="208px" className="hardware" />
                </div>
                <div className="column">
                    <h1>Plumbing</h1>
                    <img src={Plumbing} alt="Plumbing" width="308" height="208px" className="plumbing" />
                </div>
                <div className="column">
                    <h1>Lumber</h1>
                    <img src={Lumber} alt="Lumber" width="308" height="208px" className="lumber" />
                </div>
                <div className="column">
                    <h1>Paint</h1>
                    <img src={Paint} alt="Paint" width="308" height="208px" className="paint" />
                </div>
            </div>

            <hr/>
            
            <div className="showRoom">
                <h1>
                    Showroom
                </h1>

                
            </div>
            
            <hr/>
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

        </div>
                            
                        

    );
};

export default Homepage;