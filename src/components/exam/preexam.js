import React, {} from 'react';
import Examchoice from './Examchoice';
import logoexam from "../picture/logopreexam.svg";
import { BackTop, notification, Modal, Button } from 'antd';
import { BrowserRouter as   Link, Redirect } from 'react-router-dom';
import {connect} from 'react-redux';
import Sound from 'react-sound';
import bgsound from '../video/sound/pretest.mp3';
import '../css/login.css';

import '../css/exam.css';
import 'antd/dist/antd.css'

class preexam extends React.Component {
    state = { 
      link:false,
      playStatus:Sound.status.STOPPED
    };

    componentDidMount(){ 
      setTimeout(this.soundOn,1000);
    }
    soundOn=()=>{
      this.setState({playStatus:Sound.status.PLAYING})
    }
  

    next=()=>{this.setState({ link:true })}
    Redirect=()=>{if(this.state.link){ return <Redirect to="/preexam2" /> }}

  render() {
    return (

      <div>
      <Sound
        url={bgsound}
        volume={this.props.sound === false?0:100}
        playStatus={this.state.playStatus}
        onFinishedPlaying={() => this.setState({ playStatus: Sound.status.STOPPED })}
      />  


    <div className="font">
        <div className="coverpreexam">
        <div className="coverprelogo animated bounce">
        <img src={logoexam}/>
        <div className="text-center" style={{marginTop:'12px',}}>
        {this.Redirect()}
        <Button onClick={this.next} className="button">เริ่มทำแบบทดสอบ</Button>
        
        </div>
        </div>
        </div>
      
      </div>
      </div>

    );
  }
}

const connectscore = state => ({
  sound:state.sound
  })
  
  export default connect(connectscore)(preexam);