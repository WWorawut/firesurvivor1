import React, {} from 'react';
import './css/share.css';
import './css/login.css';
import './css/test.css';
import { Button, Icon } from 'antd';
import { BrowserRouter as  Link,Redirect } from 'react-router-dom';

class share extends React.Component{
  state = { 
    link:false
  };




  close=()=>{this.setState({ link:true })}
  Redirect=()=>{if(this.state.link){ return <Redirect to="/exam" /> }}

    render() {
      return (
        <div className="bgg">
        <div className="bgtype" style={{paddingTop:'25vh'}}>


        <div className="boxshare">

 
 




          <div className="textshare">

{/* 
          <div className="fire">
        <div className="fire-left">
          <div className="main-fire"></div>
          <div className="particle-fire"></div>
        </div>
        <div className="fire-main">
          <div className="main-fire"></div>
          <div className="particle-fire"></div>
        </div>
        <div className="fire-right">
          <div className="main-fire"></div>
          <div className="particle-fire"></div>
        </div>
        <div className="fire-bottom">
          <div className="main-fire"></div>
        </div>
      </div> */}



          <p style={{marginTop:'10%'}}><Icon  style={{marginRight:'10px'}} type="star" theme="filled" />คะแนนของคุณ : </p>
          <p><Icon style={{marginRight:'10px'}}  type="clock-circle" />เวลาที่ใช้ในการหนีไฟ : </p>
          
       

          
          
          {/* {this.Redirect()}
          <Button className="out" ghost onClick={this.close}>ออก</Button> */}
          </div>     
        </div> 

        </div>
        </div>
      );
    }
  }
  
  export default share;