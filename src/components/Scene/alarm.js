import React, {} from 'react';
import '../css/normal.css';

import { Button } from 'antd';
import Popup from './popup';

import alarm1 from "../picture2/popscore/alarm1.png";
import alarm2 from "../picture2/popscore/alarm2.png";

import { BrowserRouter as  Link,Redirect } from 'react-router-dom'
import {savescore,choosealarm} from '../../action'
import {connect} from 'react-redux';

class alarm extends React.Component{

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
      image={alarm1}
      iconclose={'none'}
      />

      <Popup
      open={this.state.popup2}
      image={alarm2}
      iconclose={'none'}
      />

      
      <div className="bgalarm">

      <div className="offset-6 boxjang animated pulse">
      <div className="boxjangtext">
      <p>สถานการณ์ :</p>
      <p className="texthead">ในขณะเกิดเหตุเพลิงไหม้ คุณต้องการที่จะกดกริ่งเพื่อเตือนภัย หรือไม่ ?</p>
      <Button className="buttonjang" onClick={this.openpop({link:'link',score:5,state:'popup'})}>กดสัญญาณ</Button>
      <br/>
      <Button className="buttonjang" onClick={this.openpop({link:'link',score:-5,state:'popup2'})}>ไม่กดสัญญาณ</Button>
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
const connectscore = state => ({
  score:state.score,
  choosecall:state.choosecall,
  choosefriend:state.choosefriend,
  choosealarm:state.choosealarm
  })
  
  export default connect(connectscore)(alarm);