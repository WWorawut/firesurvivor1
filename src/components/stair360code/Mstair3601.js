import React, {} from 'react';
import '../css/360.css';
import {Entity, Scene} from 'aframe-react';

import { Button } from 'antd';

import gobutton from '../picture2/button/gobutton.png'
import choosebutton from '../picture2/button/choosebutton.png'
import { BrowserRouter as  Link,Redirect } from 'react-router-dom'
import floor from '../picture2/stair360/floor18.png'
import human from "../picture2/speak/human.png";
import stair1 from "../picture2/speak/stair1.png";
import walk from "../picture2/speak/walkk.png";
import run from "../picture2/speak/run.png";
import walk1 from "../picture2/popscore/Mwalk1.png";
import run1 from "../picture2/popscore/Mrun1.png";
import Popup from '../Scene/popup';

import {savescore} from '../../action'
import {connect} from 'react-redux';


import Sound from 'react-sound';
import sound from '../video/sound/speakstair.mp3';

import sound3 from '../video/sound/stwalk.mp3';
import sound4 from '../video/sound/stwalkorrun.mp3';


  
class Mstair3601 extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      clickedSound:true,
      secondsElapsed: 0, 
      link:false,
      class:'fadeInUp',
      outshow2:false,
      playStatus:Sound.status.STOPPED,
      playpop:Sound.status.STOPPED,
      urlSound:""
    };
  }



    componentDidMount(){ 
      setTimeout(this.soundOn,1200);
      setInterval(this.outshow,7000);
    }

    soundOn=()=>{
      this.setState({playStatus:Sound.status.PLAYING})
    }

    
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




    outshow=()=>{this.setState({class:'fadeOutDown'})
    setInterval(this.outshow2,3000) 
    }

    outshow2=()=>{this.setState({outshow2:'true'})}

  mouseenter=name=>()=>{this.setState({[name]:2})}
  mouseleave=name=>()=>{this.setState({[name]:1.5})}

  setlink=link=>()=>{this.setState({ [link]:true })}



  next=name=>()=>{ this.setState({ [name]:true })}
  Redirect=()=>{
    if(this.state.link1){ return <Redirect to="/Mstair3602"/> }
    if(this.state.link2){ return <Redirect to="/Mstair3603"/> }
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

      <Popup
      open={this.state.popup2}
      image={run1}
      iconclose={'none'}
      maxWidth='xs'
      />
      
   
  
       <div>
       {this.state.outshow2 === false ?
       <div className="center">
       <img className={"human360 animated " +this.state.class} src={human}/>
       <img className={"firetext2 animated " +this.state.class} src={stair1}/>
       </div>
       :
       <div className="centerwalk">
       <img className={"walkk animated fadeInUp"} style={{marginRight:'15%'}} onClick={this.openpop({link:'link1',state:'popup',sound:sound3})} src={walk}/>
       <img className={"run animated fadeInUp"} onClick={this.openpop({link:'link2',state:'popup2',sound:sound4})} src={run}/>
       </div>
       }
       </div>
 
       
   






      <Scene>
      {this.Redirect()}

        
       
        <Entity primitive='a-sky' rotation="0 -100 0" src={floor}/>
      
        <Entity primitive="a-camera">
          <Entity primitive="a-cursor"  
          animation__click={{property: 'scale', startEvents: 'click', from: '0.1 0.1 0.1', to: '1 1 1', dur: 150}}/>

        
        </Entity>
      </Scene>







    </div>
     
     
    );
  }
}
const connectscore = state => ({
  sound:state.sound
  })  

export default connect(connectscore)(Mstair3601);
