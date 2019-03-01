import React, {} from 'react';
import '../css/scenenormal.css';
import human from "../picture2/speak/human.png";
import stair15talk from "../picture2/speak/stair15talk.png";
import list151 from "../picture2/speak/list11.png";
import list152 from "../picture2/speak/list12.png";
import list153 from "../picture2/speak/list13.png";
import { Redirect } from 'react-router-dom';

import Popup from '../Scene/popup';

import smoke1 from "../picture2/popscore/Msmoke1.png";
import smoke2 from "../picture2/popscore/Msmoke2.png";
import smoke3 from "../picture2/popscore/Msmoke3.png";

import {savescore} from '../../action'
import {connect} from 'react-redux';

import Sound from 'react-sound';
import sound from '../video/sound/speakmanysmoke.mp3';

import sound3 from '../video/sound/stkran.mp3';
import sound4 from '../video/sound/ststan.mp3';
import sound5 from '../video/sound/stwalkgood.mp3';



class Mstair15 extends React.Component{
  state={
    class:'fadeInUp',
    outshow2:false,
    popup:false,
    link:false,
    playStatus:Sound.status.STOPPED,
    playpop:Sound.status.STOPPED,
    urlSound:""
  }
    componentDidMount(){ 
      setTimeout(this.soundOn,1200);
      setInterval(this.outshow,6000);
    }

    soundOn=()=>{
      this.setState({playStatus:Sound.status.PLAYING})
    }

    outshow=()=>{this.setState({class:'fadeOutDown'})
    setInterval(this.outshow2,3000)
    }

    outshow2=()=>{this.setState({outshow2:'true'})}



    openpop=data=>()=>{
      this.setState({[data.state]:true});
      this.props.dispatch(savescore(data.score));
      if(data.sound){
        this.setState({playpop:Sound.status.PLAYING,urlSound:data.sound})  
        }
      setTimeout(this.popupClose(data),3300);
    }
      
    popupClose=data=>()=>{
      this.setState({[data.state]:false})
      setTimeout(this.setlink(data.link),1000);  
    }
  
    setlink=link=>()=>{this.setState({ [link]:true })}
  
  
    Redirect=()=>{if(this.state.link){ return <Redirect to="/Mstair14" /> }}

   render() {

 
;
    var images = [{human,stair15talk,list151,list152,list153}];
 
    
    return (
      <div>
         {this.Redirect()}

          <Popup
          open={this.state.popup}
          image={smoke1}
          iconclose={'none'}
          />
            <Popup
          open={this.state.popup1}
          image={smoke2}
          iconclose={'none'}
          />
            <Popup
          open={this.state.popup2}
          image={smoke3}
          iconclose={'none'}
          />

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
          
      <div className="bgstair15">
      {this.state.outshow2 === false ?
      <div className="centerhuman">
      <img className={"human animated " +this.state.class} src={human}/>
      <img className={"text animated " +this.state.class} src={stair15talk}/>
      </div>
      :
      <div>
      <div className="centerlist">
       <img className={"list animated fadeInUp"} onClick={this.openpop({link:'link',state:'popup',sound:sound3})} src={list151}/>
       </div>
       <div className="centerlist2">
       <img className={"list animated fadeInUp"} onClick={this.openpop({link:'link',state:'popup1',sound:sound4})} src={list152}/>
       </div>
       <div className="centerlist2">
      <img className={"list animated fadeInUp"} onClick={this.openpop({link:'link',state:'popup2',sound:sound5})} src={list153}/>
       </div>
       </div>
      }
    

     
      


      </div>
      </div>
  

    );
  }
}
const connectscore = state => ({
  sound:state.sound
  })  

  export default connect(connectscore)(Mstair15);