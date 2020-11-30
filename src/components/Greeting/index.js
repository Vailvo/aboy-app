import React from 'react';

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
             <li>{hour < 12 ? `Good Morning, ` : `Good evening, `}</li>
           </div>
         );
       }
}

export default Greeting;