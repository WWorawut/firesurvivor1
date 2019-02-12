import React, {} from 'react';
import '../css/login.css';
import { Icon } from 'antd';
import { BrowserRouter as  Link,Redirect } from 'react-router-dom';

import {savescore} from '../../action'
import {connect} from 'react-redux';

import Sound from 'react-sound';
import sound from '../video/sound/infoallsum.mp3';

class allsum extends React.Component {
  state={
    playStatus:Sound.status.STOPPED
  }

  componentDidMount(){ 
    setTimeout(this.soundOn,1200);
  }
  soundOn=()=>{
    this.setState({playStatus:Sound.status.PLAYING})
  }


    close=()=>{
        this.setState({
          redirect:true
        })
      }
  
  render() {
    if(this.state.redirect){return <Redirect to="/exam" /> }
    return (
    <div>

      <Sound
        url={sound}
        volume={this.props.sound === false?0:100}
        playStatus={this.state.playStatus}
        onFinishedPlaying={() => this.setState({ playStatus: Sound.status.STOPPED })}
      />  


      <a-scene>
          <a-sky src="/allsum.png" rotation="0 -280 0"></a-sky>
        <a-text font="kelsonsans" value="" width="6" position="-2.5 0.25 -1.5" rotation="0 15 0"></a-text>
        
      </a-scene>

          <div className="typepeople">
          <Icon className="closea" type="close" onClick={this.close}/>
          </div>
          
    </div>
     
     
    );
  }
}
const connectscore = state => ({
  score:state.score,
  sound:state.sound
  })  

  export default connect(connectscore)(allsum);