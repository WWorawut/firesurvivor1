import React, {} from 'react';
import '../css/scenenormal.css';
import human from "../picture2/speak/human.png";
import stair1 from "../picture2/speak/stair1.png";
import walk from "../picture2/speak/walkk.png";
import run from "../picture2/speak/run.png";
import { Link } from 'react-router-dom';
import Preload from 'react-preload';

import Reloade from '../preload';

class stair15 extends React.Component{
  state={
    class:'fadeInUp',
    outshow2:false
  }
    componentDidMount(){ 
      setInterval(this.outshow,5000)
    }

    outshow=()=>{this.setState({class:'fadeOutDown'})
    setInterval(this.outshow2,3000)
    }

    outshow2=()=>{this.setState({outshow2:'true'})}

   render() {

 
;
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
          
      <div className="bgstair19">
      {this.state.outshow2 === false ?
      <div className="centerhuman">
      <img className={"human animated " +this.state.class} src={human}/>
      <img className={"text animated " +this.state.class} src={stair1}/>
      </div>
      :
      <div className="centerwalk">
       <Link to = "/stair17"><img className={"walkk animated fadeInUp"} src={walk}/></Link>
       <Link to = "/stair177"><img className={"run animated fadeInUp"} src={run}/></Link>
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
  
  export default stair15;