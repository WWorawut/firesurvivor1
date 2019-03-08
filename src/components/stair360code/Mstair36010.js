import React, {} from 'react';
import '../css/360.css';
import {Entity, Scene} from 'aframe-react';

import { Button } from 'antd';

import gobutton from '../picture2/button/gobutton.png'
import choosebutton from '../picture2/button/choosebutton.png'
import { BrowserRouter as  Link,Redirect } from 'react-router-dom'
import floor from '../picture2/stair360/floor7.png'

import {savescore} from '../../action'
import {connect} from 'react-redux';


import Sound from 'react-sound';
import sound from '../video/sound/speakstair.mp3';


  
class Mstair36010 extends React.Component {
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
      setInterval(this.outshow,7000);
    }

    soundOn=()=>{
      this.setState({playStatus:Sound.status.PLAYING})
    }

    
    openpop=data=>()=>{
        this.setState({[data.state]:true});
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


  next=name=>()=>{ this.setState({ [name]:true })}
  Redirect=()=>{
    if(this.state.up){ return <Redirect to="/Mstair3609"/> }
    if(this.state.down){ return <Redirect to="/Mstair36011"/> }
}



  render() {
    return (
    <div>



      <Scene>
      {this.Redirect()}
      <Entity events={{click:this.next('down') , mouseenter:this.mouseenter('scale2') , mouseleave:this.mouseleave('scale2')}}  primitive='a-image' material={{ src: gobutton}} scale={{x: this.state.scale2, y: this.state.scale2, z:this.state.scale2}} rotation={{x: 0, y: 0 ,z: 0}} position={{x:-3, y: 0, z:12}}/> 
        <Entity events={{click:this.next('up') , mouseenter:this.mouseenter('scale3') , mouseleave:this.mouseleave('scale3')}}  primitive='a-image' material={{ src: gobutton}} scale={{x: this.state.scale3, y: this.state.scale3, z:this.state.scale3}} rotation={{x: 0, y: 90 ,z: 0}} position={{x:-12, y: 7, z:-4}}/>
       
       
        <Entity primitive='a-sky' rotation="0 70 0" src={floor}/>
      
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

export default connect(connectscore)(Mstair36010);
