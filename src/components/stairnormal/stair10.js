import React, {} from 'react';
import '../css/scenenormal.css';
import human from "../picture2/speak/human.png";
import stair10talk from "../picture2/speak/stair10talk.png";
import hand1 from "../picture2/speak/hand1.png";
import hand2 from "../picture2/speak/hand2.png";
import hand3 from "../picture2/speak/hand3.png";
import { Redirect } from 'react-router-dom';

import Popup from '../Scene/popup';

import hand11 from "../picture2/popscore/hand11.png";
import hand12 from "../picture2/popscore/hand12.png";
import hand13 from "../picture2/popscore/hand13.png";

import {savescore} from '../../action'
import {connect} from 'react-redux';

import Sound from 'react-sound';
import sound from '../video/sound/speakheat.mp3';




class stair10 extends React.Component{
  state={
    class:'fadeInUp',
    outshow2:false,
    popup:false,
    link:false,
    playStatus:Sound.status.STOPPED
  }

    componentDidMount(){ 
      setTimeout(this.soundOn,1200);
      setInterval(this.outshow,6200);
    }

    soundOn=()=>{
      this.setState({playStatus:Sound.status.PLAYING})
    }

    outshow=()=>{this.setState({class:'fadeOutDown'})
    setInterval(this.outshow2,3000)
    }

    outshow2=()=>{this.setState({outshow2:'true'})}

    openpop=data=>()=>{
      this.setState({[data.state]:true});
      this.props.dispatch(savescore(data.score));
      setTimeout(this.popupClose(data),2000);
    }
      
    popupClose=data=>()=>{
      this.setState({[data.state]:false})
      setTimeout(this.setlink(data.link),1000);  
    }
  
    setlink=link=>()=>{this.setState({ [link]:true })}
  
  
    Redirect=()=>{if(this.state.link){ return <Redirect to="/heat" /> }}




   render() {;
    var images = [{human,stair10talk,hand1,hand2,hand3}];
 
    
    return (

      <div>
        {this.Redirect()}

        <Popup
        open={this.state.popup}
        image={hand11}
        iconclose={'none'}
        />
          <Popup
        open={this.state.popup1}
        image={hand12}
        iconclose={'none'}
        />
          <Popup
        open={this.state.popup2}
        image={hand13}
        iconclose={'none'}
        />
 
      <Sound
        url={sound}
        volume={this.props.sound === false?0:100}
        playStatus={this.state.playStatus}
        onFinishedPlaying={() => this.setState({ playStatus: Sound.status.STOPPED })}
      />  
     
 
          
      <div className="bgstair10">
      {this.state.outshow2 === false ?
      <div className="centerhuman">
      <img className={"human animated " +this.state.class} src={human}/>
      <img className={"text animated " +this.state.class} src={stair10talk}/>
      </div>
      :
      <div className="b">
      <div className="boxhelp12">
          <p className="text12 animated fadeInUp">เลือกวิธีการสัมผัสผนัง เพื่อสังเกตุความร้อน</p>
          <div className="animated fadeInUp">
          <div className="boxd">
          <img className="box12" onClick={this.openpop({link:'link',score:3,state:'popup'})} src={hand1} />
          <img className="box12" onClick={this.openpop({link:'link',score:1,state:'popup1'})} src={hand2} />
          <img className="box12" onClick={this.openpop({link:'link',score:-1,state:'popup2'})} src={hand3} />
          </div>
          </div>
      </div>
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
  
  export default connect(connectscore)(stair10);