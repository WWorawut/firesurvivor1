import React, {} from 'react';
import '../css/360.css';
import {Entity, Scene} from 'aframe-react';

import { Button } from 'antd';

import gobutton from '../picture2/button/gobutton.png'
import choosebutton from '../picture2/button/choosebutton.png'
import { BrowserRouter as  Link,Redirect } from 'react-router-dom'
import floor from '../picture2/stair360/floor18.png'

import Popup from '../Scene/popup';

import listwalk1 from "../picture2/stairnormal/listwalk1.png";
import listwalk2 from "../picture2/stairnormal/listwalk2.png";
import listwalk3 from "../picture2/stairnormal/listwalk3.png";
import walk11 from "../picture2/popscore/Mwalk11.png";
import walk12 from "../picture2/popscore/Mwalk12.png";
import walk13 from "../picture2/popscore/Mwalk13.png";

import {savescore} from '../../action'
import {connect} from 'react-redux';


import Sound from 'react-sound';
import sound from '../video/sound/speakstair.mp3';


import sound3 from '../video/sound/walklorr.mp3';
import sound4 from '../video/sound/walkwall.mp3';
import sound5 from '../video/sound/walkst.mp3';


  
class Mstair3602 extends React.Component {
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
      this.props.dispatch(savescore(data.score));
      if(data.sound){
        this.setState({playpop:Sound.status.PLAYING,urlSound:data.sound})  
        }
      setTimeout(this.popupClose(data),3800);
    }
        
      popupClose=data=>()=>{
        this.setState({[data.state]:false})
        setTimeout(this.setlink(data.link),1000);  
      }

      setlink=link=>()=>{this.setState({ [link]:true })}




    outshow=()=>{this.setState({class:'fadeOutDown'})
    setInterval(this.outshow2,3000) 
    }

    outshow2=()=>{this.setState({outshow2:'true'})}

  mouseenter=name=>()=>{this.setState({[name]:2})}
  mouseleave=name=>()=>{this.setState({[name]:1.5})}


  next=name=>()=>{ this.setState({ [name]:true })}
  Redirect=()=>{
    if(this.state.link){ return <Redirect to="/Mstair3604"/> }
}



  render() {
    return (
    <div>
{/* 
      <Sound
        url={sound}
        volume={this.props.sound === false?0:100}
        playStatus={this.state.playStatus}
        onFinishedPlaying={() => this.setState({ playStatus: Sound.status.STOPPED })}
      />   */}

  
      <Popup
      open={this.state.popup}
      image={walk11}
      iconclose={'none'}
      maxWidth='xs'
      />
        <Popup
      open={this.state.popup1}
      image={walk12}
      iconclose={'none'}
      maxWidth='xs'
      />
        <Popup
      open={this.state.popup2}
      image={walk13}
      iconclose={'none'}
      maxWidth='xs'
      />

      <Sound
        url={this.state.urlSound}
        volume={this.props.sound === false?0:100}
        playStatus={this.state.playpop}
        onFinishedPlaying={() => this.setState({ playpop: Sound.status.STOPPED })}
      />
   
  
       <div className="a">
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
 
       
   






      <Scene>
      {this.Redirect()}
      <Entity events={{click:this.next('A') , mouseenter:this.mouseenter('scale1') , mouseleave:this.mouseleave('scale1')}}  primitive='a-image' material={{ src: choosebutton}} scale={{x: this.state.scale1, y: this.state.scale1, z:this.state.scale1}} rotation={{x: 0, y: -90 ,z: 0}} position={{x:15, y: 0, z: -3}}/>
        <Entity events={{click:this.next('B') , mouseenter:this.mouseenter('scale2') , mouseleave:this.mouseleave('scale2')}}  primitive='a-image' material={{ src: choosebutton}} scale={{x: this.state.scale2, y: this.state.scale2, z:this.state.scale2}} rotation={{x: 0, y: -90 ,z: 0}} position={{x:25, y: 0, z:4}}/> 
        <Entity events={{click:this.next('C') , mouseenter:this.mouseenter('scale3') , mouseleave:this.mouseleave('scale3')}}  primitive='a-image' material={{ src: choosebutton}} scale={{x: this.state.scale3, y: this.state.scale3, z:this.state.scale3}} rotation={{x: 0, y: 270 ,z: 0}} position={{x:10, y: 0, z:8}}/>
        
       
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

export default connect(connectscore)(Mstair3602);
