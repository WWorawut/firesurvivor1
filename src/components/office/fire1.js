import React, {} from 'react';
import '../css/normal.css';


import { Button } from 'antd';
import Popup from '../Scene/popup';

import listfire1 from "../picture2/popscore/listfire11.png";
import listfire2 from "../picture2/popscore/listfire12.png";
import listfire3 from "../picture2/popscore/listfire13.png";


import human from "../picture2/speak/human.png";
import sfire from "../picture2/speak/sfire.png";

import { Player, ControlBar } from 'video-react';
import intro from "../video/file/fire1.mp4";

import { Link,Redirect } from 'react-router-dom'
import {savescore} from '../../action'
import {connect} from 'react-redux';

import Sound from 'react-sound';
import sound from '../video/sound/speakfire.mp3';


class fire1 extends React.Component{
  state={
    class:'fadeInUp',
    class2:'fadeInUp',
    controlPopup:false,
    popup:false,
    link:false,
    outshow2:false,
    playStatus:Sound.status.STOPPED
  }

  componentDidMount(){ 
    setTimeout(this.soundOn,1200);
    setTimeout(this.outshow,5000);
  }
  outshow=()=>{this.setState({class:'fadeOutDown'})
  setTimeout(this.outshow2,1000)
  }
  soundOn=()=>{
    this.setState({playStatus:Sound.status.PLAYING})
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

  control=()=>{
    this.setState({controlPopup:true,class2:'fadeOutDown' })
  }

  // Redirect1=()=>{if(this.state.l){ return <Redirect to="/" /> }}
  Redirect=()=>{
    if(this.state.link){ return <Redirect to="/firetype" /> }
  }
  

   render() {
    return (
      <div>
        {this.Redirect()}
        {/* {this.Redirect1()} */}

      <Popup
      open={this.state.popup}
      image={listfire1}
      iconclose={'none'}
      />

      <Popup
      open={this.state.popup2}
      image={listfire2}
      iconclose={'none'}
      />

      <Popup
      open={this.state.popup3}
      image={listfire3}
      iconclose={'none'}
      />

      <Sound
        url={sound}
        volume={this.props.sound === false?0:100}
        playStatus={this.state.playStatus}
        onFinishedPlaying={() => this.setState({ playStatus: Sound.status.STOPPED })}
      />  

      {/* <img className="bgfire11" src={mousegif} />  */}

      <div className="v">

            <Player 
            ref="player"
            autoPlay
            playsInline={true}
            loop={true}
            className="bghhv"
            >
            <source src={intro} />
            <ControlBar autoHide={false} disableDefaultControls></ControlBar>
            </Player> 


      <div className="bgtext">
     {this.state.outshow2 === false ?
      <div className="centerhuman" style={{position:'absolute', right:'15%'}}>
        <img className={"human animated " +this.state.class} src={human}/>
        <img className={"text animated " +this.state.class} src={sfire}/>
        </div>
        :
        <div className={"boxfire animated "+this.state.class2}>
        <div className="boxjangtext">
        <p style={{textAlign:'center'}} className="texthead">คุณต้องการดับเพลิงเบื้องต้นด้วยตนเองหรือไม่ ?</p>
        <div classname="buttonchoice">
        <div className="texthead" style={{textAlign:'center', paddingTop:'3%'}}>
        <Button style={{marginRight:'5%'}} onClick={this.control} type="primary">ตกลง</Button>
        <Link to ="/firetype" ><Button type="primary" onClick={this.end} ghost>ยกเลิก</Button></Link>
        </div>
        </div>
        </div>
      </div>
      }


{this.state.controlPopup === true ?
      <div className="boxfireoffice animated zoomIn">
      <div className="boxjangtext">
      <p>สถานการณ์ :</p>
      <p className="texthead">ไมโครเวฟเกิดความร้อนสูงจนเกิดประกายไฟไหม้ ลุกไหม้ผ้าเช็ดโต๊ะ ควรทำเช่นใดเพื่อไม่ให้ไฟลุกลาม?</p>
      <Button className="buttonjang" onClick={this.openpop({link:'link',score:-3,state:'popup'})}>ดึงปลั๊กไมโครเวฟออก ด้วยมือเปล่า</Button>
      <br/>
      <Button className="buttonjang" onClick={this.openpop({link:'link',score:3,state:'popup2'})}>นำสิ่งของรอบๆ ออก</Button>
      <br/>
      <Button className="buttonjang" onClick={this.openpop({link:'link',score:-3,state:'popup3'})}>ใช้น้ำราดที่ไมโครเวฟ เพื่อดับเพลิง</Button>
      </div>
      </div> 
      :
      null
}
      </div>

      </div>
    </div>
    );
  }
}
const connectscore = state => ({
  score:state.score,
  sound:state.sound
  })

  export default connect(connectscore)(fire1);