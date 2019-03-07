import React, {} from 'react';
import '../css/360.css';
import {Entity, Scene} from 'aframe-react';


import gobutton from '../picture2/button/gobutton.png'
import choosebutton from '../picture2/button/choosebutton.png'
import { BrowserRouter as  Link,Redirect } from 'react-router-dom'
import fireoffice from '../picture2/360/fireoffice.png'
import human from "../picture2/speak/human.png";
import firetext from "../picture2/speak/firetext.png";

import Popup from '../Scene/popup';

import bu from "../picture2/popscore/bu.png";

import {savescore,stopTimer,fireroom} from '../../action'
import {connect} from 'react-redux';

import Sound from 'react-sound';
import sound from '../video/sound/speakfiredown.mp3';
import sound1 from '../video/sound/fireoffdab.mp3';

  
class fire extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      clickedSound:true,
      secondsElapsed: 0, 
      link:false,
      class:'fadeInUp',
      outshow2:false,
      popup:false,
      cursor:'white',
      playStatus:Sound.status.STOPPED,
      playpop:Sound.status.STOPPED,
      urlSound:""
    };
  }



    componentDidMount(){ 
      this.props.dispatch(stopTimer(true));
      setTimeout(this.soundOn,1200);
      setInterval(this.outshow,5000);
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

  next=name=>()=>{ this.setState({ [name]:true })}
  Redirect=()=>{
    if(this.state.firetung){ return <Redirect to="/firetung"/> }
    if(this.state.out){ return <Redirect to="/rarabhad"/> }
    if(this.state.link){this.props.dispatch(fireroom(true)); return <Redirect to="/firetung" /> }
}

  openpop=data=>()=>{
  this.setState({[data.state]:true});
  this.props.dispatch(savescore(data.score));
  if(data.sound){
    this.setState({playpop:Sound.status.PLAYING,urlSound:data.sound})  
    }
  setTimeout(this.popupClose(data),3000);
}
    
  popupClose=data=>()=>{
    this.setState({[data.state]:false})
    setTimeout(this.setlink(data.link),1000);  //เวลาในการเปลี่ยน path
  }

  setlink=link=>()=>{this.setState({ [link]:true })}

  // Redirect1=()=>{if(this.state.link){ return <Redirect to="/firetung" /> }}


  render() {;
    return (
    <div>
       {this.Redirect()}

       <Sound
        url={this.state.urlSound}
        volume={this.props.sound === false?0:100}
        playStatus={this.state.playpop}
        onFinishedPlaying={() => this.setState({ playpop: Sound.status.STOPPED })}
      />

          <Popup
          open={this.state.popup}
          image={bu}
          iconclose={'none'}
          maxWidth='xs'
          />

{!this.props.fireroom ?
      <Sound
        url={sound}
        volume={this.props.sound === false?0:100}
        playStatus={this.state.playStatus}
        onFinishedPlaying={() => this.setState({ playStatus: Sound.status.STOPPED })}
      />  
      :
      null
}
      
   
      {this.props.fireroom === false ?
       <div>
       {this.state.outshow2 === false ?
       <div className="center">
       <img className={"human360 animated " +this.state.class} src={human}/>
       <img className={"firetext animated " +this.state.class} src={firetext}/>
       </div>
       :
       <div className="none">
       <img  src={human}/>
       <img src={firetext}/>
       </div>
       }
       </div>
 :
 null
      }
       
   




      <Scene>
      {this.Redirect()}
      {this.props.fireroom === false ?
        <Entity events={{click:this.openpop({link:'link',score:7,state:'popup',sound:sound1}) , mouseenter:this.mouseenter('scale1') , mouseleave:this.mouseleave('scale1')}}  primitive='a-image' material={{ src: choosebutton}} scale={{x: this.state.scale1, y: this.state.scale1, z:this.state.scale1}} rotation={{x: 0, y: -90 ,z: 0}} position={{x:15, y: -1, z: -3}}/>
        :null}
        <Entity events={{click:this.next('out') , mouseenter:this.mouseenter('scale2') , mouseleave:this.mouseleave('scale2')}}  primitive='a-image' material={{ src: gobutton}} scale={{x: this.state.scale2, y: this.state.scale2, z:this.state.scale2}} rotation={{x: 0, y: -90 ,z: 0}} position={{x:20, y: 0, z:3}}/> 
        
       
        <Entity primitive='a-sky' rotation="0 -100 0" src={fireoffice}/>
      
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
  timer:state.timer,
  fireroom:state.fireroom,
  sound:state.sound
  })

export default connect(connectscore)(fire);
