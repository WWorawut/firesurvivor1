import React, {} from 'react';
import './App.css';
import './css/login.css';
import logo from "./picture/logo.png";
import {connect} from 'react-redux';
import { BrowserRouter as  Link,Redirect } from 'react-router-dom';

import Lottie from 'react-lottie';
import animationData from './animate/data.json'

import {takeuser} from './../action'
import Preload from './preload';
import { Preloader, Placeholder } from 'react-preloading-screen';

class Loginscreen extends React.Component {
constructor(props){
  super(props);
  this.state={
    value:""
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
    

    const loginvideo = {
      loop: true,
      autoplay: true, 
      animationData: animationData,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
      }
    };



    if(this.state.link){ return <Redirect to="/intro" /> }
    return (
      <Preloader>
        <div className="dddd">

          <Lottie options={loginvideo}
              height={"100vh"}
              width={"100%"}
              style={{position:'absolute'}}/>

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

        <Placeholder>
           <span><Preload/></span>
        </Placeholder>
       </Preloader>

    );
  }
}

const connectscore = state => ({
  user:state.user
  })
  
  export default connect(connectscore) (Loginscreen);
