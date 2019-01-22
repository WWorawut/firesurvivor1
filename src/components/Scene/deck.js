import React, {} from 'react';
import '../css/Info.css';
import '../css/button.css';

import { Icon, Modal, Button } from 'antd';
import Popup from './popup';
import Iconout from '@material-ui/icons/ChevronLeft';
import choosebutton from "../picture2/button/choosebutton.png";
import popdeck from "../picture2/deck/warningdeck.png";
import { BrowserRouter as  Link,Redirect } from 'react-router-dom'

class deck extends React.Component{

  state={
    popup:false,
    link:false,
  }

  openpop=()=>{
    this.setState({popup:true})
  }
  popupClose=()=>{
    this.setState({popup:false})
  }
  
  out=()=>{this.setState({ link:true })}
  Redirect=()=>{if(this.state.link){ return <Redirect to="/" /> }}
   
   render() {
    return (
      <div>
      <Popup
      open={this.state.popup}
      image={popdeck}
      close={this.popupClose}
      />

      <div className="bgdeck">
      <div className="boxchoose">
      <img className="choosebutton" src={choosebutton} onClick={this.openpop} />
      </div>
      </div>
      {this.Redirect()}
      <Button className="out" ghost onClick={this.out}> <Iconout/>ออก</Button>
      </div>
    );
  }
}
  
  export default deck;