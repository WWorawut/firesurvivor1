import React, {} from 'react';
import '../css/Info.css';
import { Icon } from 'antd';
import { BrowserRouter as  Link,Redirect } from 'react-router-dom';

{/* Info ประเภทของไฟ */}

class firetype extends React.Component{  
  state = { 
    link:false
  };

  close=()=>{this.setState({ link:true })}
  Redirect=()=>{if(this.state.link){ return <Redirect to="/office" /> }}

    render() {
      return (
        <div className="bgjanghad">
        <div className="bgtypeinfo animated fadeIn">
          <div className="typeinfo firetype">
          {this.Redirect()}
          <Icon className="closea" type="close" onClick={this.close}/>
          </div>              
        </div>
        </div>
      );
    }
  }
  
  export default firetype;