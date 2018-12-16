import React, {} from 'react';
import '../css/login.css';
import { Icon } from 'antd';

class allsum extends React.Component {

    close=()=>{
        window.location.href="/exam";
      }
  
  render() {
    return (
    <div>
      <a-scene>
          <a-sky src="/Final01.jpg" rotation="0 -130 0"></a-sky>
        <a-text font="kelsonsans" value="" width="6" position="-2.5 0.25 -1.5" rotation="0 15 0"></a-text>
        
      </a-scene>

      <div className="typepeople">
          <Icon className="close" type="close" onClick={this.close}/>
          </div>   
          
    </div>
     
     
    );
  }
}

export default allsum;