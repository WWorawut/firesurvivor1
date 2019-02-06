import React, {} from 'react';
import '../css/normal.css';

import { Button } from 'antd';
import Popup from '../Scene/popup';

import listfire1 from "../picture2/popscore/listfire11.png";
import listfire2 from "../picture2/popscore/listfire12.png";
import listfire3 from "../picture2/popscore/listfire13.png";

import { BrowserRouter as  Link,Redirect } from 'react-router-dom'
import {savescore} from '../../action'
import {connect} from 'react-redux';

class fire1 extends React.Component{
  state={
    popup:false,
    link:false,
  }

 

  openpop=data=>()=>{
    this.setState({[data.state]:true});
    this.props.dispatch(savescore(data.score));
    setTimeout(this.popupClose(data),2000);
  }
    
  popupClose=data=>()=>{
    this.setState({[data.state]:false})
    setTimeout(this.setlink(data.link),1000);  
  }

  setlink=link=>()=>{this.setState({ [link]:true })}


  // Redirect1=()=>{if(this.state.l){ return <Redirect to="/" /> }}
  Redirect=()=>{if(this.state.link){ return <Redirect to="/firetype" /> }}
  

   render() {
    return (
      <div>
        {this.Redirect()}
        {/* {this.Redirect1()} */}

      <Popup
      open={this.state.popup}
      image={listfire1}
      iconclose={'none'}
      />

      <Popup
      open={this.state.popup2}
      image={listfire2}
      iconclose={'none'}
      />

      <Popup
      open={this.state.popup3}
      image={listfire3}
      iconclose={'none'}
      />

      <div className="bgfireoffice">

      <div className=" boxfireoffice animated pulse">
      <div className="boxjangtext">
      <p>สถานการณ์ :</p>
      <p className="texthead">ไมโครเวฟเกิดความร้อนสูงจนเกิดประกายไฟไหม้ ลุกไหม้ผ้าเช็ดโต๊ะ ควรทำเช่นใดเพื่อไม่ให้ไฟลุกลาม?</p>
      <Button className="buttonjang" onClick={this.openpop({link:'link',score:-3,state:'popup'})}>ดึงปลั๊กไมโครเวฟออก ด้วยมือเปล่า</Button>
      <br/>
      <Button className="buttonjang" onClick={this.openpop({link:'link',score:3,state:'popup2'})}>นำสิ่งของรอบๆ ออก</Button>
      <br/>
      <Button className="buttonjang" onClick={this.openpop({link:'link',score:-3,state:'popup3'})}>ใช้น้ำราด เพื่อดับเพลิง</Button>
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
const connectscore = state => ({
  score:state.score
  })

  export default connect(connectscore)(fire1);