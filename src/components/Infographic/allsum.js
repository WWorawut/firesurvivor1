import React, {} from 'react';
import '../css/login.css';
import { Icon } from 'antd';
import { BrowserRouter as  Link,Redirect } from 'react-router-dom';

class allsum extends React.Component {

    close=()=>{
        window.location.href="/exam";
      }
  
  render() {
    return (
    <div>
      <a-scene>
          <a-sky src="/allsum.png" rotation="0 -280 0"></a-sky>
        <a-text font="kelsonsans" value="" width="6" position="-2.5 0.25 -1.5" rotation="0 15 0"></a-text>
        
      </a-scene>

          <div className="typepeople">
          <Icon className="closea" type="close" onClick={this.close}/>
          </div>
          
    </div>
     
     
    );
  }
}

export default allsum;