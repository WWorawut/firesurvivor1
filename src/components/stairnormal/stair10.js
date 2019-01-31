import React, {} from 'react';
import '../css/scenenormal.css';
import human from "../picture2/speak/human.png";
import stair10talk from "../picture2/speak/stair10talk.png";
import glass from "../picture2/speak/glass12.png";
import water from "../picture2/speak/water12.png";
import towel from "../picture2/speak/towel12.png";
import bag from "../picture2/speak/bag12.png";
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
    var images = [{human,stair10talk,water,towel,glass,bag}];
 
    
    return (
 
          
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
          <Link to = "/"><img className="box12" src={water} /></Link>
          <Link to = "/"><img className="box12" src={towel} /></Link>
          <br/>
          <br/>
          <Link to = "/"><img className="box12" src={glass} /></Link>
          <Link to = "/"><img className="box12" src={bag} /></Link>
          </div>
          </div>
      </div>
      </div>
      }
    

     
      


      </div>

    );
  }
}
  
  export default stair15;