import React, {} from 'react';
import '../css/Info.css';
import { Icon } from 'antd';
import { BrowserRouter as  Link,Redirect } from 'react-router-dom';

import {stopTimer} from '../../action'
import {connect} from 'react-redux';

import Sound from 'react-sound';
import sound from '../video/sound/infoescape.mp3';

{/* Info หนีเหตุ */}
const formattedSeconds = (sec) =>
  Math.floor(sec / 60) +
    ':' +
  ('0' + sec % 60).slice(-2);

class escape extends React.Component{  
  state = { 
    link:false,
    playStatus:Sound.status.STOPPED
  };

  componentDidMount(){ 
    this.props.dispatch(stopTimer(false));
    setTimeout(this.soundOn,1200);
  }
  soundOn=()=>{
    this.setState({playStatus:Sound.status.PLAYING})
  }

  close=()=>{this.setState({ link:true })}
  Redirect=()=>{if(this.state.link){ return <Redirect to="/share" /> }}

    render() {
      return (
        <div>
           <Sound
        url={sound}
        volume={this.props.sound === false?0:100}
        playStatus={this.state.playStatus}
        onFinishedPlaying={() => this.setState({ playStatus: Sound.status.STOPPED })}
      />  

{/* <h1 >{formattedSeconds(this.props.time)}</h1> */}


        <div className="bgescape">
        <div className="bgtypeinfo animated fadeIn ">
          <div className="typeinfo escape">
          {this.Redirect()}
          <Icon className="closea" type="close" onClick={this.close}/>
          </div>              
        </div>
        </div>
        </div>
      );
    }
  }
  const connectscore = state => ({
    score:state.score,
    sound:state.sound,
    timer:state.timer,
    time:state.time
    })  
  
export default connect(connectscore)(escape);