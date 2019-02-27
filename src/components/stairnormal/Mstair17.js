import React, {} from 'react';
import '../css/scenenormal.css';
import listwalk1 from "../picture2/stairnormal/listwalk1.png";
import listwalk2 from "../picture2/stairnormal/listwalk2.png";
import listwalk3 from "../picture2/stairnormal/listwalk3.png";
import { Redirect } from 'react-router-dom';
import Preload from 'react-preload';

import Reloade from '../preload';
import Popup from '../Scene/popup';

import walk11 from "../picture2/popscore/Mwalk11.png";
import walk12 from "../picture2/popscore/Mwalk12.png";
import walk13 from "../picture2/popscore/Mwalk13.png";

import {savescore} from '../../action'
import {connect} from 'react-redux';
import Sound from 'react-sound';

import sound3 from '../video/sound/infowalk.mp3';
import sound4 from '../video/sound/infoheat.mp3';
import sound5 from '../video/sound/infoheat.mp3';


class Mstair17 extends React.Component{
  state={
    popup:false,
    link:false,
    playpop:Sound.status.STOPPED,
    urlSound:""
  }

  openpop=data=>()=>{
    this.setState({[data.state]:true});
    this.props.dispatch(savescore(data.score));
    if(data.sound){
      this.setState({playpop:Sound.status.PLAYING,urlSound:data.sound})  
      }
    setTimeout(this.popupClose(data),2000);
  }
    
  popupClose=data=>()=>{
    this.setState({[data.state]:false})
    setTimeout(this.setlink(data.link),1000);  
  }

  setlink=link=>()=>{this.setState({ [link]:true })}

  Redirect=()=>{if(this.state.link){ return <Redirect to="/Mstair16" /> }}




   render() {;
  
    
    return (
      <div>    
        {this.Redirect()}

      <Popup
      open={this.state.popup}
      image={walk11}
      iconclose={'none'}
      />
        <Popup
      open={this.state.popup1}
      image={walk12}
      iconclose={'none'}
      />
        <Popup
      open={this.state.popup2}
      image={walk13}
      iconclose={'none'}
      />

      <Sound
        url={this.state.urlSound}
        volume={this.props.sound === false?0:100}
        playStatus={this.state.playpop}
        onFinishedPlaying={() => this.setState({ playpop: Sound.status.STOPPED })}
      />
          
      <div className="bgstair17">
    
      <div className="centerlist">
       <img className={"list animated fadeInUp"} onClick={this.openpop({link:'link',state:'popup',sound:sound3})} src={listwalk1}/>
       </div>
       <div className="centerlist2">
      <img className={"list animated fadeInUp"} onClick={this.openpop({link:'link',state:'popup1',sound:sound4})} src={listwalk2}/>
       </div>
       <div className="centerlist2">
      <img className={"list animated fadeInUp"} onClick={this.openpop({link:'link',state:'popup2',sound:sound5})} src={listwalk3}/>
       </div>
      
 
      </div>
      </div>
    );
  }
}
const connectscore = state => ({
  sound:state.sound
  })
  
  export default connect(connectscore)(Mstair17);