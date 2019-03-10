import React, {} from 'react';
// import DeviceOrientation from 'react-screen-orientation'

import Sound from 'react-sound';
import './App.css';
import './css/setting.css';
import { Icon,Modal } from 'antd';
import {connect} from 'react-redux';

import Loginscreen from './Loginscreen';
import choose from './choose';
import exam from './exam/Exam';
import exam2 from './exam/exam2';
import preexam from './exam/preexam';
import preexam2 from './exam/preexam2';
import howtoplay from './Howplay';
import share from './share';

import gallery from './gallery';

import typeA from './PeopleSummary/Asum';

import allsum from './Infographic/allsum';
import janghad from './Infographic/janghad'; 
import Mjanghad from './Infographic/Mjanghad'; 
import firetype from './Infographic/firetype'; 
import Mfiretype from './Infographic/Mfiretype'; 
import rarabhad from './Infographic/rarabhad';
import Mrarabhad from './Infographic/Mrarabhad';
import firetung from './Infographic/firetung'; 
import Mfiretung from './Infographic/Mfiretung';   
import walk from './Infographic/walk'; 
import walk360 from './Infographic/walk360'; 
import smoke from './Infographic/smoke'; 
import smoke360 from './Infographic/smoke360'; 
import Mwalk from './Infographic/Mwalk'; 
import Mwalk360 from './Infographic/Mwalk360'; 
import Msmoke from './Infographic/Msmoke'; 
import Msmoke360 from './Infographic/Msmoke360'; 
import Mheat from './Infographic/Mheat'; 
import Mheat360 from './Infographic/Mheat360'; 
import heat from './Infographic/heat'; 
import heat360 from './Infographic/heat360'; 
import escape from './Infographic/escape'; 
import Mescape from './Infographic/Mescape'; 
import usetung from './Infographic/usetung'; 
import Musetung from './Infographic/Musetung'; 

import restroom from './Scene/toilet';
import deck from './Scene/deck';
import lift from './Scene/lift';

import call from './Scene/call';
import alarm from './Scene/alarm';
import friend from './Scene/tellfriend';
import Mcall from './Scene/Mcall';
import Malarm from './Scene/Malarm';
import Mfriend from './Scene/Mtellfriend';

import stair19 from './stairnormal/stair19';
import stair17 from './stairnormal/stair17';
import stair177 from './stairnormal/stair17run';
import stair16 from './stairnormal/stair16';
import stair15 from './stairnormal/stair15';
import stair14 from './stairnormal/stair14';
import stair12A from './stairnormal/stair12A';
import stair11 from './stairnormal/stair11';
import stair10 from './stairnormal/stair10';
import endstair from './stairnormal/endstair';


import officeoutside from './360/officeoutside';
import gotoshair from './360/gotoshair';
import fireoffice from './360/fireoffice';
import Mfireoffice from './360/Mfireoffice';

import office from './360/office';
import Moffice from './360/Moffice';
import fire1 from './office/fire1';
import fire2 from './office/fire2';
import fire3 from './office/fire3';
import Mfire1 from './office/Mfire1';
import Mfire2 from './office/Mfire2';
import Mfire3 from './office/Mfire3';
import finalend from './office/finalend';

import finalnormal from './office/finalnormal';
import Mfinalnormal from './office/Mfinalnormal';

import Mvideoescape from './office/Mvideoescape';
import Mvideojang from './office/Mvideojang';

import stair3600 from './stair360code/stair3600';
import stair3601 from './stair360code/stair3601';
import stair3602 from './stair360code/stair3602';
import stair3603 from './stair360code/stair3603';
import stair3604 from './stair360code/stair3604';
import stair3605 from './stair360code/stair3605';
import stair3606 from './stair360code/stair3606';
import stair3607 from './stair360code/stair3607';
import stair3608 from './stair360code/stair3608';
import stair3609 from './stair360code/stair3609';
import stair36010 from './stair360code/stair36010';
import stair36011 from './stair360code/stair36011';
import stair36012 from './stair360code/stair36012';
import stair36013 from './stair360code/stair36013';

