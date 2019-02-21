import React, {} from 'react';
import Sound from 'react-sound';
import './App.css';
import './css/setting.css';
import { Icon } from 'antd';
import {connect} from 'react-redux';

import Loginscreen from './Loginscreen';
import choose from './choose';
import exam from './exam/Exam';
import exam2 from './exam/exam2';
import preexam from './exam/preexam';
import preexam2 from './exam/preexam2';
import howtoplay from './Howplay';
import share from './share';

import typeA from './PeopleSummary/Asum';

import allsum from './Infographic/allsum';
import janghad from './Infographic/janghad'; 
import firetype from './Infographic/firetype'; 
import rarabhad from './Infographic/rarabhad';
import firetung from './Infographic/firetung';  
import walk from './Infographic/walk'; 
import walk360 from './Infographic/walk360'; 
import smoke from './Infographic/smoke'; 
import smoke360 from './Infographic/smoke360'; 
import heat from './Infographic/heat'; 
import heat360 from './Infographic/heat360'; 
import escape from './Infographic/escape'; 
import usetung from './Infographic/usetung'; 

import restroom from './Scene/toilet';
import deck from './Scene/deck';
import lift from './Scene/lift';

import call from './Scene/call';
import alarm from './Scene/alarm';
import friend from './Scene/tellfriend';

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

import office from './360/office';
import fire1 from './office/fire1';
import fire2 from './office/fire2';
import fire3 from './office/fire3';
import finalend from './office/finalend';

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


import intro from './video/IntroMP4';

import { BrowserRouter as  Router, Route,Link} from 'react-router-dom';


import bgsound from './video/file/s2.mp3';

import preload from './preload';

import {time,closeSound, user} from './../action'



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
      layStatus:Sound.status.STOPPED,
      clock:0
    };
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
      {path:"/intro",component:intro,timer:false,openSound:false,scoreSetting:false,soundSetting:false},
      {path:"/finalend",component:finalend,timer:false,openSound:false,scoreSetting:false,soundSetting:false},
      {path:"/exam",component:exam,timer:false,scoreSetting:false},
      {path:"/exam2",component:exam2,timer:false,scoreSetting:false},
      {path:"/preexam",component:preexam,timer:false,scoreSetting:false},
      {path:"/pre2exam",component:preexam2,timer:false,scoreSetting:false},
      {path:"/howtoplay",component:howtoplay,timer:false,scoreSetting:false},
      {path:"/share",component:share,timer:false,scoreSetting:false},
      {path:"/choose",component:choose,timer:false,scoreSetting:false},

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

      {path:"/janghad",component:janghad},
      {path:"/rarabhad",component:rarabhad},
      {path:"/firetype",component:firetype,timer:false,scoreSetting:false},
      {path:"/firetung",component:firetung},
      {path:"/walk",component:walk},
      {path:"/walk360",component:walk360},
      {path:"/friend",component:friend},
      {path:"/smoke",component:smoke},
      {path:"/smoke360",component:smoke360},
      {path:"/heat",component:heat},
      {path:"/heat360",component:heat360},
      {path:"/escape",component:escape,timer:false,scoreSetting:false},
      {path:"/usetung",component:usetung},

      {path:"/fire1",component:fire1,timer:false},
      {path:"/fire2",component:fire2,timer:false},
      {path:"/fire3",component:fire3,timer:false},

      {path:"/allsum",component:allsum,timer:false,scoreSetting:false},
      {path:"/fireoffice",component:fireoffice},
      {path:"/officeoutside",component:officeoutside},
      {path:"/office",component:office,timer:false},

      {path:"/stair3600",component:stair3600},
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
      {path:"/stair36013",component:stair36013}]
      
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

    const openSound =(
      <Sound
        url={bgsound}
        loop={true}
        volume={this.props.sound === false?0:45}
        playStatus={Sound.status.PLAYING}   
        onFinishedPlaying={() => this.setState({ playStatus: Sound.status.STOPPED })}
      />  
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
      
    return (
      <div>
      <Router>
      <div>        

        <Route exact path="/" component={Loginscreen} />
        {path.map((path) =><Route path={path.path} component={path.component} /> )}
        {path.map((path) =>path.timer === false ?null:<Route path={path.path} render={()=>timer} />)}
        {path.map((path) =>path.openSound === false ?null: <Route path={path.path} render={()=>openSound} /> )}
        {path.map((path) =>path.scoreSetting === false ?null: <Route path={path.path} render={()=>scoreSetting} /> )}
        {path.map((path) =>path.soundSetting === false ?null: <Route path={path.path} render={()=>soundSetting} /> )}

      </div>
    </Router>
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
