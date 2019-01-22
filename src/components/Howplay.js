import React, {} from 'react';
import './css/login.css';
import { Icon } from 'antd';
import { BrowserRouter as  Link,Redirect } from 'react-router-dom';

class Howplay extends React.Component{
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
        <div className="bgg">
        <div className="bgtype">
          <div className="typepeople">
          {this.Redirect()}
          <Icon className="close" type="close" onClick={this.close}/>
          </div>              
        </div>
        </div>
      );
    }
  }
  
  export default Howplay;