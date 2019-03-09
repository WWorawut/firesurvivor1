import React, {} from 'react';
import '../css/normal.css';
import '../css/scenenormal.css';

import { Button } from 'antd';
import Popup from '../Scene/popup';

import listfire1 from "../picture2/popscore/Mlistfire21.png";
import listfire2 from "../picture2/popscore/Mlistfire22.png";
import listfire3 from "../picture2/popscore/Mlistfire23.png";


import human from "../picture2/speak/human.png";
import sfire from "../picture2/speak/sfire.png";

import { Player, ControlBar } from 'video-react';
import intro from "../video/file/fire2.mp4";

import { Link,Redirect } from 'react-router-dom'
import {connect} from 'react-redux';

import Sound from 'react-sound';
import sound from '../video/sound/speakfire.mp3';

import dab from "../picture2/popscore/Mdab.png";

import sound2 from '../video/sound/dabbasic.mp3';
import sound3 from '../video/sound/f36.mp3';
import sound4 from '../video/sound/f32.mp3';
import sound5 from '../video/sound/fpuck.mp3';

import Preload from '../preload';
import { Preloader, Placeholder } from 'react-preloading-screen';


class Mfire2 extends React.Component{
  state={
    class:'fadeInUp',
    class2:'fadeInUp',
    controlPopup:false,
    popup:false,
    link:false,
    outshow2:false,
    playStatus:Sound.status.STOPPED,
    playpop:Sound.status.STOPPED,
    urlSound:"",
  }

  componentDidMount(){
    this.refs.player.subscribeToStateChange(this.handleStateChange);
    setTimeout(this.soundOn,1200);
    setTimeout(this.outshow,5000);
  }

  handleStateChange=()=> {
    this.refs.player.volume = this.props.sound;
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
    if(data.sound){
      this.setState({playpop:Sound.status.PLAYING,urlSound:data.sound})  
      }
    setTimeout(this.popupClose(data),2800);
  }
    
  popupClose=data=>()=>{
    this.setState({[data.state]:false})
    setTimeout(this.setlink(data.link),1000);  
  }

  setlink=link=>()=>{this.setState({ [link]:true })}

          openpop1=data=>()=>{
            this.setState({[data.state]:true});
            this.waittocontrol(data);
          }
            //time
            waittocontrol=(data)=>{
              if(data.sound){
              this.setState({playpop:Sound.status.PLAYING,urlSound:data.sound})  
              }
              setTimeout(this.control(data),2800)
            }


  control=data=>()=>{
    this.setState({[data.state]:false, controlPopup:true,class2:'fadeOutDown' })
  }

  // Redirect1=()=>{if(this.state.l){ return <Redirect to="/" /> }}
  Redirect=()=>{
    if(this.state.link){ return <Redirect to="/Mfiretype" /> }
  }
  

   render() {
  
     const state={
      volume:0
     }
    return (
      <Preloader>
      <div>
        {this.Redirect()}
        {/* {this.Redirect1()} */}

      <Popup
      open={this.state.popup}
      image={listfire1}
      iconclose={'none'}
      maxWidth='xs'
      />

      <Popup
      open={this.state.popup2}
      image={listfire2}
      iconclose={'none'}
      maxWidth='xs'
      />

      <Popup
      open={this.state.popup3}
      image={listfire3}
      iconclose={'none'}
      maxWidth='xs'
      />

      <Popup
      open={this.state.dab}
      image={dab}
      iconclose={'none'}
      maxWidth='xs'
      />    

      <Sound
        url={sound}
        volume={this.props.sound === false?0:100}
        playStatus={this.state.playStatus}
        onFinishedPlaying={() => this.setState({ playStatus: Sound.status.STOPPED })}
      />  

      <Sound
        url={this.state.urlSound}
        volume={this.props.sound === false?0:100}
        playStatus={this.state.playpop}
        onFinishedPlaying={() => this.setState({ playpop: Sound.status.STOPPED })}
      />

      {/* <img className="bgfire11" src={mousegif} />  */}

      <div className="v">

            <Player 
            ref="player"
            autoPlay
            playsInline={true}
            loop={true}
            volume={0}
            className="bgv"
            >
            <source src={intro} />
            <ControlBar autoHide={false} disableDefaultControls></ControlBar>
            </Player> 

      <div className="bgtext">
     {this.state.outshow2 === false ?
      <div className="centerhuman" style={{position:'absolute'}}>
        <img className={"human animated " +this.state.class} src={human}/>
        <img className={"text animated " +this.state.class} src={sfire}/>
        </div>
        :
        <div className={"boxfire animated "+this.state.class2}>
        <div className="boxjangtext">
        <p style={{textAlign:'center'}} className="texthead">คุณต้องการดับเพลิงเบื้องต้นด้วยตนเองหรือไม่ ?</p>
        <div classname="buttonchoice">
        <div style={{textAlign:'center', paddingTop:'3%'}}>
        <Button style={{marginRight:'5%'}}  onClick={this.openpop1({state:'dab',sound:sound2})} type="primary">ตกลง</Button>
        <Link to ="/Mfiretype" ><Button type="primary" onClick={this.end} ghost>ยกเลิก</Button></Link>
        </div>
        </div>
        </div>
      </div>
      }


{this.state.controlPopup === true ?
        <div className=" boxfireoffice animated zoomIn">
        <div className="boxjangtext">
        <p>สถานการณ์ :</p>
        <p className="texthead">สายไฟบริเวณหิ้งพระที่เก่ามากจนหลอมละลาย เกิดประกายไฟไหม้กระดาษต่างๆ บนโต๊ะ ควรทำเช่นใดเพื่อไม่ให้ไฟลุกลาม?</p>
        <Button className="buttonjang" onClick={this.openpop({link:'link',state:'popup',sound:sound3})}>นำสิ่งของรอบๆ ออก</Button>
        <br/>
        <Button className="buttonjang" onClick={this.openpop({link:'link',state:'popup2',sound:sound4})}>ใช้น้ำราดไปที่สายไฟ เพื่อดับเพลิง</Button>
        <br/>
        <Button className="buttonjang" onClick={this.openpop({link:'link',state:'popup3',sound:sound5})}>ดึงปลั๊กไฟด้วยมือเปล่า</Button>
        </div>
        </div>
      :
      null
}
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
  sound:state.sound
  })

  export default connect(connectscore)(Mfire2);










