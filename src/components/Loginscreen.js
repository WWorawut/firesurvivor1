import React, {} from 'react';
import './App.css';

class Loginscreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      value:"input name"
    };
  }
  gg=()=>{
    alert(this.state.value)
  }
  cc=(e)=>{
    this.setState({
      value:e.target.value
    })
  }
  render() {
    const bg={
      backgroundColor:this.props.color,
    }
    return (
      <div>
        <input value={this.state.value} onChange={this.cc}></input>
        <button style={bg} onClick={this.gg}>fdgdf</button>

  
      </div>
     
     
    );
  }
}

export default Loginscreen;
