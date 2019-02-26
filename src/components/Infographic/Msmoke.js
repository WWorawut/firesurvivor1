import React, {} from 'react';
import '../css/Info.css';
import { Icon } from 'antd';
import { BrowserRouter as  Link,Redirect } from 'react-router-dom';

import {savescore} from '../../action'
import {connect} from 'react-redux';

import Sound from 'react-sound';
import sound from '../video/sound/infosmoke.mp3';
{/* Info หนีควัน*/}

class Msmoke extends React.Component{  
  state = { 
    link:false,
    playStatus:Sound.status.STOPPED
  };

  componentDidMount(){ 
    setTimeout(this.soundOn,1200);
  }
  soundOn=()=>{
    this.setState({playStatus:Sound.status.PLAYING})
  }

  close=()=>{this.setState({ link:true })}
  Redirect=()=>{if(this.state.link){ return <Redirect to="/Mstair11" /> }}

    render() {
      return (
        <div>
        <Sound
        url={sound}
        volume={this.props.sound === false?0:100}
        playStatus={this.state.playStatus}
        onFinishedPlaying={() => this.setState({ playStatus: Sound.status.STOPPED })}
      />


        <div className="bgsmoke">
        <div className="bgtypeinfo animated fadeIn">
          <div className="typeinfo smoke">
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
    sound:state.sound
    })  
  
  export default connect(connectscore)(Msmoke);