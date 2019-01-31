import React, {} from 'react';
import '../css/scenenormal.css';
import '../css/button.css';
import gobutton from "../picture2/button/gobutton.png";

import { Link } from 'react-router-dom';


class stair16 extends React.Component{


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
  
  export default stair16;