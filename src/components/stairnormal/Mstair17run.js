import React, {} from 'react';
import '../css/scenenormal.css';
import listrun1 from "../picture2/stairnormal/listrun1.png";
import listrun2 from "../picture2/stairnormal/listrun2.png";
import listrun3 from "../picture2/stairnormal/listrun3.png";
import { Redirect } from 'react-router-dom';

import Popup from '../Scene/popup';

import run11 from "../picture2/popscore/Mrun11.png";
import run12 from "../picture2/popscore/Mrun12.png";
import run13 from "../picture2/popscore/Mrun13.png";

import {savescore} from '../../action'
import {connect} from 'react-redux';


class Mstair17run extends React.Component{
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


  Redirect=()=>{if(this.state.link){ return <Redirect to="/Mstair16" /> }}


   render() {;

    return (
      <div>
         {this.Redirect()}

        <Popup
        open={this.state.popup}
        image={run11}
        iconclose={'none'}
        />
          <Popup
        open={this.state.popup1}
        image={run12}
        iconclose={'none'}
        />
          <Popup
        open={this.state.popup2}
        image={run13}
        iconclose={'none'}
        />
          
      <div className="bgstair17">
   
      <div className="centerlist">
       <img className={"list animated fadeInUp"} onClick={this.openpop({link:'link',state:'popup'})} src={listrun1}/>
       </div>
       <div className="centerlist2">
      <img className={"list animated fadeInUp"} onClick={this.openpop({link:'link',state:'popup1'})} src={listrun2}/>
       </div>
       <div className="centerlist2">
       <img className={"list animated fadeInUp"} onClick={this.openpop({link:'link',state:'popup2'})} src={listrun3}/>
       </div>
      
 
      

      </div>
      </div>
    );
  }
}
const connectscore = state => ({
 
  })
  
  
  export default connect(connectscore)(Mstair17run);