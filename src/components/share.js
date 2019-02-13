import React, {} from 'react';
import './css/share.css';
import './css/test.css';
import { Button, Icon } from 'antd';
import { Link,Redirect } from 'react-router-dom';
import {connect} from 'react-redux';


const formattedSeconds = (sec) =>
  Math.floor(sec / 60) +
    ':' +
  ('0' + sec % 60).slice(-2);

class sharepage extends React.Component{
  state = { 
    link:false
  };

  
  close=()=>{this.setState({ link:true })}
  Redirect=()=>{if(this.state.link){ return <Redirect to="/exam" /> }}

    render() {
      return (
        <div className="bgescape">
        <div className="bgtype" style={{paddingTop:'25vh'}}>


        <div className="boxshare" >

 
 




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



          <p style={{marginTop:'10%'}}><Icon  style={{marginRight:'10px'}} type="star" theme="filled" />คะแนนของคุณ : {this.props.score}</p>
          <p><Icon style={{marginRight:'10px'}}  type="clock-circle" />เวลาที่ใช้ในการหนีไฟ : {this.props.time}</p>
          
          <div style={{textAlign:'center'}}>
          <Link to ="/typeA" ><Button  type="primary">ถัดไป</Button></Link>
          </div>
{/*                 
            <div class="social">
              <div class="social__item">
                <span class="fa fa-facebook" data-count="..." data-social="fb"></span>
              </div>
              <div class="social__item">
                <span class="fa fa-twitter" data-count="..." data-social="tw"></span>
              </div>
              <div class="social__item">
                <span class="fa fa-pinterest" data-count="..." data-social="pt"></span>
              </div>
            </div> */}
        
          
          
          {/* {this.Redirect()}
          <Button className="out" ghost onClick={this.close}>ออก</Button> */}
          </div>     
        </div> 

        </div>
        </div>
      );
    }
  }

  const connectscore = state => ({
    score:state.score,
    time:state.time,
    })  

  export default connect(connectscore)(sharepage);