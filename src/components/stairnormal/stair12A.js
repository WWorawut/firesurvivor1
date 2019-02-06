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
import use4 from "../picture2/popscore/use4.png";
import p4 from "../picture2/popscore/p4.png";


class stair12A extends React.Component{
  state={
    class:'fadeInUp',
    outshow2:false,
    popup:false,
    link:false,
    people:'',
    image:''
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
    this.setState({[data.state]:true ,people:'fadeInUp',image:data.image});
    this.props.dispatch(savescore(data.score));
    setTimeout(this.popupClose(data),4000);
  }
    
  popupClose=data=>()=>{
    this.setState({[data.state]:false})
    setTimeout(this.setlink(data.link),5000);  
  }

  setlink=link=>()=>{this.setState({ [link]:true })}


  Redirect=()=>{if(this.state.link1){ return <Redirect to="/stair17" /> }}
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
        <Popup
      open={this.state.popup}
      image={calltext}
      iconclose={'none'}
      />
        <Popup
      open={this.state.popup}
      image={calltext}
      iconclose={'none'}
      />
        <Popup
      open={this.state.popup4}
      image={use4}
      iconclose={'none'}
      zIndex='6'
      />

    
      
          
      <div className="bgstair12A">
      {this.state.outshow2 === false ?
      <div className="centerhuman">
      <img className={"human animated " +this.state.class} src={human}/>
      <img className={"text animated " +this.state.class} src={stair12talk}/>
      </div>
      :
      <div className="b">
        {this.state.people !== ''?
        <div className='ggg'><img className={"people animated "+this.state.people} src={this.state.image} /></div>:null
        }
        <div className="boxhelp12">
            <p className="text12 animated fadeInUp">เลือกสิ่งของ 1 อย่าง เพื่อฝ่าควันออกไป</p>
            <div className="animated fadeInUp">
            <div className="boxd">
            <img className="box12" onClick={this.openpop({link:'link',score:3,state:'popup'})} src={water} />
            <img className="box12" onClick={this.openpop({link:'link',score:2,state:'popup2'})} src={towel} />
            <br/>
            <br/>
            <img className="box12" onClick={this.openpop({link:'link',score:-1,state:'popup3'})} src={glass} />
            <img className="box12" onClick={this.openpop({link:'link',score:3,state:'popup4',image:p4})} src={bag} />
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