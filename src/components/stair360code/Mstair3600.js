import React, {} from 'react';
import '../css/360.css';
import {Entity, Scene} from 'aframe-react';

import { Button } from 'antd';

import gobutton from '../picture2/button/gobutton.png'
import choosebutton from '../picture2/button/choosebutton.png'
import { BrowserRouter as  Link,Redirect } from 'react-router-dom'
import floor20 from '../picture2/stair360/floor20.png'
import human from "../picture2/speak/human.png";
import speak360 from "../picture2/speak/speak360.png";

import Popup from '../Scene/popup';
import bu from "../picture2/popscore/Mpopfirestair.png";


import {savescore} from '../../action'
import {connect} from 'react-redux';


import Sound from 'react-sound';
import sound from '../video/sound/speak360.mp3';

import sound3 from '../video/sound/infowalk.mp3';


  
class Mstair3600 extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      clickedSound:true,
      secondsElapsed: 0, 
      link:false,
      class:'fadeInUp',
      outshow2:false,
      playStatus:Sound.status.STOPPED,
      popup:false,
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

    setlink=link=>()=>{this.setState({ [link]:true })}
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
      setTimeout(this.setlink(data.link),1000);  //เวลาในการเปลี่ยน path
    }
    




    outshow=()=>{this.setState({class:'fadeOutDown'})
    setInterval(this.outshow2,3000) 
    }

    outshow2=()=>{this.setState({outshow2:'true'})}

  mouseenter=name=>()=>{this.setState({[name]:2})}
  mouseleave=name=>()=>{this.setState({[name]:1.5})}


  next=name=>()=>{ this.setState({ [name]:true })}
  Redirect=()=>{
    if(this.state.A){ return <Redirect to="/modeescape"/> }
    if(this.state.up){ return <Redirect to="/Mdeck"/> }
    if(this.state.down){ return <Redirect to="/Mstair3601"/> }
}





  render() {
    return (
    <div>

          <Popup
          open={this.state.popup}
          image={bu}
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


      <div>
       {this.state.outshow2 === false ?
       <div className="center">
       <img className={"human360 animated " +this.state.class} src={human}/>
       <img className={"firetext animated " +this.state.class} src={speak360}/>
       </div>
       :
       null
       }
       </div>
  
      




      <Scene>
      {this.Redirect()}
      <Entity events={{click:this.next('A') , mouseenter:this.mouseenter('scale1') , mouseleave:this.mouseleave('scale1')}}  primitive='a-image' material={{ src: gobutton}} scale={{x: this.state.scale1, y: this.state.scale1, z:this.state.scale1}} rotation={{x: 0, y: 0 ,z: 0}} position={{x:3, y: -1, z: -10}}/>
        
        <Entity events={{click:this.openpop({link:'down',state:'popup',sound:sound3}) , mouseenter:this.mouseenter('scale2') , mouseleave:this.mouseleave('scale2')}}  primitive='a-image' material={{ src: gobutton}} scale={{x: this.state.scale2, y: this.state.scale2, z:this.state.scale2}} rotation={{x: 0, y: 0 ,z: 0}} position={{x:-3, y: 0, z:12}}/> 
        <Entity events={{click:this.next('up') , mouseenter:this.mouseenter('scale3') , mouseleave:this.mouseleave('scale3')}}  primitive='a-image' material={{ src: gobutton}} scale={{x: this.state.scale3, y: this.state.scale3, z:this.state.scale3}} rotation={{x: 0, y: 90 ,z: 0}} position={{x:-12, y: 7, z:-4}}/>
        
       
        <Entity primitive='a-sky' rotation="0 70 0" src={floor20}/>
      
        <Entity primitive="a-camera">
          <Entity primitive="a-cursor"  
          animation__click={{property: 'scale', startEvents: 'click', from: '0.1 0.1 0.1', to: '0.5 0.5 0.5', dur: 150}}/>

        
        </Entity>
      </Scene>







    </div>
     
     
    );
  }
}
const connectscore = state => ({
  sound:state.sound
  })  

export default connect(connectscore)(Mstair3600);
