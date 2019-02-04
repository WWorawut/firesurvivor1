import React, {} from 'react';
import '../css/360.css';
import {Entity, Scene} from 'aframe-react';


import gobutton from '../picture2/button/gobutton.png'
import choosebutton from '../picture2/button/choosebutton.png'
import { BrowserRouter as  Link,Redirect } from 'react-router-dom'
import fireoffice from '../picture2/360/fireoffice.png'
import human from "../picture2/speak/human.png";
import firetext from "../picture2/speak/firetext.png";

import Popup from '../Scene/popup';

import bu from "../picture2/popscore/bu.png";

import {savescore} from '../../action'
import {connect} from 'react-redux';


  
class fire extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      clickedSound:true,
      secondsElapsed: 0, 
      link:false,
      class:'fadeInUp',
      outshow2:false,
      popup:false
    };
  }



    componentDidMount(){ 
      setInterval(this.outshow,5000)
    }

    outshow=()=>{this.setState({class:'fadeOutDown'})
    setInterval(this.outshow2,3000)
    }

    outshow2=()=>{this.setState({outshow2:'true'})}

  mouseenter=name=>()=>{this.setState({[name]:2})}
  mouseleave=name=>()=>{this.setState({[name]:1.5})}

  next=name=>()=>{ this.setState({ [name]:true })}
  Redirect=()=>{
    if(this.state.firetung){ return <Redirect to="/firetung"/> }
    if(this.state.out){ return <Redirect to="/officeoutside"/> }
}

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

  Redirect1=()=>{if(this.state.link){ return <Redirect to="/firetung" /> }}


  render() {;
    return (
    <div>
       {this.Redirect()}

          <Popup
          open={this.state.popup}
          image={bu}
          iconclose={'none'}
          />
      
   
  
       <div>
       {this.state.outshow2 === false ?
       <div className="center">
       <img className={"human360 animated " +this.state.class} src={human}/>
       <img className={"firetext animated " +this.state.class} src={firetext}/>
       </div>
       :
       <div className="none">
       <img  src={human}/>
       <img src={firetext}/>
       </div>
       }
       </div>
 
       
   




      <Scene>
      {this.Redirect()}
        <Entity onClick={this.openpop({link:'link',score:-5,state:'popup'})} events={{mouseenter:this.mouseenter('scale1') , mouseleave:this.mouseleave('scale1')}}  primitive='a-image' material={{ src: choosebutton}} scale={{x: this.state.scale1, y: this.state.scale1, z:this.state.scale1}} rotation={{x: 0, y: -90 ,z: 0}} position={{x:15, y: -1, z: -3}}/>
        <Entity events={{click:this.next('out') , mouseenter:this.mouseenter('scale2') , mouseleave:this.mouseleave('scale2')}}  primitive='a-image' material={{ src: gobutton}} scale={{x: this.state.scale2, y: this.state.scale2, z:this.state.scale2}} rotation={{x: 0, y: -90 ,z: 0}} position={{x:20, y: 0, z:3}}/> 
        
       
        <Entity primitive='a-sky' rotation="0 -100 0" src={fireoffice}/>
      
        <Entity primitive="a-camera">
          <Entity primitive="a-cursor"  
          animation__click={{property: 'scale', startEvents: 'click', from: '0.1 0.1 0.1', to: '1 1 1', dur: 150}}/>

        
        </Entity>
      </Scene>







    </div>
     
     
    );
  }
}
const connectscore = state => ({
  score:state.score
  })

export default connect(connectscore)(fire);
