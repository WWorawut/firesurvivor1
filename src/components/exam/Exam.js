import React, {} from 'react';
import Examchoice from './Examchoice';
import logoexam from "../picture/logoexam.svg";
import { BackTop, notification, Modal, Button } from 'antd';
import { BrowserRouter as   Link, Redirect } from 'react-router-dom';

import {connect} from 'react-redux';
import Sound from 'react-sound';
import bgsound from '../video/sound/posttest.mp3';

import '../css/exam.css';
import '../css/login.css';
import 'antd/dist/antd.css'

class Exam extends React.Component {
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
    Redirect=()=>{if(this.state.link){ return <Redirect to="/exam2" /> }}

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
        <div className="coverexam">
        <div className="coverlogo animated bounce">
        <img src={logoexam}/>
        <div className="text-center" style={{marginTop:'12px',}}>
        {this.Redirect()}
        <Button onClick={this.next}>เริ่มทำแบบทดสอบ</Button>
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
  
  export default connect(connectscore)(Exam);