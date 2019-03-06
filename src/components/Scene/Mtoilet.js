import React, {} from 'react';
import '../css/Info.css';
import '../css/button.css';

import { Button } from 'antd';
import Popup from './popup';
import Iconout from '@material-ui/icons/ChevronLeft';
import choosebutton from "../picture2/button/choosebutton.png";
import poptoilet from "../picture2/toilet/Mwarningtoilet.png";

import { Link,Redirect } from 'react-router-dom';

import {savescore} from '../../action'
import {connect} from 'react-redux';

import Sound from 'react-sound';
import sound from '../video/sound/speaktoilet.mp3';

class Mtoilet extends React.Component{

  state={
    popup:false,
    link:false,
    playStatus:Sound.status.STOPPED
  }

  openpop=data=>()=>{
    setTimeout(this.soundOn,100);
    this.setState({popup:true})
    this.props.dispatch(savescore(data.score));
  }
  popupClose=()=>{
    this.setState({popup:false, playStatus:Sound.status.STOPPED})
  }

  soundOn=()=>{
    this.setState({playStatus:Sound.status.PLAYING})
  }
  
  setlink=link=>()=>{this.setState({ [link]:true })}
  Redirect=()=>{if(this.state.link){ return <Redirect to="/stair16" /> }}
   
   render() {
    return (
      <div>
      <Popup
      open={this.state.popup}
      image={poptoilet}
      close={this.popupClose}
      />

      <Sound
        url={sound}
        volume={this.props.sound === false?0:100}
        playStatus={this.state.playStatus}
        onFinishedPlaying={() => this.setState({ playStatus: Sound.status.STOPPED })}
      />  

      <div className="bgtoilet">
      <div className="boxchoose">
      <img className="choosebutton" src={choosebutton} onClick={this.openpop({link:'link',state:'popup'})} />
      </div>
      </div>
      {this.Redirect()}
      <Link to = "/modeescape"><Button className="out" ghost onClick={this.out}> <Iconout/>กลับ</Button></Link>
      </div>
    );
  }
}
const connectscore = state => ({
  score:state.sound
  })
  
  export default connect(connectscore)(Mtoilet);