import React, {} from 'react';
import '../css/Info.css';
import { Icon } from 'antd';

{/* Info แจ้งเหตุ */}

class janghad extends React.Component{  

   close=()=>{
     window.location.href="/office";   
   }

    render() {
      return (
        <div className="bgjanghad">
        <div className="bgtypeinfo">
          <div className="typeinfo janghad">
          <Icon className="close" type="close" onClick={this.close}/>
          </div>              
        </div>
        </div>
      );
    }
  }
  
  export default janghad;