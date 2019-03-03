import React, {} from 'react';
import './css/login.css';
import './css/test.css';
import { Icon } from 'antd';
import { BrowserRouter as  Link,Redirect } from 'react-router-dom';
import mousegif from "./picture/mouse.gif";

class Howplay extends React.Component{
  constructor(props) {
    super(props);
    this.state = { 
    link:false
    }
  }

  close=()=>{this.setState({ link:true })}
  Redirect=()=>{if(this.state.link){ return <Redirect to="/choose"/> }}

    render() {
      return (
        <div>
          <section>
          <div className="bghowto">
          <div className="container">
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
            </div>
          </div>
        </section>
        </div>




  
      );
    }
  }
  
  export default Howplay;