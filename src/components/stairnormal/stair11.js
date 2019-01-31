import React, {} from 'react';
import '../css/scenenormal.css';
import '../css/button.css';
import gobutton from "../picture2/button/gobutton.png";

import { Link } from 'react-router-dom';


class stair11 extends React.Component{


   render() {;
  
    
    return (
          
      <div className="bgstair11">

      <div style={{paddingTop:'48vh'}}>
      <Link to = "/stair10"><img className="gobutton animated fadeInUp" src={gobutton} /></Link>
      </div>
      

      </div>
    );
  }
}
  
  export default stair11;