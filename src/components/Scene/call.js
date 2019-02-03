import React, {} from 'react';
import '../css/normal.css';

import { Button } from 'antd';
import Popup from './popup';
import Iconout from '@material-ui/icons/ChevronLeft';
import choosebutton from "../picture2/button/choosebutton.png";
import calltext from "../picture2/speak/calltext.png";
import callcorrect1 from "../picture2/popscore/callcorrect1.png";

import { BrowserRouter as  Link,Redirect } from 'react-router-dom'
import {savescore} from '../../action'
import {connect} from 'react-redux';

class call extends React.Component{
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


  Redirect=()=>{if(this.state.link){ return <Redirect to="/" /> }}
  Redirect1=()=>{if(this.state.l){ return <Redirect to="/officeoutside" /> }}
  

   render() {
    return (
      <div>
        {this.Redirect()}
        {this.Redirect1()}

      <Popup
      open={this.state.popup}
      image={calltext}
      iconclose={'none'}
      />

      <Popup
      open={this.state.popup2}
      image={callcorrect1}
      iconclose={'none'}
      />


      <div className="bgcall">

      <div className="offset-6 boxjang animated pulse">
      <div className="boxjangtext">
      <p>สถานการณ์ :</p>
      <p className="texthead">คุณจะแจ้งข้อมูลให้เจ้าหน้าที่ดับเพลิงว่าอย่างไรในสถานการณ์ฉุกเฉิน ?</p>
      <Button className="buttonjang" onClick={this.openpop({link:'link',score:1,state:'popup'})}>คุณๆ ไฟไหม้ตึกใหญ่แล้ว ช่วยด้วย!!</Button>
      <br/>
      <Button className="buttonjang" onClick={this.openpop({link:'l',score:-1,state:'popup2'})}>ผมชื่อ... ไฟไหม้ที่ตึกสยามอาร์ท 5 นาทีแล้วครับ</Button>
      <br/>
      <Button className="buttonjang" onClick={this.openpop(-2)}>ไฟไหม้ตึกสยามอาร์ทครับ รีบมาเลยนะครับ</Button>
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

  export default connect(connectscore)(call);