import React, {} from 'react';
import '../css/Info.css';
import { Icon } from 'antd';
import { BrowserRouter as  Link,Redirect } from 'react-router-dom';
{/* Info หนีควัน*/}

class smoke extends React.Component{  
  state = { 
    link:false
  };

  close=()=>{this.setState({ link:true })}
  Redirect=()=>{if(this.state.link){ return <Redirect to="/office" /> }}

    render() {
      return (
        <div className="bgsmoke">
        <div className="bgtypeinfo animated fadeIn">
          <div className="typeinfo smoke">
          {this.Redirect()}
          <Icon className="closea" type="close" onClick={this.close}/>
          </div>              
        </div>
        </div>
      );
    }
  }
  
  export default smoke;