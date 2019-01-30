import React, {} from 'react';
import '../css/360.css';
import {Entity, Scene} from 'aframe-react';


import gobutton from '../picture2/button/gobutton.png'
import choosebutton from '../picture2/button/choosebutton.png'
import { BrowserRouter as  Link,Redirect } from 'react-router-dom'
import gotoshair from '../picture2/360/gotoshair.png'



  
class officeoutside extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      clickedSound:true,
      secondsElapsed: 0, 
      link:false
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
    if(this.state.stair){ return <Redirect to="/stair19"/> }
}



  render() {
    return (
    <div>
      
 

      <Scene>
      {this.Redirect()}
      <Entity events={{click:this.next('stair') , mouseenter:this.mouseenter('scale1') , mouseleave:this.mouseleave('scale1')}}  primitive='a-image' material={{ src: gobutton}} scale={{x: this.state.scale1, y: this.state.scale1, z:this.state.scale1}} rotation={{x: 0, y: 0 ,z: 0}} position={{x:3, y: 0, z: -12}}/>
        <Entity primitive='a-sky' rotation="0 -100 0" src={gotoshair}/>
      
        <Entity primitive="a-camera">
          <Entity primitive="a-cursor"  
          animation__click={{property: 'scale', startEvents: 'click', from: '0.08 0.08 0.08', to: '0.3 0.3 0.3', dur: 150}}/>

        
        </Entity>
      </Scene>







    </div>
     
     
    );
  }
}

export default officeoutside;
