import React, {} from 'react';
import '../css/login.css';
import { Icon } from 'antd';
import { BrowserRouter as  Link,Redirect } from 'react-router-dom';

class Esum extends React.Component{
  state = { 
    link:false
  };

  close=()=>{this.setState({ link:true })}
  Redirect=()=>{if(this.state.link){ return <Redirect to="/exam" /> }}
  
    render() {
      return (
        <div className="bgg">
        <div className="bgtype">
          <div className="typepeople card5">
          {this.Redirect()}
          <Icon className="close" type="close" onClick={this.close}/>
          </div>              
        </div>
        </div>
      );
    }
  }
  
  export default Esum;