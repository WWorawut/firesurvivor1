import React, {} from 'react';
import '../css/Info.css';
import { Icon } from 'antd';

{/* Info การใช้ถุงดับเพลิง */}

class usetung extends React.Component{  

   close=()=>{
     window.location.href="/office";   
   }

    render() {
      return (
        <div className="bgjanghad">
        <div className="bgtypeinfo">
          <div className="typeinfo usetung">
          <Icon className="closea" type="close" onClick={this.close}/>
          </div>              
        </div>
        </div>
      );
    }
  }
  
  export default usetung;