import React, {} from 'react';
import './css/gallery.css';
import { Icon, Button } from 'antd';
import logo from "./picture/logo.png";

import Popup from './Scene/popup';
import Sound from 'react-sound';

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
class gallery extends React.Component{
  constructor(props) {
    super(props);
    this.state = { 
    link:false,
    popup:false,
    }
  }

  openpop=data=>()=>{
    setTimeout(this.soundOn,100);
    this.setState({popup:true})
    this.props.dispatch(savescore(data.score));
  }
  popupClose=()=>{
    this.setState({popup:false, playStatus:Sound.status.STOPPED})
  }
  soundOn=()=>{
    this.setState({playStatus:Sound.status.PLAYING})
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
      if(window.innerWidth >=1920){
        width=1520;
        popwidth='lg'
        map ={
          name: "my-map",
          areas: [
              { image: pp1,sound:ss1 , shape: "circle", coords: [230, 750, 100 ], fillColor:"rgba(0, 0, 0, 0)", strokeColor:"white"},
              { image: pp2, sound:ss2 , shape: "circle", coords: [700, 750, 80 ], fillColor:"rgba(0, 0, 0, 0)"},
              { image: pp3, sound:ss3 , shape: "circle", coords: [1070, 750, 70 ], fillColor:"rgba(0, 0, 0, 0)"},
              { image: pp4, sound:ss4 , shape: "circle", coords: [1200, 600, 90 ], fillColor:"rgba(0, 0, 0, 0)"},
              { image: pp5, sound:ss5 , shape: "circle", coords: [950, 530, 80 ], fillColor:"rgba(0, 0, 0, 0)"},
              { image: pp6, sound:ss6 , shape: "circle", coords: [610, 550, 80 ], fillColor:"rgba(0, 0, 0, 0)"},
              { image: pp7, sound:ss7 , shape: "circle", coords: [350, 450, 100 ], fillColor:"rgba(0, 0, 0, 0)"},
              { image: pp8, sound:ss8 , shape: "circle", coords: [510, 270, 80 ], fillColor:"rgba(0, 0, 0, 0)"},
              { image: pp9, sound:ss9 , shape: "circle", coords: [800, 180, 90 ], fillColor:"rgba(0, 0, 0, 0)"},
            ]
        }    
      }
      if(window.innerWidth >=1366 && window.innerWidth <= 1919){
        width=1050;
        popwidth='md'
        map ={
          name: "my-map",
          areas: [
              { image: pp1, sound:ss1 , shape: "circle", coords: [160, 500, 100 ], fillColor:"rgba(0, 0, 0, 0)"},
              { image: pp2, sound:ss2 , shape: "circle", coords: [490, 500, 80 ], fillColor:"rgba(0, 0, 0, 0)"},
              { image: pp3, sound:ss3 , shape: "circle", coords: [720, 500, 70 ], fillColor:"rgba(0, 0, 0, 0)"},
              { image: pp4, sound:ss4 , shape: "circle", coords: [830, 430, 90 ], fillColor:"rgba(0, 0, 0, 0)"},
              { image: pp5, sound:ss5 , shape: "circle", coords: [650, 350, 70 ], fillColor:"rgba(0, 0, 0, 0)"},
              { image: pp6, sound:ss6 , shape: "circle", coords: [420, 390, 80 ], fillColor:"rgba(0, 0, 0, 0)"},
              { image: pp7, sound:ss7 , shape: "circle", coords: [250, 330, 100 ], fillColor:"rgba(0, 0, 0, 0)"},
              { image: pp8, sound:ss8 , shape: "circle", coords: [360, 210, 80 ], fillColor:"rgba(0, 0, 0, 0)"},
              { image: pp9, sound:ss9 , shape: "circle", coords: [550, 150, 90 ], fillColor:"rgba(0, 0, 0, 0)"},
            ]
        }    
      }
      if(window.innerWidth >=0 && window.innerWidth <= 1365){
        width=550;
        popwidth='sm'
        map ={
          name: "my-map",
          areas: [
              { image: pp1, sound:ss1 , shape: "circle", coords: [80, 280, 40 ], fillColor:"rgba(0, 0, 0, 0)"},
              { image: pp2, sound:ss2 , shape: "circle", coords: [250, 280, 40 ], fillColor:"rgba(0, 0, 0, 0)"},
              { image: pp3, sound:ss3 , shape: "circle", coords: [370, 270, 40 ], fillColor:"rgba(0, 0, 0, 0)"},
              { image: pp4, sound:ss4 , shape: "circle", coords: [450, 220, 40 ], fillColor:"rgba(0, 0, 0, 0)"},
              { image: pp5, sound:ss4 , shape: "circle", coords: [350, 180, 40 ], fillColor:"rgba(0, 0, 0, 0)"},
              { image: pp6, sound:ss5 , shape: "circle", coords: [220, 190, 40 ], fillColor:"rgba(0, 0, 0, 0)"},
              { image: pp7, sound:ss6 , shape: "circle", coords: [120, 160, 40 ], fillColor:"rgba(0, 0, 0, 0)"},
              { image: pp8, sound:ss7 , shape: "circle", coords: [190, 100, 40 ], fillColor:"rgba(0, 0, 0, 0)"},
              { image: pp9, sound:ss8 , shape: "circle", coords: [300, 70, 40 ], fillColor:"rgba(0, 0, 0, 0)"},
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
  
      );
    }
  }
  
  const connectscore = state => ({
    score:state.sound
    })
    
    export default connect(connectscore)(gallery);