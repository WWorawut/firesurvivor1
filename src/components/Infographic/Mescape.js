import React, {} from 'react';
import '../css/Info.css';
import { Icon } from 'antd';
import { BrowserRouter as  Link,Redirect } from 'react-router-dom';

import {stopTimer} from '../../action'
import {connect} from 'react-redux';

import Sound from 'react-sound';
import sound from '../video/sound/infoescape.mp3';

import Popup from '../Scene/popup';
import walk1 from "../picture2/popscore/coescape.png";
import sound3 from '../video/sound/sescape.mp3';

{/* Info หนีเหตุ */}


class Mescape extends React.Component{  
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

  // close=()=>{this.setState({ link:true })}
  setlink=link=>()=>{this.setState({ [link]:true })}
  Redirect=()=>{if(this.state.link){ return <Redirect to="/choose" /> }}


  openpop=data=>()=>{
    this.setState({[data.state]:true});
    if(data.sound){
      this.setState({playpop:Sound.status.PLAYING,urlSound:data.sound})  
      }
    setTimeout(this.popupClose(data),3000);
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

{/* <h1 >{formattedSeconds(this.props.time)}</h1> */}


        <div className="Mbgescape">
        <div className="bgtypeinfo animated fadeIn ">
          <div className="typeinfo escape">
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
    score:state.score,
    sound:state.sound,
    timer:state.timer,
    time:state.time
    })  
  
export default connect(connectscore)(Mescape);