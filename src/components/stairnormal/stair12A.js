import React, {} from 'react';
import '../css/scenenormal.css';
import '../css/normal.css';
import human from "../picture2/speak/human.png";
import stair12talk from "../picture2/speak/stair12talk.png";
import glass from "../picture2/speak/glass12.png";
import water from "../picture2/speak/water12.png";
import towel from "../picture2/speak/towel12.png";
import bag from "../picture2/speak/bag122.png";
import { Link, Redirect } from 'react-router-dom';

import Popup from '../Scene/popup';
import {savescore} from '../../action'
import {connect} from 'react-redux';

import use1 from "../picture2/popscore/use1.png";
import use2 from "../picture2/popscore/use2.png";
import use3 from "../picture2/popscore/use3.png";
import use4 from "../picture2/popscore/use4.png";

import p1 from "../picture2/popscore/p1.png";
import p2 from "../picture2/popscore/p2.png";
import p3 from "../picture2/popscore/p3.png";
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
    setTimeout(this.popupClose(data),3000);
  }
    
  popupClose=data=>()=>{
    this.setState({[data.state]:false})
    setTimeout(this.setlink(data.link),1000);  
  }

  setlink=link=>()=>{this.setState({ [link]:true })}


  Redirect=()=>{if(this.state.link){ return <Redirect to="/smoke" /> }}
    /////////////////////


   render() {

 
;
    var images = [{human,stair12talk,water,towel,glass,bag}];
 
    
    return (
      <div>
        {this.Redirect()}
      <Popup
      open={this.state.popup}
      image={use1}
      iconclose={'none'}
      zIndex='6'
      />
        <Popup
      open={this.state.popup2}
      image={use2}
      iconclose={'none'}
      zIndex='6'
      />
        <Popup
      open={this.state.popup3}
      image={use3}
      iconclose={'none'}
      zIndex='6'
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
            <img className="box12" onClick={this.openpop({link:'link',score:3,state:'popup',image:p1})} src={water} />
            <img className="box12" onClick={this.openpop({link:'link',score:2,state:'popup2',image:p2})} src={towel} />
            <br/>
            <br/>
            <img className="box12" onClick={this.openpop({link:'link',score:-1,state:'popup3',image:p3})} src={glass} />
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