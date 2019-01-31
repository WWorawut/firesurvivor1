import React, {} from 'react';
import '../css/scenenormal.css';
import human from "../picture2/speak/human.png";
import endstairtalk from "../picture2/speak/endstairtalk.png";

import { Link } from 'react-router-dom';


class endstair extends React.Component{
  state={
    class:'fadeInUp',
    outshow2:false
  }
    componentDidMount(){ 
      setInterval(this.outshow,5000)
    }

    outshow=()=>{this.setState({class:'fadeOutDown'})
    setInterval(this.outshow2,3000)
    }

    outshow2=()=>{this.setState({outshow2:'true'})}

   render() {

 
;
   
 
    
    return (
 
          
      <div className="bgendstair">
      
      <div className="centerhuman">
      <img className={"human animated " +this.state.class} src={human}/>
      <img className={"text animated " +this.state.class} src={endstairtalk }/>
      </div>
     
    

     
      


      </div>

    );
  }
}
  
  export default endstair;