import React, {} from 'react';
import Examchoice from './Examchoice';
import { Steps , notification, Modal, Button, Tabs, Select } from 'antd';
import 'antd/dist/antd.css'
import '../css/exam.css';
import ans from "../picture/ans.png";
import { BrowserRouter as   Link, Redirect } from 'react-router-dom';

import Popup from '../Scene/popup';
import Sound from 'react-sound';
import walk1 from "../picture2/popscore/copre.png";
import sound3 from '../video/sound/sfpre.mp3';

const Step = Steps.Step;
const TabPane = Tabs.TabPane;
const Option = Select.Option;

function ButtonCorrect(props) {
  return <div className="boxanswer" style={props.choice ==='true'? {backgroundColor:'#33FF3E'}:{backgroundColor:'#FF3333'}}>{props.choiceName}</div>;
}

class preexam2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
        link:false,
        choice1:"",
        choice2:"",
        choice3:"",
        choice4:"",
        choice5:"",
        choice6:"",
        choice7:"",
        choice8:"",
        choice9:"",
        choice10:"",
        pointKey:'1',
        playStatus:Sound.status.STOPPED,
        popup:false,
        urlSound:""
    };
  }

    change=name=>(e)=>{
        this.setState({
            [name]: e.target.value
        })
    }

    submit=()=>{
        let score = 0;
        if(this.state.choice1==="true"){ score++;}
        if(this.state.choice2==="true"){ score++;}
        if(this.state.choice3==="true"){ score++;}
        if(this.state.choice4==="true"){ score++;}
        if(this.state.choice5==="true"){ score++;}
        if(this.state.choice6==="true"){ score++;}
        if(this.state.choice7==="true"){ score++;}
        if(this.state.choice8==="true"){ score++;}
        if(this.state.choice9==="true"){ score++;}
        if(this.state.choice10==="true"){ score++;}
        this.nextPoint();
        this.setState({score:score})
    }

    setlink=link=>()=>{this.setState({ [link]:true })}
    Redirect=()=>{if(this.state.link){ return <Redirect to="/choose" /> }}
 
    nextPoint=()=>{
        let pointKey = parseInt(this.state.pointKey, 10);
        pointKey++;
        pointKey = pointKey.toString(10);
        this.setState({ pointKey:pointKey})
    }

    success() {
        Modal.success({
          title: <img src={ans}/>,
          iconType:NamedNodeMap,
          width:'950px',
        });
    }


    openpop=data=>()=>{
      this.setState({[data.state]:true});
      if(data.sound){
        this.setState({playpop:Sound.status.PLAYING,urlSound:data.sound})  
        }
      setTimeout(this.popupClose(data),3000);
    }
      
    popupClose=data=>()=>{
      this.setState({[data.state]:false})
      setTimeout(this.setlink(data.link),1000);  
    }
      


  render() {
    notification.config({
        placement: 'topRight',
        duration: 2,

      });

      const step={
        position: 'absolute',
        right: '0px',
        width: '5%',
        top: '50%',
        transform: 'translate(-50%, -50%)',
      }
       

//   activeKey={this.state.pointKey}  activeKey='11'
    return ( 
    <div>   

      <Sound
        url={this.state.urlSound}
        volume={this.props.sound === false?0:100}
        playStatus={this.state.playpop}
        onFinishedPlaying={() => this.setState({ playpop: Sound.status.STOPPED })}
      />

      <Popup
      open={this.state.popup}
      image={walk1}
      iconclose={'none'}
      maxWidth='xs'
      />


        <Tabs tabPosition="bottom" tabBarStyle={{display:'none'}} className="detailpreexam" activeKey={this.state.pointKey} >  
 
        <TabPane tab="1" key="1" >
        <div className="typeexambox">
          <div className="typeexam">
          </div>     
          <Examchoice
            next={this.nextPoint}
            choice={this.state.choice1}
            change={this.change('choice1')}
            quiz="1. เบอร์โทรใดเป็นเบอร์แจ้งเหตุไฟไหม้"
            onechoice="ก. 190"
            twochoice="ข. 191"
            threechoice="ค. 1669"
            fourchoice="ง. 199"
            a = "false1"
            b = "false2"
            c = "false3"
            d = "true"
        />         
        </div>
        </TabPane>

        <TabPane tab="2" key="2">
        <div className="typeexambox">
          <div className="typeexam">
          </div>     
          <Examchoice
            next={this.nextPoint}
            choice={this.state.choice2}
            change={this.change('choice2')}
            quiz="2. คนส่วนใหญ่ที่เสียชีวิตในเหตุเพลิงไหม้ มาจากสาเหตุใดมากที่สุด"
            onechoice="ก. ล้ม"
            twochoice="ข. ไฟคลอก"
            threechoice="ค. ความร้อน"
            fourchoice="ง. ควันพิษ"
            a = "false1"
            b = "false2"
            c = "false3"
            d = "true"
        />         
        </div>
        </TabPane>


        <TabPane tab="3" key="3">
        <div className="typeexambox">
          <div className="typeexam">
          </div>     
          <Examchoice
            next={this.nextPoint}
            choice={this.state.choice3}
            change={this.change('choice3')}
            quiz="3. เมื่อเกิดเหตุเพลิงไหม้ ควรแจ้งเหตุอย่างไร จึงเรียกว่าเหมาะสมที่สุด"
            onechoice="ก. วิ่งหนี ไปเคาะประตูบอกเพื่อน"
            twochoice="ข. กดกริ่ง ตะโกนไฟไหม้ และตะโกนบอกจุดเกิดเหตุ"
            threechoice="ค. ตะโกนไฟไหม้"
            fourchoice="ง. ตะโกนไฟไหม้ และบอกจุดเกิดเหตุ"
            a = "false1"
            b = "true"
            c = "false3"
            d = "false2"
        />        
        </div>
        </TabPane>

        <TabPane tab="4" key="4">
        <div className="typeexambox">
          <div className="typeexam">
          </div>     
          <Examchoice
            next={this.nextPoint}
            choice={this.state.choice4}
            change={this.change('choice4')}
            quiz="4. สถานที่ใด ไม่ควรหนีเข้าไปมากที่สุดในขณะเกิดเหตุไฟไหม้"
            onechoice="ก. ดาดฟ้า"
            twochoice="ข. ห้องน้ำ"
            threechoice="ค. ลานจอดรถใต้ดิน"
            fourchoice="ง. ลานจอดรถชั้นพื้นดิน"
            a = "false1"
            b = "true"
            c = "false3"
            d = "false2"
        />
        </div>
        </TabPane>

        <TabPane tab="5" key="5">
        <div className="typeexambox">
          <div className="typeexam">
          </div>     
          <Examchoice
            next={this.nextPoint}
            choice={this.state.choice5}
            change={this.change('choice5')}
            quiz="5. อุปกรณ์ใดเหมาะแก่การใช้หนีไฟ และสามารถใช้ได้เป็นเวลานานที่สุด"
            onechoice="ก. ไฟฉาย"
            twochoice="ข. ผ้าคลุมตัว"
            threechoice="ค. ขวดน้ำที่มีน้ำอยู่"
            fourchoice="ง. ถุงพลาสติกขนาดใหญ่"
            a = "true"
            b = "false2"
            c = "false1"
            d = "false3"
        />
        </div>
        </TabPane>

        <TabPane tab="6" key="6">
        <div className="typeexambox">
          <div className="typeexam">
          </div>     
          <Examchoice
            next={this.nextPoint}
            choice={this.state.choice6}
            change={this.change('choice6')}
            quiz="6. ถ้าควันพิษนอกห้องมีมากจนไม่สามารถออกไปข้างนอกได้ ควรปฏิบัติตัวอย่างไรเป็นอันดับแรกถึงเหมาะสมที่สุด"
            onechoice="ก. หลบซ่อนในห้องน้ำ"
            twochoice="ข. เอาผ้ามาปิดจมูกตัวเอง"
            threechoice="ค. เอาผ้ามาปิดช่องทางรอดของควัน เพื่อไม่ให้ควันเข้าห้องได้"
            fourchoice="ง. ไปที่กระจกขอความช่วยเหลือ"
            a = "false1"
            b = "false2"
            c = "true"
            d = "false3"
        />
        </div>
        </TabPane>

        <TabPane tab="7" key="7">
        <div className="typeexambox">
          <div className="typeexam">
          </div>     
          <Examchoice
            next={this.nextPoint}
            choice={this.state.choice7}
            change={this.change('choice7')}
            quiz="7. สถานที่ใด ควรหนีไปหลบมากที่สุดในขณะเกิดเหตุไฟไหม้"
            onechoice="ก. ดาดฟ้า"
            twochoice="ข. ลานจอดรถชั้นพื้นดิน"
            threechoice="ค. ลานจอดรถใต้ดิน"
            fourchoice="ง. ห้องน้ำ"
            a = "false1"
            b = "true"
            c = "false3"
            d = "false2"
        />
        </div>
        </TabPane>

        <TabPane tab="8" key="8">
        <div className="typeexambox">
          <div className="typeexam">
          </div>     
          <Examchoice
            next={this.nextPoint}
            choice={this.state.choice8}
            change={this.change('choice8')}
            quiz="8. สถานการณ์ใด ที่แสดงว่าเราอยู่ใกล้ในจุดที่เกิดเหตุเพลิงไหม้รุนแรงที่สุด"
            onechoice="ก. สถานที่นั้นมีนักดับเพลิงอยู่"
            twochoice="ข. สถานที่นั้นมีควันออกมาเล็กน้อย"
            threechoice="ค. สถานที่นั้นมีสิ่งของวางกีดขวาง กระจัดกระจายอยู่"
            fourchoice="ง. สถานที่นั้นมีความร้อนสูง จนรู้สึกได้"
            a = "false1"
            b = "false2"
            c = "false3"
            d = "true"
        />
        </div>
        </TabPane>

        <TabPane tab="9" key="9">
        <div className="typeexambox">
          <div className="typeexam">
          </div>     
          <Examchoice
            next={this.nextPoint}
            choice={this.state.choice9}
            change={this.change('choice9')}
            quiz="9. การหนีไฟในขณะลงบันได ควรกระทำอย่างใด"
            onechoice="ก. เดินเร็ว ชิดฝั่งกำแพง"
            twochoice="ข. หมอบต่ำ ชิดฝั่งราวบันได"
            threechoice="ค. รีบวิ่งให้ถึงเร็วที่สุด"
            fourchoice="ง. เดินเร็ว ชิดฝั่งราวบันได"
            a = "true"
            b = "false2"
            c = "false3"
            d = "false1"
        />
        </div>
        </TabPane>

        <TabPane tab="10" key="10">
        <div className="typeexambox">
          <div className="typeexam">
          </div>     
          <Examchoice
            next={this.submit}
            choice={this.state.choice10}
            change={this.change('choice10')}
            quiz="10. ขณะที่กำลังหนีไฟทางบันได มีควันเริ่มเข้ามาควรกระทำอย่างใดจึงเหมาะสมที่สุด"
            onechoice="ก. หมอบต่ำ และคลานออก"
            twochoice="ข. หนีควันขึ้นไปชั้นบนทันที"
            threechoice="ค. รีบวิ่งลุยควันออกไป"
            fourchoice="ง. เดินเร็ว และใช้มือปัดควัน"
            a = "false1"
            b = "false2"
            c = "false3"
            d = "true"
            final="final"
        />
        </div>
        </TabPane>  

        <TabPane tab="11" key="11">
        <div className="preanswer">
          <div className="pretypeexam font">
          <div className="textanswer">
            <p>คะแนนของคุณ : {this.state.score} คะแนน</p>
                {this.Redirect()}  
          <Button onClick={this.openpop({link:'link',state:'popup',sound:sound3})} type="primary">ยืนยัน</Button>


        </div>
          </div>     
        </div>
        </TabPane>     





        <Steps current={this.state.pointKey-1} className="d" direction="vertical" size="small" style={step}>
          <Step key={"1"} />
          <Step key={"2"} />
          <Step key={"3"} />
          <Step key={"4"} />
          <Step key={"5"} />
          <Step key={"6"} />
          <Step key={"7"} />
          <Step key={"8"} />
          <Step key={"9"} />
          <Step key={"10"} />
        </Steps> 
        </Tabs>
 
      </div>

    );
  }
}

export default preexam2;