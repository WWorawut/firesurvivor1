import React, {} from 'react';
import '../css/normal.css';

import { Button } from 'antd';
import Popup from './popup';

import friend1 from "../picture2/popscore/friend1.png";
import friend2 from "../picture2/popscore/friend2.png";
import friend3 from "../picture2/popscore/friend3.png";

import { BrowserRouter as  Link,Redirect } from 'react-router-dom'
import {savescore,choosefriend} from '../../action'
import {connect} from 'react-redux';

class tellfriend extends React.Component{

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

  Redirect=()=>{
    if(this.state.link){ 
      if(this.props.choosealarm && this.props.choosecall && this.props.choosefriend&& this.state.link){ return <Redirect to="/janghad" /> }else{ return <Redirect to="/officeoutside" />} 
    } 
} 

   
   render() {
    return (
      <div>
        {this.Redirect()}
        <Popup
      open={this.state.popup}
      image={friend1}
      iconclose={'none'}
      />

      <Popup
      open={this.state.popup2}
      image={friend2}
      iconclose={'none'}
      />

      <Popup
      open={this.state.popup3}
      image={friend3}
      iconclose={'none'}
      />


          <div className="bgfriend">

          <div className="offset-6 boxjang animated pulse">
          <div className="boxjangtext">
          <p>สถานการณ์ :</p>
          <p className="texthead">หลังจากที่คุณพบเหตุแล้ว คุณต้องการแจ้งเพื่อนร่วมชั้นให้หนี คุณจะแจ้งอย่างไร ?</p>
          <Button className="buttonjang" onClick={this.openpop({link:'link',score:1,state:'popup'})}>เจ้าค่าเอ้ย ไฟไหม้จ้า เจ้าค่าเอ้ย</Button>
          <br/>
          <Button className="buttonjang" onClick={this.openpop({link:'link',score:2,state:'popup2'})}>ทุกคน หนีเร็ว ไฟไหม้ใหญ่แล้ว</Button>
          <br/>
          <Button className="buttonjang" onClick={this.openpop({link:'link',score:3,state:'popup3'})}>ไฟไหม้! ที่ห้องออฟฟิศชั้น 20 รีบหนีเร็ว</Button>
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
  score:state.score,
  choosecall:state.choosecall,
  choosefriend:state.choosefriend,
  choosealarm:state.choosealarm
  })
  
  export default connect(connectscore)(tellfriend);