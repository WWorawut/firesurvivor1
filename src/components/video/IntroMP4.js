import React from 'react';
import { Player } from 'video-react';
import '../css/Info.css';
import intro from "../video/file/fire.mp4";
import { BrowserRouter as  Link,Redirect } from 'react-router-dom';

class IntroMP4 extends React.Component{
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
    if(ended==true){
      window.location.href="/howtoplay";
    }
  }


    render() {
      return (
        <div>
            <div className="video">
            <Player 
            ref="player"
            autoPlay
            playsInline={true}

            >
            <source src={intro} />

 
            </Player> 
            </div>

        </div>
      );
    }
  }

  export default IntroMP4;
  