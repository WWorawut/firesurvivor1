import React, {} from 'react';
import Examchoice from './Examchoice';
import logoexam from "../picture/logoexam.svg";
import { BackTop, notification, Modal } from 'antd';

import '../css/exam.css';
import 'antd/dist/antd.css'

class Exam extends React.Component {
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

    };
  }

    change=name=>(e)=>{
        this.setState({
            [name]: e.target.value
        })
    }

    submit=(e)=>{
        e.preventDefault();
        let score = 0;
        let answered=0;
        if(this.state.choice1==="true"){
            score++;
        }
        if(this.state.choice1==="") {
            this.setState({cardColor1:"#EC8B8B"})
        }
        else{
            answered++;
            this.setState({cardColor1:"normal"})
        }


        // ข้อ 2
        if(this.state.choice2==="true"){
            score++;
        }        
        if(this.state.choice2==="") {
            this.setState({cardColor2:"#EC8B8B"})
        }
        else{
            answered++;
            this.setState({cardColor2:"normal"})
        }



        //ข้อ 3
        if(this.state.choice3==="true"){
            score++;
        }
        if(this.state.choice3==="") {
            this.setState({cardColor3:"#EC8B8B"})
        }
        else{ 
            answered++;
            this.setState({cardColor3:"normal"})
        }



        if(this.state.choice4==="true"){
            score++;
        }
        if(this.state.choice4==="") {
            this.setState({cardColor4:"#EC8B8B"})
        }
        else{   
            answered++;
            this.setState({cardColor4:"normal"})
        }



        if(this.state.choice5==="true"){
            score++;
        }
        if(this.state.choice5==="") {
            this.setState({cardColor5:"#EC8B8B"})
        }
        else{  
            answered++; 
            this.setState({cardColor5:"normal"})
        }



        if(this.state.choice6==="true"){
            score++;
        }
        if(this.state.choice6==="") {
            this.setState({cardColor6:"#EC8B8B"})
        }
        else{  
            answered++;
            this.setState({cardColor6:"normal"})
        }




        if(this.state.choice7==="true"){
            score++;
        }
        if(this.state.choice7==="") {
            this.setState({cardColor7:"#EC8B8B"})
        }
        else{           
            answered++;
            this.setState({cardColor7:"normal"})
        }




        if(this.state.choice8==="true"){
            score++;
        }
        if(this.state.choice8==="") {
            this.setState({cardColor8:"#EC8B8B"})
        }
        else{         
            answered++;
            this.setState({cardColor8:"normal"})
        }



        if(this.state.choice9==="true"){
            score++;
        }
        if(this.state.choice9==="") {
            this.setState({cardColor9:"#EC8B8B"})
        }
        else{ 
            answered++; 
            this.setState({cardColor9:"normal"})
        }



        if(this.state.choice10==="true"){
            score++;
        }
        if(this.state.choice10==="") {
            this.setState({cardColor10:"#EC8B8B"})
        }
        else{
            answered++; 
            this.setState({cardColor10:"normal"})
        }

        if (answered===10){
            const modal = Modal.success({
                title: <div className="fonteng">คะแนนของคุณ</div>,
                content:<div className="fonteng">{score} คะแนน</div>,
                onOk:this.modal
              });
        }   
        else{
            this.openNotificationWithIcon();
            answered=0;
        }  
    }


    modal=()=>{
        window.location.href="/";
    }
     openNotificationWithIcon = () => {
        notification[('warning')]({
          message:<p style={{color:'rgb(46, 46, 46)', fontFamily:'Kanit', fontWeight:'thin' }}>ยังตอบคำถามไม่ครบครับ</p> ,
          style:{
              paddingBottom:0,
              visible: false
          }
        });
      };

      

  render() {
    notification.config({
        placement: 'topRight',
        duration: 2,

      });

    return (
    <div className="font">
        <div className="coverexam">
        <div className="coverlogo">
        <img src={logoexam}/>
        </div>
        </div>


        <form onSubmit={this.submit}>
        <div className="accordion" id="accordionExample">
        <Examchoice
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
            id="one"
            cardColor={this.state.cardColor1}
        />

        <Examchoice
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
            id="two"
            cardColor={this.state.cardColor2}
        />

        <Examchoice
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
            id="three"
            cardColor={this.state.cardColor3}
        />

        <Examchoice
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
            id="four"
            cardColor={this.state.cardColor4}
        />

        <Examchoice
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
            id="five"
            cardColor={this.state.cardColor5}
        />

        <Examchoice
            choice={this.state.choice6}
            change={this.change('choice6')}
            quiz="6. การหนีไฟในขณะลงบันได ควรกระทำอย่างใด"
            onechoice="ก. รีบวิ่งให้ถึงเร็วที่สุด"
            twochoice="ข. เดินเร็ว ชิดฝั่งราวบันได"
            threechoice="ค. เดินเร็ว ชิดฝั่งกำแพง หน้ามือสัมผัสกำแพง"
            fourchoice="ง. เดินเร็ว ชิดฝั่งกำแพง หลังมือสัมผัสกำแพง"
            a = "false1"
            b = "false2"
            c = "false3"
            d = "true"
            id="six"
            cardColor={this.state.cardColor6}
        />

        <Examchoice
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
            id="seven"
            cardColor={this.state.cardColor7}
        />

        <Examchoice
            choice={this.state.choice8}
            change={this.change('choice8')}
            quiz="8. อุปกรณ์ใดเหมาะแก่การใช้หนีไฟ และสามารถใช้ได้เป็นเวลานานที่สุด"
            onechoice="ก. ขวดน้ำที่มีน้ำอยู่"
            twochoice="ข. ผ้าคุมตัว"
            threechoice="ค. ถุงพลาสติกขนาดใหญ่"
            fourchoice="ง. ไฟฉาย"
            a = "false1"
            b = "false2"
            c = "false3"
            d = "true"
            id="eight"
            cardColor={this.state.cardColor8}
        />

        <Examchoice
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
            id="nine"
            cardColor={this.state.cardColor9}
        />

        <Examchoice
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
            id="ten"
            cardColor={this.state.cardColor10}
        />
            </div>

            <div className="text-center">
            <button className="btn btn-outline-info fonteng" type="submit">ส่งคำตอบ</button>
            </div>
    
      </form>
      
        <div>
            <BackTop>
            <div className="ant-back-top-inner">UP</div>
            </BackTop>
        </div>
      
      </div>

    );
  }
}

export default Exam;