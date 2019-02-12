import React, {} from 'react';
import '../css/login.css';
import { Icon } from 'antd';
import { BrowserRouter as  Link,Redirect } from 'react-router-dom';
import {connect} from 'react-redux';

class Asum extends React.Component{
  state = { 
    link:false
  };

  close=()=>{this.setState({ link:true })}
  Redirect=()=>{if(this.state.link){ return <Redirect to="/allsum" /> }}

    render() {
      let card;
      if(this.props.score >= 80 ){card ='card1'}
      if(this.props.score <= 79 && this.props.score >= 60 ){card ='card2'}
      if(this.props.score <= 59 && this.props.score >= 40 ){card ='card3'}
      if(this.props.score <= 39 && this.props.score >= 20 ){card ='card4'}
      if(this.props.score <= 19 && this.props.score >= 0 ){card ='card5'}


      return (
        <div className="bgg">
        <div className="bgtype ">
          <div className={"typepeople "+card+" animated jackInTheBox"}>
          {this.Redirect()}
          <Icon className="close" type="close" onClick={this.close}/>
          </div>              
        </div>
        </div>
      );
    }
  }
  const connectscore = state => ({
    score:state.score
    })  
  export default connect(connectscore)(Asum);