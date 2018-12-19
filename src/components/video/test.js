import React from 'react';
import { Player, ControlBar, PlayToggle} from 'video-react';
import '../css/Info.css';


class test extends React.Component{
    office=() => {
      window.location.href="/howtoplay";
    }

    render() {
      return (
        <div>
            <div className="video">
            <Player>
            <source src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4" />
            </Player> 
            </div>

        </div>
      );
    }
  }

  export default test;
  