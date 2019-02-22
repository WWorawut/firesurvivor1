import React, {} from 'react';
import Examchoice from './Examchoice';
import logoexam from "../picture/logopreexam.svg";
import { BackTop, notification, Modal, Button } from 'antd';
import { BrowserRouter as   Link, Redirect } from 'react-router-dom';

import '../css/exam.css';
import 'antd/dist/antd.css'

class preexam extends React.Component {
    state = { 
      link:false
    };
  

    next=()=>{this.setState({ link:true })}
    Redirect=()=>{if(this.state.link){ return <Redirect to="/preexam2" /> }}

  render() {
    return (
    <div className="font">
        <div className="coverpreexam">
        <div className="coverprelogo">
        <img src={logoexam}/>
        <div className="text-center" style={{marginTop:'12px',}}>
        {this.Redirect()}
        <Button onClick={this.next} className="button">เริ่มทำแบบทดสอบ</Button>
        
        </div>
        </div>
        </div>
      
      </div>

    );
  }
}

export default preexam;