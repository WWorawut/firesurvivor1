import React, {} from 'react';
import '../css/scenenormal.css';
import '../css/button.css';
import gobutton from "../picture2/button/gobutton.png";

import { Link, Redirect } from 'react-router-dom';
import {savescore} from '../../action'
import {connect} from 'react-redux';
import Popup from '../Scene/popup';


class fire3 extends React.Component{
    state={
        popup:false,
        link:false
      }


   render() {;
  
    
    return (
          
      <div className="bgstair14">

      <div style={{paddingTop:'48vh'}}>
      <Link to = "/stair12A"><img className="gobutton animated fadeInUp" src={gobutton} /></Link>
      </div>
      

      </div>
    );
  }
}
const connectscore = state => ({
    score:state.score
    })
    
  
  export default connect(connectscore)(fire3);