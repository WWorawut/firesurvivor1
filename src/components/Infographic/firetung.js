import React, {} from 'react';
import '../css/Info.css';
import { Icon, Button, Tabs } from 'antd';
import { BrowserRouter as  Link,Redirect } from 'react-router-dom';

import {savescore} from '../../action'
import {connect} from 'react-redux';

import Sound from 'react-sound';
import sound from '../video/sound/infofiretung.mp3';


{/* Info ประเภทถังดับเพลิง */}

class firetung extends React.Component{  
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
  Redirect=()=>{if(this.state.link){ return <Redirect to="/usetung" /> }}

    render() {
      return (
        <div>
        <Sound
        url={sound}
        volume={this.props.sound === false?0:100}
        playStatus={this.state.playStatus}
        onFinishedPlaying={() => this.setState({ playStatus: Sound.status.STOPPED })}
      />  


        <div className="bgrarabhad">
        <div className="bgtypeinfo animated fadeIn">
          <div className="typeinfo firetung">
          {this.Redirect()}
          <Button className="buttonhowto" onClick={this.close} ghost>วิธีการใช้</Button>
          </div>              
        </div>
        </div>
        </div>
      );
    }
  }
  const connectscore = state => ({
    score:state.score,
    sound:state.sound
    })  
  
  export default connect(connectscore)(firetung);