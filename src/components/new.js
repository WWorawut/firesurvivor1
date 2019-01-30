import React, {} from 'react';
import './css/setting.css';
import { Icon } from 'antd';



  


class New extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      clickedSound:true,
      secondsElapsed: 0, 
    };
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
      <a-scene>
          <a-sky src="/office.png" rotation="0 -130 0"></a-sky>
        <a-text font="kelsonsans" value="" width="6" position="-2.5 0.25 -1.5" rotation="0 15 0"></a-text>
      </a-scene>





      {/* <div className="bgmock">
        <div className="bgtypemock">
          <div className="mock">
          <div  className="name">
          <Icon style={{marginLeft:'10px'}} type="user" />
          <p className="name">Bee</p>
          </div>
          <br/>
          <Icon style={{color:'white'}} className="star" type="star" theme="filled" />
          <p className="score">45</p>
          </div>           
        </div>
        </div> */}


    </div>
     
     
    );
  }
}

export default New;
