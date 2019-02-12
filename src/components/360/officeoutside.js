import React, {} from 'react';
import '../css/360.css';
import {Entity, Scene} from 'aframe-react';


import gobutton from '../picture2/button/gobutton.png'
import choosebutton from '../picture2/button/choosebutton.png'
import { BrowserRouter as  Link,Redirect } from 'react-router-dom'
import Officeoutside from '../picture2/360/officeoutside.png'
import human from "../picture2/speak/human.png";
import officeouttext from "../picture2/speak/officeouttext.png";

import Sound from 'react-sound';
import sound from '../video/sound/speakoutoffice.mp3';

import Popup from '../Scene/popup';
import a from "../picture2/popscore/popalarm.png";
import b from "../picture2/popscore/popcall.png";
import c from "../picture2/popscore/popfriend.png";

import {savescore, enterroom, choosealarm, choosefriend, choosecall} from '../../action'
import {connect} from 'react-redux';


  
class officeoutside extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      clickedSound:true,
      secondsElapsed: 0, 
      link:false,
      class:'fadeInUp',
      outshow2:false,
      playStatus:Sound.status.STOPPED,
      cursor:'white',
      popup:false
    };
  }

    componentDidMount(){ 
      setTimeout(this.soundOn,1000);
      setInterval(this.outshow,6000);
    }

    soundOn=()=>{
      this.setState({playStatus:Sound.status.PLAYING})
    }

    outshow=()=>{this.setState({class:'fadeOutDown'})
    setInterval(this.outshow2,3000)
    }

    outshow2=()=>{this.setState({outshow2:'true'})}

  mouseenter=name=>()=>{this.setState({[name]:2,cursor:'black'})}
  mouseleave=name=>()=>{this.setState({[name]:1.5,cursor:'white'})}

  setlink=link=>()=>{this.setState({ [link]:true })}

  next=name=>()=>{ this.setState({ [name]:true })}
  Redirect=()=>{
    if(this.state.firestair){this.props.dispatch(enterroom(true)); return <Redirect to="/stair3600"/> }
    if(this.state.lift){this.props.dispatch(enterroom(true)); return <Redirect to="/lift"/> }
    if(this.state.normalstair){this.props.dispatch(enterroom(true)); return <Redirect to="/gotoshair"/> }
    if(this.state.toilet){this.props.dispatch(enterroom(true)); return <Redirect to="/restroom"/> }
    if(this.state.call){this.props.dispatch(choosecall(true)); return <Redirect to="/call"/> }
    if(this.state.alarm){this.props.dispatch(choosealarm(true)); return <Redirect to="/alarm"/> }
    if(this.state.friend){this.props.dispatch(choosefriend(true)); return <Redirect to="/friend"/> }
}

openpop=data=>()=>{
  this.setState({[data.state]:true});
  this.props.dispatch(savescore(data.score));
  setTimeout(this.popupClose(data),2000);
}
  
