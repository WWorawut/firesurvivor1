import React, {} from 'react';
import '../css/scenenormal.css';
import human from "../picture2/speak/human.png";
import stair10talk from "../picture2/speak/stair10talk.png";
import hand1 from "../picture2/speak/hand1.png";
import hand2 from "../picture2/speak/hand2.png";
import hand3 from "../picture2/speak/hand3.png";
import { Link } from 'react-router-dom';



class stair10 extends React.Component{
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




   render() {;
    var images = [{human,stair10talk,hand1,hand2,hand3}];
 
    
    return (

      <div>
 
     
 
          
      <div className="bgstair10">
      {this.state.outshow2 === false ?
      <div className="centerhuman">
      <img className={"human animated " +this.state.class} src={human}/>
      <img className={"text animated " +this.state.class} src={stair10talk}/>
      </div>
      :
      <div className="b">
      <div className="boxhelp12">
          <p className="text12 animated fadeInUp">เลือกวิธีการสัมผัสผนัง เพื่อสังเกตุความร้อน</p>
          <div className="animated fadeInUp">
          <div className="boxd">
          <img className="box12" src={hand1}   />
          <Link to = "/"><img className="box12" src={hand2} /></Link>
          <Link to = "/"><img className="box12" src={hand3} /></Link>
          </div>
          </div>
      </div>
      </div>
      }
      </div>    

      </div>

    );
  }
}
  
  export default stair10;