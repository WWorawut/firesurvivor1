import React, {} from 'react';
import './css/setting.css';
import { Icon } from 'antd';

class New extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      clickedSound:true
    };
  }

  
  // clickedSound=()=>{
  //   this.setState({
  //     clickedSound:!this.state.clickedSound
  //   })
  // }
  
  // render() {
  //   let sound;
  //   if(this.state.clickedSound===true){
  //     sound='bar'
  //   }else{
  //     sound='bar noAnim'
  //   }

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
        {/* <div className="bar-c" onClick={this.clickedSound}>
          <div id="bar-1" className={sound}></div>
          <div id="bar-2" className={sound}></div>
          <div id="bar-3" className={sound}></div>
          <div id="bar-4" className={sound}></div>
          <div id="bar-5" className={sound}></div>
          <div id="bar-6" className={sound}></div>
        </div> */}


{/* time setting */}
        <div className="time">
        <div className="container">
          <div className="stopwatch">
            <input type="checkbox" style={{display:'none'}} id="start"/>
            <div className="timer">
              <span className="minutes"></span>
              <span>:</span>
              <span className="seconds"></span>
            </div>
            <label for="start" className="start"></label>
          </div>
        </div>
        </div>
        



    </div>
     
     
    );
  }
}

export default New;
