import React, {} from 'react';
import '../css/scenenormal.css';
import listwalk1 from "../picture2/stairnormal/listwalk1.png";
import listwalk2 from "../picture2/stairnormal/listwalk2.png";
import listwalk3 from "../picture2/stairnormal/listwalk3.png";
import { Link } from 'react-router-dom';
import Preload from 'react-preload';

import Reloade from '../preload';

class stair17 extends React.Component{


   render() {;
  
    
    return (
          
      <div className="bgstair17">
   
      <div className="centerlist">
       <Link to = "/walk"><img className={"listwalk animated fadeInUp"} src={listwalk1}/></Link>
       </div>
       <div className="centerlist2">
       <Link to = "/walk"><img className={"listwalk animated fadeInUp"} src={listwalk2}/></Link>
       </div>
       <div className="centerlist2">
       <Link to = "/walk"><img className={"listwalk animated fadeInUp"} src={listwalk3}/></Link>
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
  
  export default stair17;