import React, {} from 'react';
import './css/login.css';
import { Icon } from 'antd';

class Howplay extends React.Component{

   close=()=>{
     window.location.href="/office";
   }

    render() {
      return (
        <div className="bgg">
        <div className="bgtype">
          <div className="typepeople">
          <Icon className="close" type="close" onClick={this.close}/>
          </div>              
        </div>
        </div>
      );
    }
  }
  
  export default Howplay;