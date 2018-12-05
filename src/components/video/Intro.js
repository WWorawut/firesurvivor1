import React, {} from 'react';
import '../css/login.css';
import YouTube from 'react-youtube';

class Intro extends React.Component{
    office=() => {
      window.location.href="/office";
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

            {/* <video style="width: 1457px; height: auto; visibility: visible;" 
            autoplay="autoplay" 
            muted="muted"
            poster="https://www.paypalobjects.com/webstatic/en_GB/mktg/wright/videos/uk-brand-campaign.jpg"> 
            <source src="https://www.paypalobjects.com/webstatic/en_GB/mktg/wright/videos/uk-brand-campaign.mp4" 
            type="video/mp4"/> 
            <source src="https://www.paypalobjects.com/webstatic/en_GB/mktg/wright/videos/uk-brand-campaign.webm" 
            type="video/webm"/> </video>  */}
        </div>
      );
    }
  }
  
  export default Intro;

