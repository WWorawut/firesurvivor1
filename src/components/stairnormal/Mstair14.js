import React, {} from 'react';
import '../css/scenenormal.css';
import '../css/button.css';
import gobutton from "../picture2/button/gobutton.png";

import { Link } from 'react-router-dom';


class Mstair14 extends React.Component{


   render() {;
  
    
    return (
          
      <div className="bgstair14">

      <div style={{paddingTop:'48vh'}}>
      <Link to = "/Mstair12A"><img className="gobutton animated fadeInUp" src={gobutton} /></Link>
      </div>
      

      </div>
    );
  }
}
  
  export default Mstair14;