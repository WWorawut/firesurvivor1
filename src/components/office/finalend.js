import React, {} from 'react';
import '../css/normal.css';
import '../css/scenenormal.css';
import { BrowserRouter as Link, Redirect } from 'react-router-dom';
import { Player, ControlBar } from 'video-react';
import intro from "../video/file/finalend.mp4";

import {connect} from 'react-redux';


class finalend extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
        };
      }
      componentDidMount() {
        this.refs.player.subscribeToStateChange(this.handleStateChange.bind(this));
      }
    
      handleStateChange(state) {
        const { player } = this.refs.player.getState();
        const ended = player.ended;
        if (ended == true){
          this.setState({ended:true}) 
     }
      }
    
  

   render() {
    if(this.state.ended==true){
      return <Redirect to="/escape" /> 
     }
    return (
      <div>
        {/* {this.Redirect1()} */}


      {/* <img className="bgfire11" src={mousegif} />  */}

      <div className="v">

            <Player 
            ref="player"
            autoPlay
            playsInline={true}
            className="bgv"
            >
            <source src={intro} />
            <ControlBar autoHide={false} disableDefaultControls></ControlBar>
            </Player> 


      <div className="bgtext">




      </div>

      </div>
    </div>
    );
  }
}
const connectscore = state => ({
  score:state.score,
  sound:state.sound
  })

  export default connect(connectscore)(finalend);









