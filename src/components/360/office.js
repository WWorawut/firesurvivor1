import React, {} from 'react';
import '../css/360.css';
import {Entity, Scene} from 'aframe-react';

import choosebutton from '../picture2/button/choosebutton.png'
import { BrowserRouter as  Link,Redirect } from 'react-router-dom'
import office from '../picture2/360/office.png'
import human from "../picture2/speak/human.png";
import officetext from "../picture2/speak/officetext11.png";

import {connect} from 'react-redux';


import Sound from 'react-sound';
import sound from '../video/sound/speakstart.mp3';


  
class officenormal extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      clickedSound:true,
      secondsElapsed: 0, 
      link:false,
      class:'fadeInUp',
      outshow2:false,
      playStatus:Sound.status.STOPPED
    };
  }



    componentDidMount(){ 
      setTimeout(this.soundOn,1200);
      setInterval(this.outshow,4000);
    }

    soundOn=()=>{
      this.setState({playStatus:Sound.status.PLAYING})
    }

    outshow=()=>{this.setState({class:'fadeOutDown'})
    setInterval(this.outshow2,3000) 
    }

    outshow2=()=>{this.setState({outshow2:'true'})}

  mouseenter=name=>()=>{this.setState({[name]:2})}
  mouseleave=name=>()=>{this.setState({[name]:1.5})}

  next=name=>()=>{ this.setState({ [name]:true })}
  Redirect=()=>{
    if(this.state.A){ return <Redirect to="/fire1"/> }
    if(this.state.B){ return <Redirect to="/fire2"/> }
    if(this.state.C){ return <Redirect to="/fire3"/> }
}
np

  render() {
    return (
    <div>

      <Sound
        url={sound}
        volume={this.props.sound === false?0:100}
        playStatus={this.state.playStatus}
        onFinishedPlaying={() => this.setState({ playStatus: Sound.status.STOPPED })}
      />  
      
   
  
       <div>
       {this.state.outshow2 === false ?
       <div className="center">
       <img className={"human360 animated " +this.state.class} src={human}/>
       <img className={"firetext1 animated " +this.state.class} src={officetext}/>
       </div>
       :
       <div className="none">
       <img  src={human}/>
       <img src={officetext}/>
       </div>
       }
       </div>
 
       
   






      <Scene>
      {this.Redirect()}
      {/* //Microwave */}
      <Entity events={{click:this.next('A') , mouseenter:this.mouseenter('scale1') , mouseleave:this.mouseleave('scale1')}}  primitive='a-image' material={{ src: choosebutton}} scale={{x: this.state.scale1, y: this.state.scale1, z:this.state.scale1}} rotation={{x: 0, y: -90 ,z: 0}} position={{x:-10, y: 0, z: 7}}/>
      {/* //Buddha */}
        <Entity events={{click:this.next('B') , mouseenter:this.mouseenter('scale2') , mouseleave:this.mouseleave('scale2')}}  primitive='a-image' material={{ src: choosebutton}} scale={{x: this.state.scale2, y: this.state.scale2, z:this.state.scale2}} rotation={{x: 0, y: -90 ,z: 0}} position={{x:-15, y: 1, z:-3.5}}/> 
        {/* //Plugfire */}
        <Entity events={{click:this.next('C') , mouseenter:this.mouseenter('scale3') , mouseleave:this.mouseleave('scale3')}}  primitive='a-image' material={{ src: choosebutton}} scale={{x: this.state.scale3, y: this.state.scale3, z:this.state.scale3}} rotation={{x: 0, y: 180 ,z: 0}} position={{x:-2.5, y: -0.5, z:-10}}/>
        
       
        <Entity primitive='a-sky' rotation="0 -100 0" src={office}/>
      
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
  score:state.score,
  sound:state.sound,
  })  

export default connect(connectscore)(officenormal);