popupClose=data=>()=>{
  this.setState({[data.state]:false})
  setTimeout(this.setlink(data.link),1000);  //เวลาในการเปลี่ยน path
}
  // clickedSound=()=>{
  //   this.setState({
  //     clickedSound:!this.state.clickedSound
  //   })
  // }
  
  // render() {
  //   let sound;
  //   if(this.state.clickedSound===true){
  //     sound='bar'
  //   }else{
  //     sound='bar noAnim'
  //   }

  render() {
    return (
    <div>

          <Popup
          open={this.state.popup}
          image={a}
          iconclose={'none'}
          />
           <Popup
          open={this.state.popup2}
          image={b}
          iconclose={'none'}
          />
           <Popup
          open={this.state.popup3}
          image={c}
          iconclose={'none'}
          />






    {!this.props.allchoose && !this.props.choosealarm && !this.props.choosecall && !this.props.choosefriend ?
      <Sound
        url={sound}
        volume={this.props.sound === false?0:100}
        playStatus={this.state.playStatus}
        onFinishedPlaying={() => this.setState({ playStatus: Sound.status.STOPPED })}
      /> 
      :null 
    }
      {/* <a-scene>
      {this.Redirect()}
        <a-sky src="./gotoshair.png" rotation="0 -130 0"></a-sky>
        <a-text font="kelsonsans" value="" width="6" position="-2.5 0.25 -1.5" rotation="0 15 0"></a-text>
      </a-scene> */}
  
       <div>
       {!this.props.allchoose && !this.props.choosealarm && !this.props.choosecall && !this.props.choosefriend ?
       this.state.outshow2 === false ?
       <div className="center">
       <img className={"human360 animated " +this.state.class} src={human}/>
       <img className={"officeouttext animated " +this.state.class} src={officeouttext}/>
       </div>
       :null
       :null
      }
       </div>
       
      <Scene>
      {this.Redirect()}
      <Entity events={{click:this.next('firestair') , mouseenter:this.mouseenter('scale1') , mouseleave:this.mouseleave('scale1')}}  primitive='a-image' material={{ src: gobutton}} scale={{x: this.state.scale1, y: this.state.scale1, z:this.state.scale1}} rotation={{x: 0, y: -90 ,z: 0}} position={{x:15, y: 0, z: -3}}/>
        <Entity events={{click:this.next('lift') , mouseenter:this.mouseenter('scale2') , mouseleave:this.mouseleave('scale2')}}  primitive='a-image' material={{ src: gobutton}} scale={{x: this.state.scale2, y: this.state.scale2, z:this.state.scale2}} rotation={{x: 0, y: -90 ,z: 0}} position={{x:25, y: 0, z:4}}/> 
        <Entity events={{click:this.next('normalstair') , mouseenter:this.mouseenter('scale3') , mouseleave:this.mouseleave('scale3')}}  primitive='a-image' material={{ src: gobutton}} scale={{x: this.state.scale3, y: this.state.scale3, z:this.state.scale3}} rotation={{x: 0, y: 270 ,z: 0}} position={{x:10, y: 0, z:8}}/>
        <Entity className="a" events={{click:this.next('toilet') , mouseenter:this.mouseenter('scale4') , mouseleave:this.mouseleave('scale4')}}  primitive='a-image' material={{ src: gobutton}} scale={{x: this.state.scale4, y: this.state.scale4, z:this.state.scale4}} rotation={{x: 0, y: 270 ,z: 0}} position={{x:-15, y: 0, z:-4}}/>
       
        {!this.props.choosealarm?
        <Entity events={{click:this.openpop({link:'alarm',score:3,state:'popup'}), mouseenter:this.mouseenter('scale5') , mouseleave:this.mouseleave('scale5')}}  primitive='a-image' material={{ src: choosebutton}} scale={{x: this.state.scale5, y: this.state.scale5, z:this.state.scale5}} rotation={{x: 0, y: 150 ,z: 0}} position={{x:4, y: -2, z:8}}/>
        :null}
        {!this.props.choosecall?
        <Entity events={{click:this.openpop({link:'call',score:3,state:'popup2'}) , mouseenter:this.mouseenter('scale6') , mouseleave:this.mouseleave('scale6')}}  primitive='a-image' material={{ src: choosebutton}} scale={{x: this.state.scale6, y: this.state.scale6, z:this.state.scale6}} rotation={{x: 0, y: 150 ,z: 0}} position={{x:3, y: 0, z:8}}/>
        :null}
        {!this.props.choosefriend?
        <Entity events={{click:this.openpop({link:'friend',score:3,state:'popup3'}), mouseenter:this.mouseenter('scale7') , mouseleave:this.mouseleave('scale7')}}  primitive='a-image' material={{ src: choosebutton}} scale={{x: this.state.scale7, y: this.state.scale7, z:this.state.scale7}} rotation={{x: 0, y: 150 ,z: 0}} position={{x:-8, y: -2, z:8}}/>
        :null}
        <Entity primitive='a-sky' rotation="0 -100 0" src={Officeoutside}/>
      
        <Entity primitive="a-camera">
          <Entity primitive="a-cursor"  material={"color:"+this.state.cursor} 
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
  allchoose:state.allchoose,
  choosecall:state.choosecall,
  choosefriend:state.choosefriend,
  choosealarm:state.choosealarm
  })

export default connect(connectscore)(officeoutside);
