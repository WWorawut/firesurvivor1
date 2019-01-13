import React, {} from 'react';
import Examchoice from './Examchoice';
import { Steps , notification, Modal, Button, Tabs, Select } from 'antd';
import 'antd/dist/antd.css'
import '../css/exam.css';
import ans from "../picture/ans.png";

const Step = Steps.Step;
const TabPane = Tabs.TabPane;
const Option = Select.Option;

function ButtonCorrect(props) {
  return <div className="boxanswer" style={props.choice ==='true'? {backgroundColor:'#33FF3E'}:{backgroundColor:'#FF3333'}}>{props.choiceName}</div>;
}

class exam2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
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
        pointKey:'1'
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


    modal=()=>{
        window.location.href="/";
    }
    
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
        <Tabs tabPosition="bottom" tabBarStyle={{display:'none'}} className="detailexam" activeKey={this.state.pointKey} >  
 
        <TabPane tab="1" key="1" >
        <div className="typeexambox">
          <div className="typeexam">
          </div>     
          <Examchoice
            next={this.nextPoint}
            choice={this.state.choice1}
            change={this.change('choice1')}
            quiz="1. เมื่อเกิดเหตุเพลิงไหม้ ควรแจ้งเหตุอย่างไร จึงเรียกว่าเหมาะสมที่สุด"
            onechoice="ก. ตะโกนไฟไหม้"
            twochoice="ข. ตะโกนไฟไหม้ และบอกจุดเกิดเหตุ"
            threechoice="ค. วิ่งหนี ไปเคาะประตูบอกเพื่อน"
            fourchoice="ง. กดกริ่ง ตะโกนไฟไหม้ และตะโกนบอกจุดเกิดเหตุ"
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
            quiz="2. เบอร์โทรใดเป็นเบอร์แจ้งเหตุไฟไหม้"
            onechoice="ก. 191"
            twochoice="ข. 199"
            threechoice="ค. 190"
            fourchoice="ง. 1669"
            a = "false1"
            b = "true"
            c = "false3"
            d = "false2"
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
            quiz="3. สถานที่ใด ไม่ควรหนีเข้าไปมากที่สุดในขณะเกิดเหตุไฟไหม้"
            onechoice="ก. ดาดฟ้า"
            twochoice="ข. ห้องน้ำ"
            threechoice="ค. ลานจอดรถใต้ดิน"
            fourchoice="ง. ลานจอดรถชั้น 1"
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
            quiz="4. สถานที่ใด ควรหนีไปหลบมากที่สุดในขณะเกิดเหตุไฟไหม้"
            onechoice="ก. ดาดฟ้า"
            twochoice="ข. ห้องน้ำ"
            threechoice="ค. ลานจอดรถใต้ดิน"
            fourchoice="ง. ลานจอดรถชั้น 1"
            a = "false1"
            b = "false2"
            c = "false3"
            d = "true"
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
            quiz="5. ขณะที่กำลังหนีไฟทางบันได มีควันเริ่มเข้ามาควรกระทำอย่างใดจึงเหมาะสมที่สุด"
            onechoice="ก. รีบวิ่งลุยควันออกไป"
            twochoice="ข. หมอบต่ำ และคลานออก"
            threechoice="ค. เดินเร็ว และใช้มือปัดควัน"
            fourchoice="ง. หนีควันขึ้นไปชั้นบนทันที"
            a = "false1"
            b = "false2"
            c = "true"
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
            quiz="6. การหนีไฟในขณะลงบันได ควรกระทำอย่างใด"
            onechoice="ก. รีบวิ่งให้ถึงเร็วที่สุด"
            twochoice="ข. หมอบต่ำ ชิดฝั่งราวบันได"
            threechoice="ค. เดินเร็ว ชิดฝั่งราวบันได"
            fourchoice="ง. เดินเร็ว ชิดฝั่งกำแพง"
            a = "false1"
            b = "false2"
            c = "false3"
            d = "true"
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
            quiz="7. สถานการณ์ใด ที่แสดงว่าเราอยู่ใกล้ในจุดที่เกิดเหตุเพลิงไหม้รุนแรงที่สุด"
            onechoice="ก. สถานที่นั้นมีควันออกมาเล็กน้อย"
            twochoice="ข. สถานที่นั้นมีความร้อนสูง จนรู้สึกได้"
            threechoice="ค. สถานที่นั้นมีสิ่งของวางกีดขวาง กระจัดกระจายอยู่"
            fourchoice="ง. สถานที่นั้นมีนักดับเพลิงอยู่"
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
            quiz="8. อุปกรณ์ใดเหมาะแก่การใช้หนีไฟ และสามารถใช้ได้เป็นเวลานานที่สุด"
            onechoice="ก. ขวดน้ำที่มีน้ำอยู่"
            twochoice="ข. ผ้าคลุมตัว"
            threechoice="ค. ถุงพลาสติกขนาดใหญ่ "
            fourchoice="ง. ไฟฉาย"
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
            quiz="9. คนส่วนใหญ่ที่เสียชีวิตในเหตุเพลิงไหม้ มาจากสาเหตุใดมากที่สุด"
            onechoice="ก. ควันพิษ"
            twochoice="ข. ความร้อน"
            threechoice="ค. ไฟคอก"
            fourchoice="ง. ล้ม"
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
            quiz="10. ถ้าควันพิษนอกห้องมีมากจนไม่สามารถออกไปข้างนอกได้ ควรปฏิบัติตัวอย่างไรเป็นอันดับแรกถึงเหมาะสมที่สุด"
            onechoice="ก. เอาผ้ามาปิดจมูกตัวเอง"
            twochoice="ข. เอาผ้ามาปิดช่องทางรอดของควัน เพื่อไม่ให้ควันเข้าห้องได้"
            threechoice="ค. ไปที่กระจกขอความช่วยเหลือ"
            fourchoice="ง. หลบซ่อนในห้องน้ำ"
            a = "false1"
            b = "true"
            c = "false3"
            d = "false2"
            final="final"
        />
        </div>
        </TabPane>  

        <TabPane tab="11" key="11">
        <div className="answer">
          <div className="typeexam font">
          <div className="textanswer">
            <p>คะแนนของคุณ : {this.state.score} คะแนน</p>
            <Button onClick={this.success} >ดูเฉลย</Button> <Button onClick={this.modal} type="primary">ยืนยัน</Button>
            <br/>
            <br/>
            <hr/>
            <br/>
            <h6>คำตอบของคุณ</h6>
            <br/>
            <div className="col-md-10 offset-3">
            <ButtonCorrect choice={this.state.choice1}  choiceName='1'/>
            <ButtonCorrect choice={this.state.choice2}  choiceName='2'/>
            <ButtonCorrect choice={this.state.choice3}  choiceName='3'/>
            <ButtonCorrect choice={this.state.choice4}  choiceName='4'/>
            <ButtonCorrect choice={this.state.choice5}  choiceName='5'/>
            <br/>
            <ButtonCorrect choice={this.state.choice6}  choiceName='6'/>
            <ButtonCorrect choice={this.state.choice7}  choiceName='7'/>
            <ButtonCorrect choice={this.state.choice8}  choiceName='8'/>
            <ButtonCorrect choice={this.state.choice9}  choiceName='9'/>
            <ButtonCorrect choice={this.state.choice10} choiceName='10'/>
            </div>


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

export default exam2;