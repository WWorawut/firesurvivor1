import React, {} from 'react';
import '../css/scenenormal.css';
import human from "../picture2/speak/human.png";
import endstairtalk from "../picture2/speak/endstairtalk.png";
import '../css/button.css';
import gobutton from "../picture2/button/gobutton.png";

import { Link, Redirect } from 'react-router-dom';

import Sound from 'react-sound';
import sound from '../video/sound/speakoutfinal.mp3';

import {savescore} from '../../action'
import {connect} from 'react-redux';


class Mendstair extends React.Component{
  state={
    class:'fadeInUp',
    outshow2:false,
    playStatus:Sound.status.STOPPED
  }
    componentDidMount(){ 
      setTimeout(this.soundOn,1200);
      setInterval(this.outshow,3500);
    }

    soundOn=()=>{
      this.setState({playStatus:Sound.status.PLAYING})
    }

    outshow=()=>{this.setState({class:'fadeOutDown'})
    setInterval(this.outshow2,3000)
    }

    outshow2=()=>{this.setState({outshow2:'true'})}

   render() {

 
;
   
 
    
    return (
      <div>
        <Sound
        url={sound}
        volume={this.props.sound === false?0:100}
        playStatus={this.state.playStatus}
        onFinishedPlaying={() => this.setState({ playStatus: Sound.status.STOPPED })}
         />  
 
          
      <div className="bgendstair">
      {this.state.outshow2 === false ?
      <div className="centerhuman">
      <img className={"human animated " +this.state.class} src={human}/>
      <img className={"text animated " +this.state.class} src={endstairtalk }/>
      </div>
      :
      <div style={{paddingTop:'48vh'}}>
      <Link to = "/finalend"><img className="gobutton animated fadeInUp" src={gobutton} /></Link>
      </div>
    }
    </div> 
     
    

     
      


      </div>
   

    );
  }
}
const connectscore = state => ({
  score:state.score,
  sound:state.sound
  })
  
  export default connect(connectscore)(Mendstair);