import modeescape from './360/modeescape';
import Mrestroom from './Scene/Mtoilet';
import Mdeck from './Scene/Mdeck';
import Mlift from './Scene/Mlift';
import Mgotoshair from './360/Mgotoshair';
import Mstair19 from './stairnormal/Mstair19';
import Mstair17 from './stairnormal/Mstair17';
import Mstair177 from './stairnormal/Mstair17run';
import Mstair16 from './stairnormal/Mstair16';
import Mstair15 from './stairnormal/Mstair15';
import Mstair14 from './stairnormal/Mstair14';
import Mstair12A from './stairnormal/Mstair12A';
import Mstair11 from './stairnormal/Mstair11';
import Mstair10 from './stairnormal/Mstair10';
import Mendstair from './stairnormal/Mendstair';
import Mstair3600 from './stair360code/Mstair3600';
import Mstair3601 from './stair360code/Mstair3601';
import Mstair3602 from './stair360code/Mstair3602';
import Mstair3603 from './stair360code/Mstair3603';
import Mstair3604 from './stair360code/Mstair3604';
import Mstair3605 from './stair360code/Mstair3605';
import Mstair3606 from './stair360code/Mstair3606';
import Mstair3607 from './stair360code/Mstair3607';
import Mstair3608 from './stair360code/Mstair3608';
import Mstair3609 from './stair360code/Mstair3609';
import Mstair36010 from './stair360code/Mstair36010';
import Mstair36011 from './stair360code/Mstair36011';
import Mstair36012 from './stair360code/Mstair36012';
import Mstair36013 from './stair360code/Mstair36013';
import Mfinalend from './office/Mfinalend';

import modejanghad from './360/modejanghad';


import intro from './video/IntroMP4';

import { BrowserRouter as  Router, Route,Link,Redirect} from 'react-router-dom';

import mousegif from "./picture/ro.gif";


import bgsound from './video/sound/finalbg.mp3';

// import bgsound from './video/file/s2.mp3';

import {time,closeSound, stopTimer,savescore} from './../action'




const formattedSeconds = (sec) =>
  Math.floor(sec / 60) +
    ':' +
  ('0' + sec % 60).slice(-2);
  



class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = { 
      clickedSound:true,
      secondsElapsed: 0, 
      playStatus:Sound.status.STOPPED,
      clock:0,
      visible: false,
    };
  }

  showModal = () => {
    this.setState({
      visible: true,
    });
  }

  hideModal = () => {
    this.setState({
      visible: false,
    });
  }
  okModal = () => {
    this.setState({
      redirect: true,
    });
  }

  Redirect=()=>{
    if(this.state.redirect){
      this.setState({visible:false, redirect: false,secondsElapsed:0}); 
      this.props.dispatch(savescore(-this.props.score));
      this.props.dispatch(stopTimer(false));
      return <Redirect to="/choose"/> }
      if (this.props.user ==="") {
        return <Redirect to='/' />
     }
  }

  //เงื่อนไขการ show
  //sound
  componentDidMount(){
    //time
    this.incrementer = setInterval( () =>
    // this.props.dispatch(time(this.state.secondsElapsed)),
    this.setState({
      secondsElapsed: this.state.secondsElapsed + this.state.clock
    }),1000);}

    componentWillReceiveProps(nextProps){
    if(nextProps.timer){
      this.setState({
        clock:1,
      })
    }else{
      this.setState({
        clock:0,
      })
      this.props.dispatch(time(formattedSeconds(this.state.secondsElapsed)));
    }
  }

  //sound
  clickedSound=()=>{
    this.setState({
      clickedSound:!this.state.clickedSound
    })
    this.props.dispatch(closeSound(!this.state.clickedSound));
  }


  soundOn=()=>{
    this.setState({playStatus:Sound.status.PLAYING})
  }
