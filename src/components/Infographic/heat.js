import React, {} from 'react';
import '../css/Info.css';
import { Icon } from 'antd';
import { BrowserRouter as  Link,Redirect } from 'react-router-dom';
{/* Info หนีความร้อน */}

class heat extends React.Component{  
  state = { 
    link:false
  };

  close=()=>{this.setState({ link:true })}
  Redirect=()=>{if(this.state.link){ return <Redirect to="/endstair" /> }}

    render() {
      return (
        <div className="bgheat">
        <div className="bgtypeinfo animated fadeIn">
          <div className="typeinfo heat">
          {this.Redirect()}
          <Icon className="closea" type="close" onClick={this.close}/>
          </div>              
        </div>
        </div>
      );
    }
  }
  
  export default heat;