import React, {} from 'react';
import '../css/button.css';
import '../css/Info.css';

import { Button } from 'antd';
import Popup from './popup';
import Iconout from '@material-ui/icons/ChevronLeft';
import choosebutton from "../picture2/button/choosebutton.png";
import poplift from "../picture2/lift/warninglift.png";
import { Link,Redirect } from 'react-router-dom';

import {savescore} from '../../action'
import {connect} from 'react-redux';

import Sound from 'react-sound';
import sound from '../video/sound/speaklift.mp3';

import Preload from '../preload';
import { Preloader, Placeholder } from 'react-preloading-screen';

class lift extends React.Component{

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

soundOn=()=>{
  this.setState({playStatus:Sound.status.PLAYING})
}
  
popupClose=()=>{
  this.setState({popup:false, playStatus:Sound.status.STOPPED})
}

setlink=link=>()=>{this.setState({ [link]:true })}
Redirect=()=>{if(this.state.link){ return <Redirect to="/stair16" /> }}
   
   render() {
    return (
      <Preloader>
      <div>
        <Popup
        open={this.state.popup}
        image={poplift}
        close={this.popupClose}
        maxWidth='xs'
        />

      <Sound
        url={sound}
        volume={this.props.sound === false?0:100}
        playStatus={this.state.playStatus}
        onFinishedPlaying={() => this.setState({ playStatus: Sound.status.STOPPED })}
      />  
        
      <div className="bglift">
      <div className="boxchoose">
      <img className="choosebutton" src={choosebutton} onClick={this.openpop({link:'link',score:-5,state:'popup'})} />
      </div>
      </div>
      {this.Redirect()}
      <Link to = "/officeoutside"><Button className="out" ghost onClick={this.out}> <Iconout/>กลับ</Button></Link>
      </div> 

      <Placeholder>
<span><Preload/></span>
</Placeholder>
</Preloader>
    );
  }
}
const connectscore = state => ({
  score:state.score,
  sound:state.sound
  })

  
  export default connect(connectscore)(lift); 