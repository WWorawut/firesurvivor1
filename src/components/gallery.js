import React, {} from 'react';
import './css/gallery.css';
import { Icon } from 'antd';
import logo from "./picture/logo.png";
import { BrowserRouter as  Link,Redirect } from 'react-router-dom';


class gallery extends React.Component{
  constructor(props) {
    super(props);
    this.state = { 
    link:false
    }
  }

  preexam=()=>{this.setState({ link:true })}
  full=()=>{this.setState({ link2:true })}
  Redirect=()=>{
    if(this.state.link){ return <Redirect to="/preexam"/> }
    if(this.state.link2){ return <Redirect to="/office"/> }
  }
  

    render() {
      return (
        <div>
            
          <div className="bggallery">

          <div className="header">Infographic</div>
          
          <div className="header">Infographic</div>


    

            


            </div>

          </div>
  
      );
    }
  }
  
  export default gallery;