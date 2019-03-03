import React, {} from 'react';
import './App.css';
import './css/login.css';
import logo from "./picture/logo.png";
import YouTube from 'react-youtube';
import { Player, ControlBar } from 'video-react';
import intro from "./video/file/ae.mp4";
import {connect} from 'react-redux';
import { BrowserRouter as  Link,Redirect } from 'react-router-dom';

import {takeuser} from './../action'

class Loginscreen extends React.Component {
constructor(props){
  super(props);
  this.state={
  }
}

 login=()=>{
  this.props.dispatch(takeuser(this.state.value));
  this.setState({link:true});
 }

  onChangeValue=(e)=>{
    this.setState({
      value:e.target.value
    })
  }

  render() {
    if(this.state.link){ return <Redirect to="/intro" /> }
    return (
        <div className="dddd cd">
          {/* <Player 
            ref="player"
            autoPlay
            playsInline={true}
            loop={true}
            className="vdologin"
            >
            <source src={intro} />
            <ControlBar autoHide={false} disableDefaultControls></ControlBar>
            </Player>  */}
        <div className="bgbbbb">
        <div className="fontlog"> 

          <div className="box">
            <img className="piclogo" src={logo}/>
            <div className="space">
            <p style={{marginBottom:"8px"}}>ใส่ชื่อของคุณ</p>

            <form>
            <input className="form-control fontlog" type="text" placeholder="" required onChange={this.onChangeValue} value={this.state.value}/>
            {this.state.value === "" ?
              <button type="submit" className="btn btn-info fontlog">เริ่มสำรวจ</button>
              :
              <button type="button" onClick={this.login} class="btn btn-info fontlog" data-toggle="modal" data-target="#exampleModalCenter">
                ไปกันเลย
              </button>
            } 
            </form>
            </div>
              </div>
            </div>
          </div>
        </div>   
    );
  }
}

const connectscore = state => ({
  user:state.user
  })
  
  export default connect(connectscore) (Loginscreen);
