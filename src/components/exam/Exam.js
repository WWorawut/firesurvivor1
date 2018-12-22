import React, {} from 'react';
import Examchoice from './Examchoice';
import logoexam from "../picture/logoexam.svg";
import { BackTop, notification, Modal, Button } from 'antd';

import '../css/exam.css';
import 'antd/dist/antd.css'

class Exam extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
    };
  }

    next=()=>{
        window.location.href="/exam2";
    }


  render() {
    return (
    <div className="font">
        <div className="coverexam">
        <div className="coverlogo">
        <img src={logoexam}/>
        <div className="text-center" style={{marginTop:'12px',}}>
        <Button onClick={this.next}>เริ่มทำแบบทดสอบ</Button>
        </div>
        </div>
        </div>
      
      </div>

    );
  }
}

export default Exam;