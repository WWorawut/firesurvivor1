import React, {} from 'react';
import Examchoice from './Examchoice';
import logoexam from "../picture/logoexam.svg";
import { BackTop, notification, Modal, Button } from 'antd';

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
        <div className="text-center">
        <Button>เริ่มทำแบบทดสอบ</Button>
        </div>
        </div>
        </div>
      
      </div>

    );
  }
}

export default Exam;