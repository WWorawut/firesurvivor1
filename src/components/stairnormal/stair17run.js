import React, {} from 'react';
import '../css/scenenormal.css';
import listrun1 from "../picture2/stairnormal/listrun1.png";
import listrun2 from "../picture2/stairnormal/listrun2.png";
import listrun3 from "../picture2/stairnormal/listrun3.png";
import { Redirect } from 'react-router-dom';

import Popup from '../Scene/popup';

import run11 from "../picture2/popscore/run11.png";
import run12 from "../picture2/popscore/run12.png";
import run13 from "../picture2/popscore/run13.png";

import {savescore} from '../../action'
import {connect} from 'react-redux';
import Sound from 'react-sound';

import sound3 from '../video/sound/infowalk.mp3';
import sound4 from '../video/sound/infoheat.mp3';
import sound5 from '../video/sound/infoheat.mp3';


class stair17run extends React.Component{
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


  Redirect=()=>{if(this.state.link){ return <Redirect to="/stair16" /> }}


   render() {;

    return (
      <div>
         {this.Redirect()}

        <Popup
        open={this.state.popup}
        image={run11}
        iconclose={'none'}
        />
          <Popup
        open={this.state.popup1}
        image={run12}
        iconclose={'none'}
        />
          <Popup
        open={this.state.popup2}
        image={run13}
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
       <img className={"list animated fadeInUp"} onClick={this.openpop({link:'link',score:-3,state:'popup',sound:sound3})} src={listrun1}/>
       </div>
       <div className="centerlist2">
      <img className={"list animated fadeInUp"} onClick={this.openpop({link:'link',score:5,state:'popup1',sound:sound4})} src={listrun2}/>
       </div>
       <div className="centerlist2">
       <img className={"list animated fadeInUp"} onClick={this.openpop({link:'link',score:2,state:'popup2',sound:sound5})} src={listrun3}/>
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
  
  
  export default connect(connectscore)(stair17run);