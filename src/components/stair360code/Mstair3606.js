import React, {} from 'react';
import '../css/360.css';
import {Entity, Scene} from 'aframe-react';

import { Button } from 'antd';

import gobutton from '../picture2/button/gobutton.png'
import choosebutton from '../picture2/button/choosebutton.png'
import { BrowserRouter as  Link,Redirect } from 'react-router-dom'
import floor from '../picture2/stair360/floor15.png'
import human from "../picture2/speak/human.png";
import stair15talk from "../picture2/speak/stair15talk.png";

import Popup from '../Scene/popup';

import smoke1 from "../picture2/popscore/Msmoke1.png";
import smoke2 from "../picture2/popscore/Msmoke2.png";
import smoke3 from "../picture2/popscore/Msmoke3.png";
import list151 from "../picture2/speak/list11.png";
import list152 from "../picture2/speak/list12.png";
import list153 from "../picture2/speak/list13.png";

import {savescore} from '../../action'
import {connect} from 'react-redux';


import Sound from 'react-sound';
import sound from '../video/sound/speakmanysmoke.mp3';


  
class Mstair3606 extends React.Component {
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
        this.props.dispatch(savescore(data.score));
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
    if(this.state.link){ return <Redirect to="/Mstair3607"/> }
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
      
   
  
       <div>
       {this.state.outshow2 === false ?
       <div className="center">
       <img className={"human360 animated " +this.state.class} src={human}/>
       <img className={"firetext3 animated " +this.state.class} src={stair15talk}/>
       </div>
       :
       <div>
         <div className="a" >
      <div className="centerlist">
       <img className={"list animated fadeInUp"} onClick={this.openpop({link:'link',state:'popup'})} src={list151}/>
       </div>
       <div className="centerlist2">
       <img className={"list animated fadeInUp"} onClick={this.openpop({link:'link',state:'popup1'})} src={list152}/>
       </div>
       <div className="centerlist2">
      <img className={"list animated fadeInUp"} onClick={this.openpop({link:'link',state:'popup2'})} src={list153}/>
       </div>
       </div>
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

export default connect(connectscore)(Mstair3606);