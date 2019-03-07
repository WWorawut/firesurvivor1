import React, {} from 'react';
import '../css/Info.css';
import { Icon } from 'antd';
import { BrowserRouter as  Link,Redirect } from 'react-router-dom';

import {connect} from 'react-redux';
import {stopTimer} from '../../action'

import Sound from 'react-sound';
import sound from '../video/sound/inforarabhad.mp3';

import Popup from '../Scene/popup';
import walk1 from "../picture2/popscore/codab.png";
import sound3 from '../video/sound/stwalk.mp3';
{/* Info ระงับเหตุ */}

class Mrarabhad extends React.Component{  
  state = { 
    link:false,
    playStatus:Sound.status.STOPPED,
    popup:false,
    urlSound:""
  };

  componentDidMount(){ 
    this.props.dispatch(stopTimer(false));
    setTimeout(this.soundOn,1200);
  }
  soundOn=()=>{
    this.setState({playStatus:Sound.status.PLAYING})
  }

  setlink=link=>()=>{this.setState({ [link]:true })}
  Redirect=()=>{if(this.state.link){ return <Redirect to="/choose" /> }}

  openpop=data=>()=>{
    this.setState({[data.state]:true});
    if(data.sound){
      this.setState({playpop:Sound.status.PLAYING,urlSound:data.sound})  
      }
    setTimeout(this.popupClose(data),2000);
  }
    
  popupClose=data=>()=>{
    this.setState({[data.state]:false})
    setTimeout(this.setlink(data.link),1000);  
  }

    render() {
      return (
        <div>
      <Sound
        url={sound}
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

      <Popup
      open={this.state.popup}
      image={walk1}
      iconclose={'none'}
      maxWidth='xs'
      />


        <div className="bgrarabhad">
        <div className="bgtypeinfo animated fadeIn">
          <div className="typeinfo rarabhad">
          {this.Redirect()}
          <Icon className="closea" type="close" onClick={this.openpop({link:'link',state:'popup',sound:sound3})}/>
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
  
  export default connect(connectscore)(Mrarabhad);