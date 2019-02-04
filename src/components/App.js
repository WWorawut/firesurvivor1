import React, {} from 'react';
import Sound from 'react-sound';
import './App.css';
import './css/setting.css';
import { Icon } from 'antd';
import {connect} from 'react-redux';

import Loginscreen from './Loginscreen';
import Exam from './exam/Exam';
import Howplay from './Howplay';
import exam2 from './exam/exam2';
import share from './share';

import Asum from './PeopleSummary/Asum';
import Bsum from './PeopleSummary/Bsum';
import Csum from './PeopleSummary/Csum';
import Dsum from './PeopleSummary/Dsum';
import Esum from './PeopleSummary/Esum';

import allsum from './Infographic/allsum';
import janghad from './Infographic/janghad'; 
import firetype from './Infographic/firetype'; 
import rarabhad from './Infographic/rarabhad';
import firetung from './Infographic/firetung';  
import walk from './Infographic/walk'; 
import smoke from './Infographic/smoke'; 
import heat from './Infographic/heat'; 
import escape from './Infographic/escape'; 
import usetung from './Infographic/usetung'; 

import toilet from './Scene/toilet';
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

import stair12A1 from './stairnormal/12a1';

import officeoutside from './360/officeoutside';
import gotoshair from './360/gotoshair';
import fireoffice from './360/fireoffice';
import office from './360/office';

import IntroMP4 from './video/IntroMP4';

import { BrowserRouter as  Router, Route,Link} from 'react-router-dom';

import sound from './video/sound/speakstair.mp3';
import bgsound from './video/file/soundfirebg.mp3';

import preload from './preload';





const formattedSeconds = (sec) =>
  Math.floor(sec / 60) +
    ':' +
  ('0' + sec % 60).slice(-2)


class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = { 
      clickedSound:true,
      secondsElapsed: 0, 
      user:localStorage.getItem("user")
    };
  }

  //เงื่อนไขการ show
  //sound
  componentDidMount(){
    //time
    this.incrementer = setInterval( () =>
    this.setState({
      secondsElapsed: this.state.secondsElapsed + 1
    }),1000);
  }


  //sound
  clickedSound=()=>{
    this.setState({
      clickedSound:!this.state.clickedSound
    })
  }




  



  render() {
    //sound
    let sound;
    if(this.state.clickedSound===true){
      sound='bar'
    }else{
      sound='bar noAnim'
    }
    const Path = window.location.pathname;

    return (
      <div>
      <Sound
        url={bgsound}
        loop={true}
        volume={100}
        playStatus={Sound.status.PLAYING}   
      />  



            
      {/* score setting */} 
      {Path === '/' || Path === '/intro' || Path === '/howtoplay' || Path === '/allsum'
      || Path === '/typea' || Path === '/typeb' || Path === '/typec' || Path === '/typed' || Path === '/typee'
      || Path === '/exam' || Path === '/exam2' || Path === '/preload'?
      null:
      <div className="bgmock">
        <div className="bgtypemock">
          <div className="mock">
          <div  className="name">
          <Icon style={{marginLeft:'10px'}} type="user" />
          <p className="name">{this.state.user}</p>
          </div>
          <br/>
          <Icon style={{color:'white'}} className="star" type="star" theme="filled" />
          <p className="score">{this.props.score}</p>
          </div>           
        </div>
        </div>
      }





      {/* sound setting */}
      <div>
      {Path === '/' || Path === '/intro' || Path === '/preload'?
      null:
      <div className="bar-c" onClick={this.clickedSound}>
          <div id="bar-1" className={sound}></div>
          <div id="bar-2" className={sound}></div>
          <div id="bar-3" className={sound}></div>
          <div id="bar-4" className={sound}></div>
          <div id="bar-5" className={sound}></div>
          <div id="bar-6" className={sound}></div>
        </div>
      }
      {/* info setting */}
      {/* {Path === '/' || Path === '/intro' || Path === '/exam'? 
      null:
        <div className="setting">
        <Icon type="info-circle" />
        </div> 
      } */}



      </div>
      {/* time setting */} 
      {Path === '/' || Path === '/intro' || Path === '/howtoplay' 
      || Path === '/exam'|| Path === '/exam2' || Path === '/allsum' 
      || Path === '/typea' || Path === '/typeb' || Path === '/typec' || Path === '/typed' || Path === '/typee'
      || Path === '/preload' || Path === '/office'? 
      null:       
      <div className="time">
        <div className="container">
          <div className="stopwatch">
          <Icon className="clock" type="clock-circle"/>
          <h1 className="timer">{formattedSeconds(this.state.secondsElapsed)}</h1>
          </div>
        </div>
        </div>
      }
      










      {/* path */}
      <Router>
      <div>        
        <Route path="/preload" component={preload} />

        <Route exact path="/" component={Loginscreen} />
        <Route path="/intro" component={IntroMP4} />
        <Route path="/exam" component={Exam} />
        <Route path="/exam2" component={exam2} />
        <Route path="/howtoplay" component={Howplay} />
        <Route path="/share" component={share} />

        {/* people summary page */}
        <Route path="/typeA" component={Asum} />
        <Route path="/typeB" component={Bsum} />
        <Route path="/typeC" component={Csum} />
        <Route path="/typeD" component={Dsum} />
        <Route path="/typeE" component={Esum} />

        {/* scene normal page */}
        <Route path="/restroom" component={toilet} />
        <Route path="/deck" component={deck} />
        <Route path="/lift" component={lift} />

        <Route path="/call" component={call} />
        <Route path="/alarm" component={alarm} />
        <Route path="/friend" component={friend} />


        {/* stair normal page */}
        <Route path="/stair19" component={stair19} />
        <Route path="/stair17" component={stair17} />
        <Route path="/stair177" component={stair177} />
        <Route path="/stair16" component={stair16} />
        <Route path="/stair15" component={stair15} />
        <Route path="/stair14" component={stair14} />
        <Route path="/stair12A" component={stair12A} />
        <Route path="/stair11" component={stair11} />
        <Route path="/stair10" component={stair10} />
        <Route path="/endstair" component={endstair} />

        <Route path="/s12a1" component={stair12A1} />

  

        {/* Infographic page */}
        <Route path="/allsum" component={allsum} /> {/* Info สรุปรวม */}
        <Route path="/janghad" component={janghad} />  {/* Info แจ้งเหตุ */}
        <Route path="/firetype" component={firetype} />  {/* Info ประเภทของไฟ */}
        <Route path="/rarabhad" component={rarabhad} />  {/* Info ระงับเหตุ */}
        <Route path="/firetung" component={firetung} />  {/* Info ประเภทถังดับเพลิง */}
        <Route path="/walk" component={walk} />  {/* Info เดินหนีไฟ */}
        <Route path="/smoke" component={smoke} />  {/* Info หนีควัน*/}
        <Route path="/heat" component={heat} />  {/* Info หนีความร้อน */}
        <Route path="/escape" component={escape} />  {/* Info หนีเหตุ */}
        <Route path="/usetung" component={usetung} />  {/* Info การใช้ถังดับเพลิง */}  



        {/* 360 page */}
        <Route path="/officeoutside" component={officeoutside} />
        <Route path="/gotoshair" component={gotoshair} />
        <Route path="/fireoffice" component={fireoffice} />
        <Route path="/office" component={office} />

      </div>
    </Router>
    </div>
    );
  }
}

const connectscore = state => ({
score:state.score
})

export default connect(connectscore) (App);
