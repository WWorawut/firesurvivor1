import React, {} from 'react';
import '../css/normal.css';

import { Button } from 'antd';
import Popup from './popup';
import Iconout from '@material-ui/icons/ChevronLeft';
import choosebutton from "../picture2/button/choosebutton.png";
import popdeck from "../picture2/deck/warningdeck.png";
import { BrowserRouter as  Link,Redirect } from 'react-router-dom'

class alarm extends React.Component{

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

      
      <div className="bgalarm">

      <div className="offset-6 boxjang animated pulse">
      <div className="boxjangtext">
      <p>สถานการณ์ :</p>
      <p className="texthead">ในขณะที่ไฟไหม้มาแล้ว 10 นาทีแต่กริ่งสัญญานไฟดังเพียงชั้นที่คุณอยู่ คุณต้องการกดกริ่งทั้งอาคารหรือไม่ ?</p>
      <Button className="buttonjang">กดสัญญาณ</Button>
      <br/>
      <Button className="buttonjang">ไม่กดสัญญาณ</Button>
      </div>


      {/* <img className="choosebutton" src={choosebutton} onClick={this.openpop} /> */}
      </div>

      {/* {this.Redirect()}
      <Button className="out" ghost onClick={this.out}> <Iconout/>ออก</Button> */}
      </div>

      </div>
    );
  }
}
  
  export default alarm;