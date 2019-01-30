import React, {} from 'react';
import '../css/scenenormal.css';
import '../css/button.css';
import gobutton from "../picture2/button/gobutton.png";

import { Link } from 'react-router-dom';
import Preload from 'react-preload';

import Reloade from '../preload';

class stair16 extends React.Component{


   render() {;
  
    
    return (
          
      <div className="bgstair16">

      <div style={{paddingTop:'48vh'}}>
      <Link to = "/stair15"><img className="gobutton" src={gobutton} /></Link>
      </div>
      

      {/* <div className="bgtypeinfo">
        <div className="typeinfo janghad">
        <Icon className="closea" type="close" onClick={this.close}/>
        </div>              
      </div> */}
      </div>
    );
  }
}
  
  export default stair16;