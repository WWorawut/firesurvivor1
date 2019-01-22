import React, {} from 'react';
import Examchoice from './Examchoice';
import logoexam from "../picture/logoexam.svg";
import { BackTop, notification, Modal, Button } from 'antd';
import { BrowserRouter as   Link, Redirect } from 'react-router-dom';

import '../css/exam.css';
import 'antd/dist/antd.css'

class Exam extends React.Component {
    state = { 
      link:false
    };
  

    next=()=>{this.setState({ link:true })}
    Redirect=()=>{if(this.state.link){ return <Redirect to="/exam2" /> }}

  render() {
    return (
    <div className="font">
        <div className="coverexam">
        <div className="coverlogo">
        <img src={logoexam}/>
        <div className="text-center" style={{marginTop:'12px',}}>
        {this.Redirect()}
        <Button onClick={this.next}>เริ่มทำแบบทดสอบ</Button>
        </div>
        </div>
        </div>
      
      </div>

    );
  }
}

export default Exam;