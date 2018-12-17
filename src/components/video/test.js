import React, {} from 'react';
import '../css/login.css';
import YouTube from 'react-youtube';

class test extends React.Component{
    office=() => {
      window.location.href="/howtoplay";
    }

    render() {
        const opts = {
          playerVars: {
            autoplay:1
          }
        };

      return (
        <div>
            <YouTube
              videoId="A1BdhEYXkYI" 
              opts={opts}
              className = "intro"
              onReady={this.onReady}
              onEnd={this.office}
            />    

        </div>
      );
    }
  }

  export default test;
  