// gg=()=>{this.props.dispatch(time(formattedSeconds(this.state.secondsElapsed)));}


  render() {
    //sound
    let sound;
    if(this.state.clickedSound===true){
      sound='bar'
    }else{
      sound='bar noAnim'
    }

    const path =[
      {path:"/intro",component:intro,timer:false,scoreSetting:false,soundSetting:false,home:false},
      {path:"/finalend",component:finalend,timer:false,scoreSetting:false,soundSetting:false,home:false},
      {path:"/exam",component:exam,timer:false,scoreSetting:false},
      {path:"/exam2",component:exam2,timer:false,scoreSetting:false,home:false},
      {path:"/preexam",component:preexam,timer:false,scoreSetting:false},
      {path:"/preexam2",component:preexam2,timer:false,scoreSetting:false,home:false},
      {path:"/howtoplay",component:howtoplay,timer:false,scoreSetting:false,home:false},
      {path:"/share",component:share,timer:false,scoreSetting:false},
      {path:"/finalnormal",component:finalnormal,timer:false,scoreSetting:false,soundSetting:false,home:false},

      {path:"/choose",component:choose,timer:false,scoreSetting:false,home:false},
      {path:"/gallery",component:gallery,timer:false,scoreSetting:false,home:false},

      {path:"/typeA",component:typeA,timer:false,scoreSetting:false},

      {path:"/restroom",component:restroom},
      {path:"/gotoshair",component:gotoshair},
      {path:"/deck",component:deck},
      {path:"/lift",component:lift},
      {path:"/call",component:call},
      {path:"/alarm",component:alarm},
      {path:"/friend",component:friend},


      {path:"/stair19",component:stair19},
      {path:"/stair17",component:stair17},
      {path:"/stair177",component:stair177},
      {path:"/stair16",component:stair16},
      {path:"/stair15",component:stair15},
      {path:"/stair14",component:stair14},
      {path:"/stair12A",component:stair12A},
      {path:"/stair11",component:stair11},
      {path:"/stair10",component:stair10},
      {path:"/endstair",component:endstair},

      {path:"/janghad",component:janghad,timer:false,scoreSetting:false,home:false},
      {path:"/Mjanghad",component:Mjanghad,timer:false,scoreSetting:false,home:false},
      {path:"/rarabhad",component:rarabhad,timer:false,scoreSetting:false,home:false},
      {path:"/firetype",component:firetype,timer:false,scoreSetting:false,home:false},
      {path:"/firetung",component:firetung,timer:false,scoreSetting:false,home:false},
      {path:"/walk",component:walk,timer:false,scoreSetting:false,home:false},
      {path:"/walk360",component:walk360,timer:false,scoreSetting:false,home:false},
      {path:"/smoke",component:smoke,timer:false,scoreSetting:false,home:false},
      {path:"/smoke360",component:smoke360,timer:false,scoreSetting:false,home:false},
      {path:"/heat",component:heat,timer:false,scoreSetting:false,home:false},
      {path:"/heat360",component:heat360,timer:false,scoreSetting:false,home:false},
      {path:"/escape",component:escape,timer:false,scoreSetting:false,home:false},
      {path:"/usetung",component:usetung,timer:false,scoreSetting:false,home:false},
    

      {path:"/fire1",component:fire1,timer:false},
      {path:"/fire2",component:fire2,timer:false},
      {path:"/fire3",component:fire3,timer:false},

      {path:"/Mvideoescape",component:Mvideoescape,timer:false,scoreSetting:false},
      {path:"/Mvideojang",component:Mvideojang,timer:false,scoreSetting:false},

      {path:"/allsum",component:allsum,timer:false,scoreSetting:false},
      {path:"/fireoffice",component:fireoffice},
      {path:"/officeoutside",component:officeoutside},
      {path:"/office",component:office,timer:false},

      {path:"/stair3600",component:stair3600,timer:true},
      {path:"/stair3601",component:stair3601},
      {path:"/stair3602",component:stair3602},
      {path:"/stair3603",component:stair3603},
      {path:"/stair3604",component:stair3604},
      {path:"/stair3605",component:stair3605},
      {path:"/stair3606",component:stair3606},
      {path:"/stair3607",component:stair3607},
      {path:"/stair3608",component:stair3608},
      {path:"/stair3609",component:stair3609},
      {path:"/stair36010",component:stair36010},
      {path:"/stair36011",component:stair36011},
      {path:"/stair36012",component:stair36012},
      {path:"/stair36013",component:stair36013},
    
      /////////////////////////////////////////////////////////////////////////
    
      {path:"/modeescape",component:modeescape,timer:false,scoreSetting:false},
      {path:"/Mrestroom",component:Mrestroom,timer:false,scoreSetting:false},
      {path:"/Mdeck",component:Mdeck,timer:false,scoreSetting:false},
      {path:"/Mlift",component:Mlift,timer:false,scoreSetting:false},
      {path:"/Mgotoshair",component:Mgotoshair,timer:false,scoreSetting:false},
      {path:"/Mstair19",component:Mstair19,timer:false,scoreSetting:false},
      {path:"/Mstair17",component:Mstair17,timer:false,scoreSetting:false},
      {path:"/Mstair177",component:Mstair177,timer:false,scoreSetting:false},
      {path:"/Mstair16",component:Mstair16,timer:false,scoreSetting:false},
      {path:"/Mstair15",component:Mstair15,timer:false,scoreSetting:false},
      {path:"/Mstair14",component:Mstair14,timer:false,scoreSetting:false},
      {path:"/Mstair12A",component:Mstair12A,timer:false,scoreSetting:false},
      {path:"/Mstair11",component:Mstair11,timer:false,scoreSetting:false},
      {path:"/Mstair10",component:Mstair10,timer:false,scoreSetting:false},
      {path:"/Mendstair",component:Mendstair,timer:false,scoreSetting:false},
      {path:"/Mstair3600",component:Mstair3600,timer:false,scoreSetting:false},
      {path:"/Mstair3601",component:Mstair3601,timer:false,scoreSetting:false},
      {path:"/Mstair3602",component:Mstair3602,timer:false,scoreSetting:false},
      {path:"/Mstair3603",component:Mstair3603,timer:false,scoreSetting:false},
      {path:"/Mstair3604",component:Mstair3604,timer:false,scoreSetting:false},
      {path:"/Mstair3605",component:Mstair3605,timer:false,scoreSetting:false},
      {path:"/Mstair3606",component:Mstair3606,timer:false,scoreSetting:false},
      {path:"/Mstair3607",component:Mstair3607,timer:false,scoreSetting:false},
      {path:"/Mstair3608",component:Mstair3608,timer:false,scoreSetting:false},
      {path:"/Mstair3609",component:Mstair3609,timer:false,scoreSetting:false},
      {path:"/Mstair36010",component:Mstair36010,timer:false,scoreSetting:false},
      {path:"/Mstair36011",component:Mstair36011,timer:false,scoreSetting:false},
      {path:"/Mstair36012",component:Mstair36012,timer:false,scoreSetting:false},
      {path:"/Mstair36013",component:Mstair36013,timer:false,scoreSetting:false},
      {path:"/Msmoke",component:Msmoke,timer:false,scoreSetting:false,home:false},
      {path:"/Msmoke360",component:Msmoke360,timer:false,scoreSetting:false,home:false},
      {path:"/Mheat",component:Mheat,timer:false,scoreSetting:false,home:false},
      {path:"/Mheat360",component:Mheat360,timer:false,scoreSetting:false,home:false},
      {path:"/Mwalk",component:Mwalk,timer:false,scoreSetting:false,home:false},
      {path:"/Mwalk360",component:Mwalk360,timer:false,scoreSetting:false,home:false},
      {path:"/Mescape",component:Mescape,timer:false,scoreSetting:false,home:false},
      {path:"/Mfinalend",component:Mfinalend,timer:false,scoreSetting:false,soundSetting:false,home:false},
      {path:"/Mfinalnormal",component:Mfinalnormal,timer:false,scoreSetting:false,soundSetting:false,home:false},
    
      {path:"/modejanghad",component:modejanghad,timer:false,scoreSetting:false},
      {path:"/Mcall",component:Mcall,timer:false,scoreSetting:false},
      {path:"/Malarm",component:Malarm,timer:false,scoreSetting:false},
      {path:"/Mfriend",component:Mfriend,timer:false,scoreSetting:false},
      
      {path:"/Moffice",component:Moffice,timer:false,scoreSetting:false},
      {path:"/Mfireoffice",component:Mfireoffice,timer:false,scoreSetting:false},
      {path:"/Mrarabhad",component:Mrarabhad,timer:false,scoreSetting:false,home:false},
      {path:"/Mfire1",component:Mfire1,timer:false,scoreSetting:false},
      {path:"/Mfire2",component:Mfire2,timer:false,scoreSetting:false},
      {path:"/Mfire3",component:Mfire3,timer:false,scoreSetting:false},
      {path:"/Mfiretype",component:Mfiretype,timer:false,scoreSetting:false,home:false},
      {path:"/Musetung",component:Musetung,timer:false,scoreSetting:false,home:false},
      {path:"/Mfiretung",component:Mfiretung,timer:false,scoreSetting:false,home:false},]
      
    const timer =(    
    <div className="time">
    <div className="container">
      <div className="stopwatch">
      <Icon className="clock" type="clock-circle"/>
      <h1 className="timer">{formattedSeconds(this.state.secondsElapsed)}</h1>
      </div>
    </div>
    </div>
    );
    const scoreSetting =(
      <div className="bgmock">
      <div className="bgtypemock">
        <div className="mock">
        <div  className="name">
        <Icon style={{marginLeft:'10px'}} type="user" />
        <p className="name">{this.props.user}</p>
        </div>
        <br/>
        <Icon style={{color:'white'}} className="star" type="star" theme="filled" />
        <p className="score">{this.props.score}</p>
        </div>           
      </div>
      </div>
    );
      const soundSetting =(
        <div className="bar-c" onClick={this.clickedSound}>
        <div id="bar-1" className={sound}></div>
        <div id="bar-2" className={sound}></div>
        <div id="bar-3" className={sound}></div>
        <div id="bar-4" className={sound}></div>
        <div id="bar-5" className={sound}></div>
        <div id="bar-6" className={sound}></div>
      </div>
      );

      const home =(
        <div className="home">
          <Icon type="home"  onClick={this.showModal}/>
        </div>
      );

    let playSound = Sound.status.PLAYING;
    let pathname = window.location.pathname;
    if(pathname === '/' || pathname === '/intro' || pathname === '/finalend' || pathname === '/finalnormal' || pathname === '/Mfinalend' || pathname === '/Mfinalnormal'){
      playSound = Sound.status.STOPPED;}
      else{playSound = Sound.status.PLAYING;}

    let width = window.innerWidth;
    let height = window.innerHeight; 
    // const user = this.props.user;
    // function withRestriction(WrappedComponent) {
    //   return class RestrictedComponent extends React.Component { 
    //     render() {
    //       if (user ==="") {
    //          return <Redirect to='/' />
    //       }else{
    //        return <WrappedComponent />
    //       }  
    //     }
    //   }
    // }
    // const IntroMP42=withRestriction(intro)
    return ( 
      
    <div>
    {height > width ?
    <div className="rotate"><img className="ro" src={mousegif} /></div>:
    <div>

      <Sound
        url={bgsound}
        loop={true}
        debugMode= {false}
        volume={this.props.sound === false?0:45}
        playStatus={playSound}   
      /> 
        <Modal
          title={<p  style={{fontSize:'20px'}}><Icon type="question-circle" style={{color:'orange',fontSize:'30px',paddingRight:'15px'}}/>คุณต้องการกลับไปหน้าแรกใช่หรือไม่ ?</p>}
          content={false}
          visible={this.state.visible}
          onOk={this.okModal}
          onCancel={this.hideModal}
          okText="ตกลง"
          cancelText="ยกเลิก"
          closable={false}
          style={{fontFamily:'Kanit',display:'flex',justifyContent:'center',alignItems:'center',height:'70%'}}
          bodyStyle={{padding:'0px', }}
        >
        </Modal>


      <Router>
      <div>        
{this.Redirect()}
        <Route exact path="/" component={Loginscreen} />
        {path.map((path) =><Route path={path.path} component={path.component} /> )}
        {path.map((path) =>path.timer === false ?null:<Route path={path.path} render={()=>timer} />)}
        {path.map((path) =>path.scoreSetting === false ?null: <Route path={path.path} render={()=>scoreSetting} /> )}
        {path.map((path) =>path.soundSetting === false ?null: <Route path={path.path} render={()=>soundSetting} /> )}
        {path.map((path) =>path.home === false ?null: <Route path={path.path} render={()=>home} /> )}
      </div>
    </Router>
    </div>
    }
    </div>
    
    );
  }
}

const connectscore = state => ({
score:state.score,
sound:state.sound,
timer:state.timer,
user:state.user,
share:state.share
})

export default connect(connectscore) (App);
