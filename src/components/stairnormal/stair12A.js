import React, {} from 'react';
import '../css/scenenormal.css';
import '../css/normal.css';
import human from "../picture2/speak/human.png";
import stair12talk from "../picture2/speak/stair12talk.png";
import glass from "../picture2/speak/glass12.png";
import water from "../picture2/speak/water12.png";
import towel from "../picture2/speak/towel12.png";
import bag from "../picture2/speak/bag12.png";
import { Link, Redirect } from 'react-router-dom';

import Popup from '../Scene/popup';
import {savescore} from '../../action'
import {connect} from 'react-redux';
import calltext from "../picture2/speak/calltext.png";
import callcorrect1 from "../picture2/popscore/callcorrect1.png";


class stair12A extends React.Component{
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

   ////////////////////
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
  
  
    Redirect=()=>{if(this.state.link){ return <Redirect to="/" /> }}
    Redirect1=()=>{if(this.state.l){ return <Redirect to="/officeoutside" /> }}
    /////////////////////


   render() {

 
;
    var images = [{human,stair12talk,water,towel,glass,bag}];
 
    
    return (
      <div>
        {this.Redirect()}
      <Popup
      open={this.state.popup}
      image={calltext}
      iconclose={'none'}
      />

    
      
          
      <div className="bgstair12A">
      {this.state.outshow2 === false ?
      <div className="centerhuman">
      <img className={"human animated " +this.state.class} src={human}/>
      <img className={"text animated " +this.state.class} src={stair12talk}/>
      </div>
      :
      <div className="b">
      <div className="boxhelp12">
          <p className="text12 animated fadeInUp">เลือกสิ่งของ 1 อย่าง เพื่อฝ่าควันออกไป</p>
          <div className="animated fadeInUp">
          
          <div className="boxd">
          <img className="box12" onClick={this.openpop({link:'link',score:3,state:'popup'})} src={water} />
          <img className="box12" onClick={this.openpop({link:'link',score:3,state:'popup'})} src={towel} />
          <br/>
          <br/>
          <img className="box12" onClick={this.openpop({link:'link',score:3,state:'popup'})} src={glass} />
          <Link to = "/s12A1"><img className="box12" src={bag} /></Link>
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

const connectscore = state => ({
  score:state.score
  })
  
  export default connect(connectscore)(stair12A);