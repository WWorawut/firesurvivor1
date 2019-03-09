import React, {} from 'react';
import './css/gallery.css';
import { Button } from 'antd';

import Popup from './Scene/popup';
import Sound from 'react-sound';
import bgsound from './video/sound/szone.mp3';

import ss1 from "./video/sound/infofirehappen.mp3";
import ss2 from "./video/sound/infofiretung.mp3";
import ss3 from "./video/sound/infousetung.mp3";
import ss4 from "./video/sound/inforarabhad.mp3";
import ss5 from "./video/sound/infojanghad.mp3";
import ss6 from "./video/sound/infowalk.mp3";
import ss7 from "./video/sound/infosmoke.mp3";
import ss8 from "./video/sound/infoheat.mp3";
import ss9 from "./video/sound/infoescape.mp3";

import {savescore} from './../action'
import {connect} from 'react-redux';

import pp1 from "./picture/Infographic/firetype.png";
import pp2 from "./picture/Infographic/firetung.png";
import pp3 from "./picture/Infographic/usetung.png";
import pp4 from "./picture/Infographic/rarabhad.png";
import pp5 from "./picture/Infographic/janghad.png";
import pp6 from "./picture/Infographic/walk.png";
import pp7 from "./picture/Infographic/smoke.png";
import pp8 from "./picture/Infographic/heat.png";
import pp9 from "./picture/Infographic/escape.png";

import look from "./picture2/look.png";

import './css/button.css';
import Iconout from '@material-ui/icons/ChevronLeft';
import { Link,Redirect } from 'react-router-dom';
import ImageMapper from 'react-image-mapper';
import ff from './picture2/bg3.png';

import Preload from './preload';
import { Preloader, Placeholder } from 'react-preloading-screen';

class gallery extends React.Component{
  constructor(props) {
    super(props);
    this.state = { 
    link:false,
    popup:false,
    playStatus: Sound.status.STOPPED,
    play: Sound.status.STOPPED,
    urlSound: ""
    }
  }

  componentDidMount() {
    this.setState({play: Sound.status.PLAYING})
    setTimeout(this.soundOn, 1000);
  }
  soundOn = () => {
    this.setState({ playStatus: Sound.status.PLAYING })
  }

  openpop=data=>()=>{
    setTimeout(this.soundOn,100);
    this.setState({popup:true})
    this.props.dispatch(savescore(data.score));
  }
  popupClose=()=>{
    this.setState({popup:false, playStatus:Sound.status.STOPPED})
  }



  preexam=()=>{this.setState({ link:true })}
  full=()=>{this.setState({ link2:true })}
  Redirect=()=>{
    if(this.state.link){ return <Redirect to="/preexam"/> }
    if(this.state.link2){ return <Redirect to="/office"/> }
  }
  clicked(area){
    this.setState({ popup: true,image:area.image,sound:area.sound,playStatus:Sound.status.PLAYING});
  }


  enterArea(area) {
    this.setState({ hoveredAreatop: area.center[1]+'px',hoveredArealeft:area.center[0]+'px' });
      }

      leaveArea(area) {
          this.setState({ hoveredAreatop: false,hoveredArealeft: false });
      }


