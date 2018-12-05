import React, {} from 'react';
import '../css/login.css';
import card1 from "../picture/Card1.jpg";

class Asum extends React.Component{
    render() {
      return (
        <div className="bgtype">
          <div>
            
          <img className="typepeople" src={card1}/>
          {/* <div className="buttontype">
            <button className="btn btn-outline-info" type="submit">SUBMIT</button>
            </div> */}
          </div>                
        </div>
      );
    }
  }
  
  export default Asum;