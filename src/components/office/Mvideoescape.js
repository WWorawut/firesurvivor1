import React, {} from 'react';
import '../css/normal.css';
import '../css/scenenormal.css';


import { Button } from 'antd';
import Popup from '../Scene/popup';


import human from "../picture2/speak/human.png";
import sfire from "../picture2/speak/sfire.png";

import { Player, ControlBar } from 'video-react';
import intro from "../video/file/fire1.mp4";

import { Link,Redirect } from 'react-router-dom'
import {connect} from 'react-redux';

import Sound from 'react-sound';
import sound from '../video/sound/speakfire.mp3';


import Preload from '../preload';
import { Preloader, Placeholder } from 'react-preloading-screen';



class Mvideoescape extends React.Component{
  state={
    class:'fadeInUp',
    class2:'fadeInUp',
    controlPopup:false,
    popup:false,
    link:false,
    outshow2:false,
    playStatus:Sound.status.STOPPED,
    playpop:Sound.status.STOPPED,
    urlSound:""
  }

  componentDidMount(){ 
    this.refs.player.subscribeToStateChange(this.handleStateChange);
    setTimeout(this.soundOn,500);
    setTimeout(this.outshow,4000);
  }

  handleStateChange=()=> {
    this.refs.player.volume = this.props.sound;
    const { player } = this.refs.player.getState();
        const ended = player.ended;
        if (ended == true){
          this.setState({ended:true}) 
     }
  }
  
  outshow=()=>{this.setState({class:'fadeOutDown'})
  setTimeout(this.outshow2,1000)
  }
  soundOn=()=>{
    this.setState({playStatus:Sound.status.PLAYING})
  }

  outshow2=()=>{this.setState({outshow2:'true'})}
 

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

  setlink=link=>()=>{this.setState({ [link]:true })}


  openpop1=data=>()=>{
    this.setState({[data.state]:true});
    this.waittocontrol(data);
  }

  //time
  waittocontrol=(data)=>{
    if(data.sound){
    this.setState({playpop:Sound.status.PLAYING,urlSound:data.sound})  
    }
    setTimeout(this.control(data),2800)
  }



  control=data=>()=>{
    this.setState({[data.state]:false,controlPopup:true,class2:'fadeOutDown' });
  }

  // Redirect1=()=>{if(this.state.l){ return <Redirect to="/" /> }}
  Redirect=()=>{
    if(this.state.link){ return <Redirect to="/Mfiretype" /> }
  }
  

   render() {
    if(this.state.ended==true){
      return <Redirect to="/modeescape" /> 
     }
    return (

      <Preloader>
      <div>
        {this.Redirect()}
        {/* {this.Redirect1()} */}


      <Sound
        url={sound}
        volume={this.props.sound === false?0:100}
        playStatus={this.state.playStatus}
        onFinishedPlaying={() => this.setState({ playStatus: Sound.status.STOPPED })}
      />  


      {/* <img className="bgfire11" src={mousegif} />  */}

      <div className="v">

      


           <Player 
            ref="player"
            autoPlay
            playsInline={true}
            className="bgv"
            >
            <source src={intro} />
            <ControlBar autoHide={false} disableDefaultControls></ControlBar>
            </Player> 


      <div className="bgtext">
{this.state.outshow2 === false ?
      <div className="centerhuman" style={{position:'absolute'}}>
        <img className={"human animated " +this.state.class} src={human}/>
        <img className={"text animated " +this.state.class} src={sfire}/>
        </div>
        :
        null}


      </div>

      </div>
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

  export default connect(connectscore)(Mvideoescape);