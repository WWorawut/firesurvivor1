import React, {} from 'react';
import Sound from 'react-sound';
import './App.css';
import './css/setting.css';
import { Icon } from 'antd';


import New from './new';
import Loginscreen from './Loginscreen';
import Exam from './exam/Exam';
import Howplay from './Howplay';
import exam2 from './exam/exam2';

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

import IntroMP4 from './video/IntroMP4';

import { BrowserRouter as  Router, Route,Link} from 'react-router-dom';

import Ms from './video/file/aasound.mp3';

class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = { 
      clickedSound:true,
      pathname:true
    };
  }

  componentDidMount(){
    if(window.location.pathname === '/' || window.location.pathname === '/intro' || window.location.pathname === '/howtoplay'){
      this.setState({
        pathname:false
      })
    }
  }

  clickedSound=()=>{
    this.setState({
      clickedSound:!this.state.clickedSound
    })
  }
  
  render() {
    let sound;
    if(this.state.clickedSound===true){
      sound='bar'
    }else{
      sound='bar noAnim'
    }
    return (
      <div>
      {/* <Sound
        url={Ms}
        loop={true}
        volume={100}

        playStatus={Sound.status.PLAYING}
        onLoading={this.handleSongLoading}
        onPlaying={this.handleSongPlaying}
        onFinishedPlaying={this.handleSongFinishedPlaying}
      />   */}


      {/* sound setting */}
      {this.state.pathname ?
      <div>
      <div className="bar-c" onClick={this.clickedSound}>
          <div id="bar-1" className={sound}></div>
          <div id="bar-2" className={sound}></div>
          <div id="bar-3" className={sound}></div>
          <div id="bar-4" className={sound}></div>
          <div id="bar-5" className={sound}></div>
          <div id="bar-6" className={sound}></div>
        </div>

        <div className="setting">
        <Icon type="info-circle" />
        </div>
        </div>
        :null
      }


      <Router>
      <div>        

        <Route exact path="/" component={Loginscreen} />
        <Route path="/intro" component={IntroMP4} />
        <Route path="/office" component={New} />
        <Route path="/exam" component={Exam} />
        <Route path="/exam2" component={exam2} />
        <Route path="/howtoplay" component={Howplay} />

        {/* people summary page */}
        <Route path="/typeA" component={Asum} />
        <Route path="/typeB" component={Bsum} />
        <Route path="/typeC" component={Csum} />
        <Route path="/typeD" component={Dsum} />
        <Route path="/typeE" component={Esum} />

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
        <Route path="/usetung" component={usetung} />  {/* Info การใช้ถุงดับเพลิง */}            
      </div>
    </Router>
    </div>
    );
  }
}

export default App;
