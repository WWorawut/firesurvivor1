import React, {} from 'react';
import '../css/Info.css';
import { Icon, Button, Tabs } from 'antd';
import { BrowserRouter as  Link,Redirect } from 'react-router-dom';


{/* Info ประเภทถังดับเพลิง */}

class firetung extends React.Component{  
  state = { 
    link:false
  };

  close=()=>{this.setState({ link:true })}
  Redirect=()=>{if(this.state.link){ return <Redirect to="/usetung" /> }}

    render() {
      return (
        <div className="bgjanghad">
        <div className="bgtypeinfo">
          <div className="typeinfo firetung">
          {this.Redirect()}
          <Button className="buttonhowto" onClick={this.close} ghost>วิธีการใช้</Button>
          </div>              
        </div>
        </div>
      );
    }
  }
  
  export default firetung;