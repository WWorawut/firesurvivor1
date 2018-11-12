import React, {} from 'react';
import Loginscreen from './Loginscreen';

class New extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      value:"input name"
    };
  }

  render() {
    return (
      <div>

        <h1>pp</h1>
    <a-scene>
        <a-sky src="/Final01.jpg" rotation="0 -130 0"></a-sky>
       <a-text font="kelsonsans" value="Puy" width="6" position="-2.5 0.25 -1.5" rotation="0 15 0"></a-text>
    </a-scene>
  
    
    
    <Loginscreen
     color='red'
     />  
    <Loginscreen
     color='yellow'
     /> 

      </div>
     
     
    );
  }
}

export default New;
