import React from 'react';
import { Player, ControlBar } from 'video-react';
import '../css/Info.css';
import intro from "../video/file/fire.mp4";
import { BrowserRouter as  Link,Redirect } from 'react-router-dom';

import Preload from '../preload';
import { Preloader, Placeholder } from 'react-preloading-screen';

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
    if (ended == true){
         this.setState({ended:true}) 
    }

  }


    render() {
      if(this.state.ended){
        return <Redirect to="/howtoplay" /> 
       }
      return (
         <Preloader>
        <div>
         
            <div className="video">
            <Player 
            ref="player"
            autoPlay
            playsInline={true}

            >
            <source src={intro} />
            {/* <ControlBar autoHide={false} disableDefaultControls></ControlBar> */}

 
            </Player> 
            </div>

        </div>

        <Placeholder>
<span><Preload/></span>
</Placeholder>
</Preloader>
      );
    }
  }

  export default IntroMP4;
  