import React, {} from 'react';
import '../css/scenenormal.css';
import listwalk1 from "../picture2/stairnormal/listwalk1.png";
import listwalk2 from "../picture2/stairnormal/listwalk2.png";
import listwalk3 from "../picture2/stairnormal/listwalk3.png";
import { Redirect } from 'react-router-dom';
import Preload from 'react-preload';

import Reloade from '../preload';
import Popup from '../Scene/popup';

import walk11 from "../picture2/popscore/walk11.png";
import walk12 from "../picture2/popscore/walk12.png";
import walk13 from "../picture2/popscore/walk13.png";

import {savescore} from '../../action'
import {connect} from 'react-redux';


class stair17 extends React.Component{
  state={
    popup:false,
    link:false
  }

  openpop=data=>()=>{
    this.setState({[data.state]:true});
    this.props.dispatch(savescore(data.score));
    setTimeout(this.popupClose(data),2000);
  }
    
  popupClose=data=>()=>{
    this.setState({[data.state]:false})
    setTimeout(this.setlink(data.link),1000);  
  }

  setlink=link=>()=>{this.setState({ [link]:true })}

  Redirect=()=>{if(this.state.link){ return <Redirect to="/stair16" /> }}




   render() {;
  
    
    return (
      <div>    
        {this.Redirect()}

      <Popup
      open={this.state.popup}
      image={walk11}
      iconclose={'none'}
      />
        <Popup
      open={this.state.popup1}
      image={walk12}
      iconclose={'none'}
      />
        <Popup
      open={this.state.popup2}
      image={walk13}
      iconclose={'none'}
      />
          
      <div className="bgstair17">
    
      <div className="centerlist">
       <img className={"listwalk animated fadeInUp"} onClick={this.openpop({link:'link',score:-3,state:'popup'})} src={listwalk1}/>
       </div>
       <div className="centerlist2">
      <img className={"listwalk animated fadeInUp"} onClick={this.openpop({link:'link',score:5,state:'popup1'})} src={listwalk2}/>
       </div>
       <div className="centerlist2">
      <img className={"listwalk animated fadeInUp"} onClick={this.openpop({link:'link',score:2,state:'popup2'})} src={listwalk3}/>
       </div>
      
 
      </div>
      </div>
    );
  }
}
const connectscore = state => ({
  score:state.score
  })
  
  export default connect(connectscore)(stair17);