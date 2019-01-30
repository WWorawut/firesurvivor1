import React, {} from 'react';
import '../css/scenenormal.css';
import listrun1 from "../picture2/stairnormal/listrun1.png";
import listrun2 from "../picture2/stairnormal/listrun2.png";
import listrun3 from "../picture2/stairnormal/listrun3.png";
import { Link } from 'react-router-dom';


class stair17run extends React.Component{


   render() {;
  
    
    return (
          
      <div className="bgstair17">
   
      <div className="centerlist">
       <Link to = "/walk"><img className={"listwalk animated fadeInUp"} src={listrun1}/></Link>
       </div>
       <div className="centerlist2">
       <Link to = "/walk"><img className={"listwalk animated fadeInUp"} src={listrun2}/></Link>
       </div>
       <div className="centerlist2">
       <Link to = "/walk"><img className={"listwalk animated fadeInUp"} src={listrun3}/></Link>
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
  
  export default stair17run;