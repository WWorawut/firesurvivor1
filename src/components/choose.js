import React, {} from 'react';
import './css/choose.css';
import { Icon } from 'antd';
import { BrowserRouter as  Link,Redirect } from 'react-router-dom';
import mousegif from "./picture/mouse.gif";

class choose extends React.Component{
  constructor(props) {
    super(props);
    this.state = { 
    link:false
    }
  }

  close=()=>{this.setState({ link:true })}
  Redirect=()=>{if(this.state.link){ return <Redirect to="/office"/> }}

    render() {
      return (
        <div>
            
          <div className="bgchoose">

            <div className="boxboxchoose">
            <p className="textchoose">เลือกสถานการณ์การเรียนรู้</p>
            <div className="boxx1"> เรียนรู้ตามเนื้อเรื่อง </div>

                    <div className="container">
                            <div className="col-sm">
                            <div className="boxx2">เรียนรู้การแจ้งเหตุ</div>
                            </div>
                            <div className="col-sm">
                            <div className="boxx2">เรียนรู้การระงับเหตุ</div>
                            </div>
                            <div className="col-sm">
                            <div className="boxx2">เรียนรู้การหนีเหตุ</div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col">
                            <div className="boxx3">แบบทดสอบก่อนเรียน</div>
                            </div>
                            <div className="col">
                            <div className="boxx3">GALLERY</div>
                            </div>
                        </div>

            


{/* 
            <div className="sm col-3">
            <div className="boxx2"></div>
            <div className="boxx2"></div>
            <div className="boxx2"></div>
            </div> */}
            </div>





          {/* <div className="container">
            <div className="background-img">
              <div className="box11">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <div className="content">
                  <img className="mousegif" src={mousegif} />
                  {this.Redirect()}
                  <Icon className="closehowto" type="close" onClick={this.close}/>
                </div>
                
              </div>
              </div>
            </div> */}
          </div>

        </div>




  
      );
    }
  }
  
  export default choose;