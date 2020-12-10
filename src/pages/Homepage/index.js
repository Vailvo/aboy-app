import React from 'react';
import './styles.scss';

// import SlideShow from './../components/SlideShow';

const Homepage = props => {
    return (

        <div className="Homepage">

            
            
          
            
            <hr/>
                <div className="topCatagories">
                    <h2>
                        Top Catagories
                    </h2>

                    <table>

                    </table>
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