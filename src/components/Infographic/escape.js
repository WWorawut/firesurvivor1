import React, {} from 'react';
import '../css/Info.css';
import { Icon } from 'antd';
import { BrowserRouter as  Link,Redirect } from 'react-router-dom';

{/* Info หนีเหตุ */}

class escape extends React.Component{  
  state = { 
    link:false
  };

  close=()=>{this.setState({ link:true })}
  Redirect=()=>{if(this.state.link){ return <Redirect to="/office" /> }}

    render() {
      return (
        <div className="bgescape">
        <div className="bgtypeinfo">
          <div className="typeinfo escape">
          {this.Redirect()}
          <Icon className="closea" type="close" onClick={this.close}/>
          </div>              
        </div>
        </div>
      );
    }
  }
  
  export default escape;