import React, {} from 'react';
import '../css/login.css';
import { Icon } from 'antd';

class Csum extends React.Component{

  close=()=>{
    window.location.href="/exam";
  }
  
    render() {
      return (
        <div className="bgg">
        <div className="bgtype">
          <div className="typepeople card3">
          <Icon className="close" type="close" onClick={this.close}/>
          </div>              
        </div>
        </div>
      );
    }
  }
  
  export default Csum;