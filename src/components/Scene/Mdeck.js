import React, {} from 'react';
import '../css/Info.css';
import '../css/button.css';

import { Button } from 'antd';
import Popup from './popup';
import Iconout from '@material-ui/icons/ChevronLeft';
import choosebutton from "../picture2/button/choosebutton.png";
import popdeck from "../picture2/deck/Mwarningdeck.png";
import { Link,Redirect } from 'react-router-dom'

import {connect} from 'react-redux';

import Sound from 'react-sound';
import sound from '../video/sound/speakdeck.mp3';

import Preload from '../preload';
import { Preloader, Placeholder } from 'react-preloading-screen';

class Mdeck extends React.Component{

  state={
    popup:false,
    link:false,
    playStatus:Sound.status.STOPPED
  }

  openpop=data=>()=>{
    setTimeout(this.soundOn,100);
    this.setState({popup:true})
  }
  popupClose=()=>{
    this.setState({popup:false, playStatus:Sound.status.STOPPED})
  }

  soundOn=()=>{
    this.setState({playStatus:Sound.status.PLAYING})
  }
    
  
  setlink=link=>()=>{this.setState({ [link]:true })}
  Redirect=()=>{if(this.state.link){ return <Redirect to="/Mstair16" /> }} 
   
   render() {
    return (
      <Preloader>
      <div>
      <Popup
      open={this.state.popup}
      image={popdeck}
      close={this.popupClose}
      maxWidth='xs'
      />

      <Sound
        url={sound}
        volume={this.props.sound === false?0:100}
        playStatus={this.state.playStatus}
        onFinishedPlaying={() => this.setState({ playStatus: Sound.status.STOPPED })}
      />  

      <div className="bgdeck">
      <div className="boxchoose">
      <img className="choosebutton" src={choosebutton} onClick={this.openpop({link:'link',state:'popup'})} />
      </div>
      </div>
      {this.Redirect()}
      <Link to = "/Mstair3600"><Button className="out" ghost onClick={this.out}> <Iconout/>กลับ</Button></Link>
      </div>

      <Placeholder>
<span><Preload/></span>
</Placeholder>
</Preloader>
    );
  }
}
const connectscore = state => ({
  sound:state.sound
  })
  
  export default connect(connectscore)(Mdeck);