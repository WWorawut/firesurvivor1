import React, {} from 'react';
import '../css/normal.css';

import { Button } from 'antd';
import Popup from './popup';
import Iconout from '@material-ui/icons/ChevronLeft';
import choosebutton from "../picture2/button/choosebutton.png";
import friendtext from "../picture2/speak/friendtext.png";
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
      image={friendtext}
      close={this.popupClose}
      />

          <div className="bgfriend">

          <div className="offset-6 boxjang animated pulse">
          <div className="boxjangtext">
          <p>สถานการณ์ :</p>
          <p className="texthead">หลังจากที่คุณพบเหตุแล้ว คุณต้องการแจ้งเพื่อนร่วมชั้นให้หนี คุณจะแจ้งอย่างไร ?</p>
          <Button className="buttonjang" onClick={this.openpop}>เจ้าค่าเอ้ย ไฟไหม้จ้า เจ้าค่าเอ้ย</Button>
          <br/>
          <Button className="buttonjang" onClick={this.openpop}>ทุกคน หนีเร็ว ไฟไหม้ใหญ่แล้ว</Button>
          <br/>
          <Button className="buttonjang" onClick={this.openpop}>ไฟไหม้! ที่ห้องออฟฟิศชั้น 20 รีบหนีเร็ว</Button>
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