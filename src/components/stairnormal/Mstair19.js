import React, {} from 'react';
import '../css/scenenormal.css';
import { Icon } from 'antd';
import human from "../picture2/speak/human.png";
import stair1 from "../picture2/speak/stair1.png";
import walk from "../picture2/speak/walkk.png";
import run from "../picture2/speak/run.png";
import { Link, Redirect } from 'react-router-dom';
import Preload from 'react-preload';
import Sound from 'react-sound';

import walk1 from "../picture2/popscore/Mwalk1.png";
import run1 from "../picture2/popscore/Mrun1.png";
import Popup from '../Scene/popup';

import Reloade from '../preload';
import {savescore} from '../../action'
import {connect} from 'react-redux';

import sound from '../video/sound/speakstair.mp3';

class Mstair19 extends React.Component{
  state={
    class:'fadeInUp',
    outshow2:false,
    popup:false,
    link:false,
    playStatus:Sound.status.STOPPED
  }
    componentDidMount(){ 
      setTimeout(this.soundOn,1200);
      setTimeout(this.outshow,8000);
    }
    soundOn=()=>{
      this.setState({playStatus:Sound.status.PLAYING})
    }
    outshow=()=>{this.setState({class:'fadeOutDown'})
    setTimeout(this.outshow2,3000)
    }

    outshow2=()=>{this.setState({outshow2:'true'})}

    openpop=data=>()=>{
      this.setState({[data.state]:true});
      this.props.dispatch(savescore(data.score));
      setTimeout(this.popupClose(data),2000);
    }
      
    popupClose=data=>()=>{
      this.setState({[data.state]:false})
      setTimeout(this.setlink(data.link),1000);  
    }
  
    setlink=link=>()=>{this.setState({ [link]:true })}
  
  
    Redirect=()=>{if(this.state.link1){ return <Redirect to="/Mstair17" /> }}
    Redirect1=()=>{if(this.state.link2){ return <Redirect to="/Mstair177" /> }}

   render() {

    var images = [{human,stair1,walk,run}];
    var loadingIndicator = (<Reloade/>);
    return (
 
        <Preload
            loadingIndicator={loadingIndicator}
            images={images}
            autoResolveDelay={30000}
            onError={this._handleImageLoadError}
            onSuccess={this._handleImageLoadSuccess}
            resolveOnError={true}
            mountChildren={true}
        >


      <Sound
        url={sound}
        volume={this.props.sound === false?0:100}
        playStatus={this.state.playStatus}
        onFinishedPlaying={() => this.setState({ playStatus: Sound.status.STOPPED })}
      />  
          

        {this.Redirect()}
        {this.Redirect1()}

      <Popup
      open={this.state.popup}
      image={walk1}
      iconclose={'none'}
      />

      <Popup
      open={this.state.popup2}
      image={run1}
      iconclose={'none'}
      />


      <div className="bgstair19">
      {this.state.outshow2 === false ?
      <div className="centerhuman">
      <img className={"human animated " +this.state.class} src={human}/>
      <img className={"text animated " +this.state.class} src={stair1}/>
      </div>
      :
      <div className="centerwalk">
       <img className={"walkk animated fadeInUp"} style={{marginRight:'15%'}} onClick={this.openpop({link:'link1',state:'popup'})} src={walk}/>
       <img className={"run animated fadeInUp"} onClick={this.openpop({link:'link2',state:'popup2'})} src={run}/>
       </div>
      }
    

     
      

      {/* <div className="bgtypeinfo">
        <div className="typeinfo janghad">
        <Icon className="closea" type="close" onClick={this.close}/>
        </div>              
      </div> */}
      </div>
      </Preload>
    );
  }
}

const connectscore = state => ({
  sound:state.sound
  })
  
  export default connect(connectscore)(Mstair19);