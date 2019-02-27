import React, {} from 'react';
import '../css/360.css';
import {Entity, Scene} from 'aframe-react';

import { Button } from 'antd';
import Iconout from '@material-ui/icons/ChevronLeft';
import gobutton from '../picture2/button/gobutton.png'
import choosebutton from '../picture2/button/choosebutton.png'
import { BrowserRouter as  Link,Redirect } from 'react-router-dom'
import gotoshair from '../picture2/360/gotoshair.png'

import Popup from '../Scene/popup';
import bu from "../picture2/popscore/Mgoshair.png";

import {savescore} from '../../action'
import {connect} from 'react-redux';

import Sound from 'react-sound';
import sound3 from '../video/sound/infowalk.mp3';


  
class Mgotoshair extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      clickedSound:true,
      secondsElapsed: 0, 
      link:false,
      popup:false,
      playpop:Sound.status.STOPPED,
      urlSound:""
    };
  }

    componentDidMount(){ 
      setInterval(this.outshow,5000)
    }

  mouseenter=name=>()=>{this.setState({[name]:2})}
  mouseleave=name=>()=>{this.setState({[name]:1.5})}

  next=name=>()=>{ this.setState({ [name]:true })}
  Redirect=()=>{
  if(this.state.link){ return <Redirect to="/Mstair19"/> }
  if(this.state.back){ return <Redirect to="/modeescape"/> }
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




  render() {
    return (
    <div>
   

        <Popup
          open={this.state.popup}
          image={bu}
          iconclose={'none'}
          />

      <Sound
        url={this.state.urlSound}
        volume={this.props.sound === false?0:100}
        playStatus={this.state.playpop}
        onFinishedPlaying={() => this.setState({ playpop: Sound.status.STOPPED })}
      />
      
      <div>
      <Link to = "/officeoutside"><Button className="out" ghost onClick={this.out}> <Iconout/>กลับ</Button></Link>
      </div>

      <Scene>
      {this.Redirect()}
      <Entity events={{click:this.openpop({link:'link',score:15,state:'popup',sound:sound3}) , mouseenter:this.mouseenter('scale1') , mouseleave:this.mouseleave('scale1')}}  
              primitive='a-image' material={{ src: gobutton}} scale={{x: this.state.scale1, y: this.state.scale1, z:this.state.scale1}} 
              rotation={{x: 0, y: 0 ,z: 0}} position={{x:3, y: 0, z: -12}}/>


      <Entity events={{click:this.next('back') , mouseenter:this.mouseenter('scale2') , mouseleave:this.mouseleave('scale2')}}  
              primitive='a-image' material={{ src: gobutton}} scale={{x: this.state.scale2, y: this.state.scale2, z:this.state.scale2}} 
              rotation={{x: 0, y: 180 ,z: 0}} position={{x:-1.5, y: 0, z: 12}}/>

       <Entity primitive='a-sky' rotation="0 -100 0" src={gotoshair}/>
      
        <Entity primitive="a-camera">
          <Entity primitive="a-cursor"  
         animation__click={{property: 'scale', startEvents: 'click', from: '0.08 0.08 0.08', to: '0.3 0.3 0.3', dur: 150}}/>

        
        </Entity>
      </Scene>







    </div>
     
     
    );
  }
}
const connectscore = state => ({
  timer:state.timer,
  sound:state.sound
  })

export default connect(connectscore)(Mgotoshair);
