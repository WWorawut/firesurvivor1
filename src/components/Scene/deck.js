import React, {} from 'react';
import '../css/Info.css';
import '../css/button.css';

import { Button } from 'antd';
import Popup from './popup';
import Iconout from '@material-ui/icons/ChevronLeft';
import choosebutton from "../picture2/button/choosebutton.png";
import popdeck from "../picture2/deck/warningdeck.png";
import { Link,Redirect } from 'react-router-dom'

import {savescore} from '../../action'
import {connect} from 'react-redux';

class deck extends React.Component{

  state={
    popup:false,
    link:false,
  }

  openpop=data=>()=>{
    this.setState({popup:true})
    this.props.dispatch(savescore(data.score));
  }
  popupClose=()=>{
    this.setState({popup:false})
  }
  
  setlink=link=>()=>{this.setState({ [link]:true })}
  Redirect=()=>{if(this.state.link){ return <Redirect to="/stair16" /> }} 
   
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
      <img className="choosebutton" src={choosebutton} onClick={this.openpop({link:'link',score:-2,state:'popup'})} />
      </div>
      </div>
      {this.Redirect()}
      <Link to = "/officeoutside"><Button className="out" ghost onClick={this.out}> <Iconout/>ออก</Button></Link>
      </div>
    );
  }
}
const connectscore = state => ({
  score:state.score
  })
  
  export default connect(connectscore)(deck);