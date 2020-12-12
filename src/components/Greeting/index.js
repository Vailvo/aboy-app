import React from 'react';
import './styles.scss';

class Greeting extends React.Component {
    state = {
        hour: null
        
    }

    componentDidMount() {
        this.getHour()
    }

    getHour = () => {
        const date = new Date();
        const hour = date.getHours()
        this.setState({
           hour
        });
       }
     
       render(){
         const {hour} = this.state;
         return (
           <div className='App'>
             <div>{hour < 12 ? `Good Morning, ` :  `Good evening, `}</div>
           </div>
         );
       }
}

export default Greeting;