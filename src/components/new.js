import React, {} from 'react';
import './css/360.css';
import { Icon } from 'antd';

class New extends React.Component {


  clicked = true;

  
  render() {
    return (
    <div>
      <a-scene>
          <a-sky src="/Final01.jpg" rotation="0 -130 0"></a-sky>
        <a-text font="kelsonsans" value="" width="6" position="-2.5 0.25 -1.5" rotation="0 15 0"></a-text>
      </a-scene>

      <div className="bgmock">
        <div className="bgtypemock">
          <div className="mock">
          {/* <Icon className="closea" type="close" onClick={this.close}/> */}
          <p className="name">คุณ</p>
          </div>              
        </div>
        </div>

        <div className="setting">
        <Icon type="info-circle" />
        </div> 


{/* sound setting */}
        <div className="bar-c">
          <div id="bar-1" className="bar"></div>
          <div id="bar-2" className="bar"></div>
          <div id="bar-3" className="bar"></div>
          <div id="bar-4" className="bar"></div>
          <div id="bar-5" className="bar"></div>
          <div id="bar-6" className="bar"></div>
        </div>
        



    </div>
     
     
    );
  }
}

export default New;