    render() {
   
      let map;
      let width;
      let popwidth;
      if(window.innerWidth >=1901){
        width=1520;
        popwidth='lg'
        map ={
          name: "my-map",
          areas: [
              { image: pp1,sound:ss1 , shape: "circle", coords: [230, 750, 100 ], fillColor:"rgba(0, 0, 0, 0)" },
              { image: pp2, sound:ss2 , shape: "circle", coords: [700, 750, 80 ], fillColor:"rgba(0, 0, 0, 0)" },
              { image: pp3, sound:ss3 , shape: "circle", coords: [1050, 750, 70 ], fillColor:"rgba(0, 0, 0, 0)" },
              { image: pp4, sound:ss4 , shape: "circle", coords: [1200, 600, 90 ], fillColor:"rgba(0, 0, 0, 0)"},
              { image: pp5, sound:ss5 , shape: "circle", coords: [950, 500, 80 ], fillColor:"rgba(0, 0, 0, 0)" },
              { image: pp6, sound:ss6 , shape: "circle", coords: [610, 550, 80 ], fillColor:"rgba(0, 0, 0, 0)" },
              { image: pp7, sound:ss7 , shape: "circle", coords: [360, 450, 100 ], fillColor:"rgba(0, 0, 0, 0)" },
              { image: pp8, sound:ss8 , shape: "circle", coords: [510, 270, 80 ], fillColor:"rgba(0, 0, 0, 0)" },
              { image: pp9, sound:ss9 , shape: "circle", coords: [800, 200, 90 ], fillColor:"rgba(0, 0, 0, 0)" },
            ]
        }    
      }
      if(window.innerWidth >=1367 && window.innerWidth <= 1900){  //notebook B
        width=1200;
        popwidth='md'
        map ={
          name: "my-map",
          areas: [
              { image: pp1, sound:ss1 , shape: "circle", coords: [170, 560, 80 ], fillColor:"rgba(0, 0, 0, 0)" },
              { image: pp2, sound:ss2 , shape: "circle", coords: [550, 560, 60 ], fillColor:"rgba(0, 0, 0, 0)" },
              { image: pp3, sound:ss3 , shape: "circle", coords: [820, 580, 60 ], fillColor:"rgba(0, 0, 0, 0)" },
              { image: pp4, sound:ss4 , shape: "circle", coords: [940, 480, 70 ], fillColor:"rgba(0, 0, 0, 0)" },
              { image: pp5, sound:ss5 , shape: "circle", coords: [750, 370, 70 ], fillColor:"rgba(0, 0, 0, 0)" },
              { image: pp6, sound:ss6 , shape: "circle", coords: [490, 420, 70 ], fillColor:"rgba(0, 0, 0, 0)" },
              { image: pp7, sound:ss7 , shape: "circle", coords: [280, 370, 80 ], fillColor:"rgba(0, 0, 0, 0)" },
              { image: pp8, sound:ss8 , shape: "circle", coords: [400, 210, 80 ], fillColor:"rgba(0, 0, 0, 0)" },
              { image: pp9, sound:ss9 , shape: "circle", coords: [630, 160, 80 ], fillColor:"rgba(0, 0, 0, 0)" },
            ]
        }    
      }
      if(window.innerWidth >=813 && window.innerWidth <= 1366){  //macbook B
        width=1100;
        popwidth='md'
        map ={
          name: "my-map",
          areas: [
              { image: pp1, sound:ss1 , shape: "circle", coords: [160, 510, 70 ], fillColor:"rgba(0, 0, 0, 0)" },
              { image: pp2, sound:ss2 , shape: "circle", coords: [490, 520, 60 ], fillColor:"rgba(0, 0, 0, 0)" },
              { image: pp3, sound:ss3 , shape: "circle", coords: [760, 530, 60 ], fillColor:"rgba(0, 0, 0, 0)" },
              { image: pp4, sound:ss4 , shape: "circle", coords: [850, 430, 60 ], fillColor:"rgba(0, 0, 0, 0)" },
              { image: pp5, sound:ss5 , shape: "circle", coords: [680, 350, 70 ], fillColor:"rgba(0, 0, 0, 0)" },
              { image: pp6, sound:ss6 , shape: "circle", coords: [430, 390, 70 ], fillColor:"rgba(0, 0, 0, 0)" },
              { image: pp7, sound:ss7 , shape: "circle", coords: [250, 330, 70 ], fillColor:"rgba(0, 0, 0, 0)" },
              { image: pp8, sound:ss8 , shape: "circle", coords: [370, 210, 70 ], fillColor:"rgba(0, 0, 0, 0)" },
              { image: pp9, sound:ss9 , shape: "circle", coords: [580, 150, 70 ], fillColor:"rgba(0, 0, 0, 0)" },
            ]
        }    
      }

      // fillColor:"rgba(0, 0, 0, 0)" preFillColor: "red"


      if(window.innerWidth >=0 && window.innerWidth <= 812){
        width=550;
        popwidth='sm'
        map ={
          name: "my-map",
          areas: [
              { image: pp1, sound:ss1 , shape: "circle", coords: [80, 280, 40 ], fillColor:"rgba(0, 0, 0, 0)" },
              { image: pp2, sound:ss2 , shape: "circle", coords: [250, 280, 40 ], fillColor:"rgba(0, 0, 0, 0)" },
              { image: pp3, sound:ss3 , shape: "circle", coords: [370, 270, 40 ], fillColor:"rgba(0, 0, 0, 0)"},
              { image: pp4, sound:ss4 , shape: "circle", coords: [450, 220, 40 ],fillColor:"rgba(0, 0, 0, 0)" },
              { image: pp5, sound:ss5 , shape: "circle", coords: [350, 180, 40 ], fillColor:"rgba(0, 0, 0, 0)" },
              { image: pp6, sound:ss6 , shape: "circle", coords: [220, 190, 40 ], fillColor:"rgba(0, 0, 0, 0)" },
              { image: pp7, sound:ss7 , shape: "circle", coords: [120, 160, 40 ], fillColor:"rgba(0, 0, 0, 0)" },
              { image: pp8, sound:ss8 , shape: "circle", coords: [190, 100, 40 ],fillColor:"rgba(0, 0, 0, 0)" },
              { image: pp9, sound:ss9 , shape: "circle", coords: [300, 70, 40 ], fillColor:"rgba(0, 0, 0, 0)" },
            ]
        }    
      }
      const hoveredArea={
        position:'absolute',
        top:this.state.hoveredAreatop,
        left:this.state.hoveredArealeft,

        background: 'rgba(0,0,0,0.8)',
        transform: 'translate3d(-50%, -50%, 0)',
        borderRadius: '80px',
        pointerEvents: 'none',
        width:'50px',
        padding:'10px',
        zIndex: 1,
      }

   
      return (
        <Preloader>
        <div >

      <Popup
      open={this.state.popup}
      image={this.state.image}
      close={this.popupClose}
      maxWidth={popwidth}
      />

      <Sound
        url={this.state.sound}
        volume={this.props.sound === false?0:100}
        playStatus={this.state.playStatus}
        onFinishedPlaying={() => this.setState({ playStatus: Sound.status.STOPPED })}
      />  

        <Sound
          url={bgsound}
          volume={this.props.sound === false ? 0 : 100}
          playStatus={this.state.play}
          onFinishedPlaying={() => this.setState({ play: Sound.status.STOPPED })}
        />


          <div className="bggallery">
          <Link to = "/choose"><Button className="out" ghost style={{left:'30px'}}> <Iconout/>กลับ</Button></Link>         
            <div style={{position:'absolute',right:'60px'}}>
            <div style={{position:'relative'}}>
            <ImageMapper  
            width={width} src={ff} map={map}
            onClick={area => this.clicked(area)}
            onMouseEnter={area => this.enterArea(area)}
            onMouseLeave={area => this.leaveArea(area)}
            />
            {this.state.hoveredAreatop?
         
                <img style={hoveredArea} src={look}/>
            
            :null
            }
            </div>
            </div>

            </div>

          </div>

          <Placeholder>
<span><Preload/></span>
</Placeholder>
</Preloader>
  
      );
    }
  }
  
  const connectscore = state => ({
    score:state.sound
    })
    
    export default connect(connectscore)(gallery);