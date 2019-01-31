import React, {} from 'react';
import '../css/scenenormal.css';
import human from "../picture2/speak/human.png";
import stair15talk from "../picture2/speak/stair15talk.png";
import list151 from "../picture2/speak/list151.png";
import list152 from "../picture2/speak/list152.png";
import list153 from "../picture2/speak/list153.png";
import { Link } from 'react-router-dom';


class stair15 extends React.Component{
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
    var images = [{human,stair15talk,list151,list152,list153}];
 
    
    return (
 
          
      <div className="bgstair15">
      {this.state.outshow2 === false ?
      <div className="centerhuman">
      <img className={"human animated " +this.state.class} src={human}/>
      <img className={"text animated " +this.state.class} src={stair15talk}/>
      </div>
      :
      <div>
      <div className="centerlist">
       <Link to = "/stair14"><img className={"listwalk animated fadeInUp"} src={list151}/></Link>
       </div>
       <div className="centerlist2">
       <Link to = "/stair14"><img className={"listwalk animated fadeInUp"} src={list152}/></Link>
       </div>
       <div className="centerlist2">
       <Link to = "/stair14"><img className={"listwalk animated fadeInUp"} src={list153}/></Link>
       </div>
       </div>
      }
    

     
      


      </div>

    );
  }
}
  
  export default stair15;