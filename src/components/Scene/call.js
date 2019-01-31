import React, {} from 'react';
import '../css/normal.css';

import { Button } from 'antd';
import Popup from './popup';
import Iconout from '@material-ui/icons/ChevronLeft';
import choosebutton from "../picture2/button/choosebutton.png";
import popdeck from "../picture2/deck/warningdeck.png";
import { BrowserRouter as  Link,Redirect } from 'react-router-dom'

class call extends React.Component{

  state={
    popup:false,
    link:false,
  }

  openpop=()=>{
    this.setState({popup:true})
  }
  popupClose=()=>{
    this.setState({popup:false})
  }
  
  out=()=>{this.setState({ link:true })}
  Redirect=()=>{if(this.state.link){ return <Redirect to="/" /> }}
   
   render() {
    return (
      <div>
      <Popup
      open={this.state.popup}
      image={popdeck}
      close={this.popupClose}
      />

      <div className="bgcall">

      <div className="offset-6 boxjang animated pulse">
      <div className="boxjangtext">
      <p>สถานการณ์ :</p>
      <p className="texthead">คุณจะแจ้งข้อมูลให้เจ้าหน้าที่ดับเพลิงว่าอย่างไรในสถานการณ์ฉุกเฉิน ?</p>
      <Button className="buttonjang">คุณๆ ไฟไหม้ตึกใหญ่แล้ว ช่วยด้วย!!</Button>
      <br/>
      <Button className="buttonjang">ผมชื่อ... ไฟไหม้ที่ตึกสยามอาร์ท 5 นาทีแล้วครับ</Button>
      <br/>
      <Button className="buttonjang">ไฟไหม้ตึกสยามอาร์ทครับ รีบมาเลยนะครับ</Button>
      </div>
      </div>

      {/* <img className="choosebutton" src={choosebutton} onClick={this.openpop} /> */}
      </div>

      {/* {this.Redirect()}
      <Button className="out" ghost onClick={this.out}> <Iconout/>ออก</Button> */}
      </div>
    );
  }
}
  
  export default call;