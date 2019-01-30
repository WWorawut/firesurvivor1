import React, {} from 'react';
import '../css/360.css';
import {Entity, Scene} from 'aframe-react';


import gobutton from '../picture2/button/gobutton.png'
import choosebutton from '../picture2/button/choosebutton.png'
import { BrowserRouter as  Link,Redirect } from 'react-router-dom'
import Officeoutside from '../picture2/360/officeoutside.png'
import human from "../picture2/speak/human.png";
import officeouttext from "../picture2/speak/officeouttext.png";


  
class officeoutside extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      clickedSound:true,
      secondsElapsed: 0, 
      link:false,
      class:'fadeInUp',
      outshow2:false
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
    if(this.state.firestair){ return <Redirect to="/Scene6"/> }
    if(this.state.lift){ return <Redirect to="/lift"/> }
    if(this.state.normalstair){ return <Redirect to="/gotoshair"/> }
    if(this.state.toilet){ return <Redirect to="/restroom"/> }
    if(this.state.call){ return <Redirect to="/call"/> }
    if(this.state.alarm){ return <Redirect to="/alarm"/> }
    if(this.state.friend){ return <Redirect to="/friend"/> }
}
  // clickedSound=()=>{
  //   this.setState({
  //     clickedSound:!this.state.clickedSound
  //   })
  // }
  
  // render() {
  //   let sound;
  //   if(this.state.clickedSound===true){
  //     sound='bar'
  //   }else{
  //     sound='bar noAnim'
  //   }

  render() {
    return (
    <div>
      
      {/* <a-scene>
      {this.Redirect()}
        <a-sky src="./gotoshair.png" rotation="0 -130 0"></a-sky>
        <a-text font="kelsonsans" value="" width="6" position="-2.5 0.25 -1.5" rotation="0 15 0"></a-text>
      </a-scene> */}
  
       <div>
       {this.state.outshow2 === false ?
       <div className="center">
       <img className={"human360 animated " +this.state.class} src={human}/>
       <img className={"officeouttext animated " +this.state.class} src={officeouttext}/>
       </div>
       :
       <div className="none">
       <img  src={human}/>
       <img src={officeouttext}/>
       </div>
       }
       </div>
 
       
   




      <Scene>
      {this.Redirect()}
      <Entity events={{click:this.next('firestair') , mouseenter:this.mouseenter('scale1') , mouseleave:this.mouseleave('scale1')}}  primitive='a-image' material={{ src: gobutton}} scale={{x: this.state.scale1, y: this.state.scale1, z:this.state.scale1}} rotation={{x: 0, y: -90 ,z: 0}} position={{x:15, y: 0, z: -3}}/>
        <Entity events={{click:this.next('lift') , mouseenter:this.mouseenter('scale2') , mouseleave:this.mouseleave('scale2')}}  primitive='a-image' material={{ src: gobutton}} scale={{x: this.state.scale2, y: this.state.scale2, z:this.state.scale2}} rotation={{x: 0, y: -90 ,z: 0}} position={{x:25, y: 0, z:4}}/> 
        <Entity events={{click:this.next('normalstair') , mouseenter:this.mouseenter('scale3') , mouseleave:this.mouseleave('scale3')}}  primitive='a-image' material={{ src: gobutton}} scale={{x: this.state.scale3, y: this.state.scale3, z:this.state.scale3}} rotation={{x: 0, y: 270 ,z: 0}} position={{x:10, y: 0, z:8}}/>
        <Entity className="a" events={{click:this.next('toilet') , mouseenter:this.mouseenter('scale4') , mouseleave:this.mouseleave('scale4')}}  primitive='a-image' material={{ src: gobutton}} scale={{x: this.state.scale4, y: this.state.scale4, z:this.state.scale4}} rotation={{x: 0, y: 270 ,z: 0}} position={{x:-15, y: 0, z:-4}}/>
        <Entity events={{click:this.next('alarm') , mouseenter:this.mouseenter('scale5') , mouseleave:this.mouseleave('scale5')}}  primitive='a-image' material={{ src: choosebutton}} scale={{x: this.state.scale5, y: this.state.scale5, z:this.state.scale5}} rotation={{x: 0, y: 150 ,z: 0}} position={{x:4, y: -2, z:8}}/>
        <Entity events={{click:this.next('call') , mouseenter:this.mouseenter('scale6') , mouseleave:this.mouseleave('scale6')}}  primitive='a-image' material={{ src: choosebutton}} scale={{x: this.state.scale6, y: this.state.scale6, z:this.state.scale6}} rotation={{x: 0, y: 150 ,z: 0}} position={{x:3, y: 0, z:8}}/>
        <Entity events={{click:this.next('friend') , mouseenter:this.mouseenter('scale7') , mouseleave:this.mouseleave('scale7')}}  primitive='a-image' material={{ src: choosebutton}} scale={{x: this.state.scale7, y: this.state.scale7, z:this.state.scale7}} rotation={{x: 0, y: 150 ,z: 0}} position={{x:-8, y: -2, z:8}}/>
        <Entity primitive='a-sky' rotation="0 -100 0" src={Officeoutside}/>
      
        <Entity primitive="a-camera">
          <Entity primitive="a-cursor"  
          animation__click={{property: 'scale', startEvents: 'click', from: '0.1 0.1 0.1', to: '1 1 1', dur: 150}}/>

        
        </Entity>
      </Scene>







    </div>
     
     
    );
  }
}

export default officeoutside;
