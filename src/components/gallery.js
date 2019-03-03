import React, {} from 'react';
import './css/gallery.css';
import { Icon, Button } from 'antd';
import logo from "./picture/logo.png";

import './css/button.css';
import Iconout from '@material-ui/icons/ChevronLeft';
import { Link,Redirect } from 'react-router-dom';


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
          <Link to = "/choose"><Button className="out" ghost style={{left:'30px'}}> <Iconout/>กลับ</Button></Link>

          <div>
          <Button className="t sizet">สาเหตุของไฟไหม้</Button>
          </div>


    

            


            </div>

          </div>
  
      );
    }
  }
  
  export default gallery;