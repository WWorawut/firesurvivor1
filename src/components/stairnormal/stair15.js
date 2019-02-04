import React, {} from 'react';
import '../css/scenenormal.css';
import human from "../picture2/speak/human.png";
import stair15talk from "../picture2/speak/stair15talk.png";
import list151 from "../picture2/speak/list151.png";
import list152 from "../picture2/speak/list152.png";
import list153 from "../picture2/speak/list153.png";
import { Redirect } from 'react-router-dom';

import Popup from '../Scene/popup';

import smoke1 from "../picture2/popscore/smoke1.png";
import smoke2 from "../picture2/popscore/smoke2.png";
import smoke3 from "../picture2/popscore/smoke3.png";

import {savescore} from '../../action'
import {connect} from 'react-redux';



class stair15 extends React.Component{
  state={
    class:'fadeInUp',
    outshow2:false,
    popup:false,
    link:false
  }
    componentDidMount(){ 
      setInterval(this.outshow,5000)
    }

    outshow=()=>{this.setState({class:'fadeOutDown'})
    setInterval(this.outshow2,3000)
    }

    outshow2=()=>{this.setState({outshow2:'true'})}



    openpop=data=>()=>{
      this.setState({[data.state]:true});
      this.props.dispatch(savescore(data.score));
      setTimeout(this.popupClose(data),2000);
    }
      
    popupClose=data=>()=>{
      this.setState({[data.state]:false})
      setTimeout(this.setlink(data.link),1000);  
    }
  
    setlink=link=>()=>{this.setState({ [link]:true })}
  
  
    Redirect=()=>{if(this.state.link){ return <Redirect to="/stair14" /> }}

   render() {

 
;
    var images = [{human,stair15talk,list151,list152,list153}];
 
    
    return (
      <div>
         {this.Redirect()}

          <Popup
          open={this.state.popup}
          image={smoke1}
          iconclose={'none'}
          />
            <Popup
          open={this.state.popup1}
          image={smoke2}
          iconclose={'none'}
          />
            <Popup
          open={this.state.popup2}
          image={smoke3}
          iconclose={'none'}
          />
 
          
      <div className="bgstair15">
      {this.state.outshow2 === false ?
      <div className="centerhuman">
      <img className={"human animated " +this.state.class} src={human}/>
      <img className={"text animated " +this.state.class} src={stair15talk}/>
      </div>
      :
      <div>
      <div className="centerlist">
       <img className={"listwalk animated fadeInUp"} onClick={this.openpop({link:'link',score:-5,state:'popup'})} src={list151}/>
       </div>
       <div className="centerlist2">
       <img className={"listwalk animated fadeInUp"} onClick={this.openpop({link:'link',score:2,state:'popup1'})} src={list152}/>
       </div>
       <div className="centerlist2">
      <img className={"listwalk animated fadeInUp"} onClick={this.openpop({link:'link',score:7,state:'popup2'})} src={list153}/>
       </div>
       </div>
      }
    

     
      


      </div>
      </div>
  

    );
  }
}
const connectscore = state => ({
  score:state.score
  })  

  export default connect(connectscore)(stair15);