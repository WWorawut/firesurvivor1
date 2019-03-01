import React, {} from 'react';
import './css/choose.css';
import { Icon } from 'antd';
import { BrowserRouter as  Link,Redirect } from 'react-router-dom';

import Sound from 'react-sound';
import sound2 from './video/sound/infoescape.mp3';

import {connect} from 'react-redux';

import bgsound from './video/sound/choose.mp3';


class choose extends React.Component{
  constructor(props) {
    super(props);
    this.state = { 
    link:false,
    playStatus:Sound.status.STOPPED,
    playpop:Sound.status.STOPPED,
    urlSound:""
    }
  }

  preexam=()=>{this.setState({ link:true })}
  full=()=>{this.setState({ link2:true })}
  escape=()=>{this.setState({ link3:true })}
  Redirect=()=>{
    if(this.state.link){ return <Redirect to="/preexam"/> }
    if(this.state.link2){ return <Redirect to="/office"/> }
    if(this.state.link3){ return <Redirect to="/modeescape"/> }
  }

  hoversound=data=>()=>{
    this.setState({playStatus:Sound.status.PLAYING,urlSound:data.sound})
  }

  hoversoundoff=()=>{
    this.setState({playStatus:Sound.status.STOPPED})
  }

  componentDidMount(){ 
    setTimeout(this.soundOn,1000);
  }
  soundOn=()=>{
    this.setState({playStatus:Sound.status.PLAYING})
  }

    render() {
      return (
        <div>

      <Sound
        url={bgsound}
        volume={this.props.sound === false?0:100}
        playStatus={this.state.playStatus}
        onFinishedPlaying={() => this.setState({ playStatus: Sound.status.STOPPED })}
      /> 

      <Sound
        url={this.state.urlSound}
        volume={this.props.sound === false?0:100}
        playStatus={this.state.playpop}
        onFinishedPlaying={() => this.setState({ playpop: Sound.status.STOPPED })}
      />
            
          <div className="bgchoose">

            <div className="boxboxchoose">
            <p className="textchoose">เลือกสถานการณ์การเรียนรู้</p>
            <div className="boxx1" onClick={this.full}> เรียนรู้ตามเนื้อเรื่อง </div>

                    <div className="container">
                            <div className="col-sm">
                            <div className="boxx2" >เรียนรู้การแจ้งเหตุ</div>
                            </div>
                            <div className="col-sm">
                            <div className="boxx2">เรียนรู้การระงับเหตุ</div>
                            </div>
                            <div className="col-sm">
                            <div className="boxx2" onClick={this.escape}>เรียนรู้การหนีเหตุ</div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col">
                            {this.Redirect()}
                            <div onClick={this.preexam} className="boxx3">แบบทดสอบก่อนเรียน</div>
                            </div>
                            <div className="col">
                            <div className="boxx3">Fire Survivor Guide</div>
                            </div>
                        </div>
{/* 
            
                        <div className="boxx2" onMouseOver={this.hoversound({sound:sound2})} onMouseOut={this.hoversoundoff} >เรียนรู้การแจ้งเหตุ</div> */}

{/* 
            <div className="sm col-3">
            <div className="boxx2"></div>
            <div className="boxx2"></div>
            <div className="boxx2"></div>
            </div> */}
            </div>





          {/* <div className="container">
            <div className="background-img">
              <div className="box11">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <div className="content">
                  <img className="mousegif" src={mousegif} />
                  {this.Redirect()}
                  <Icon className="closehowto" type="close" onClick={this.close}/>
                </div>
                
              </div>
              </div>
            </div> */}
          </div>

        </div>




  
      );
    }
  }
  
  const connectscore = state => ({
    sound:state.sound
    })
    
    export default connect(connectscore)(choose);