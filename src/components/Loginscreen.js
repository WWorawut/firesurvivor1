import React, {} from 'react';
import './App.css';
import './css/login.css';
import logo from "./picture/Logo.svg";
import YouTube from 'react-youtube';

class Loginscreen extends React.Component {
constructor(props){
  super(props);
  this.state={
    value:'',
    dd:""
  }
}

 login=()=>{
  localStorage.setItem("user", this.state.value);
  window.location.href="/test";
 }

  onChangeValue=(e)=>{
    this.setState({
      value:e.target.value
    })
  }

  render() {

    return (
      <div>
        <div className="cd">
        <div className="fontlog"> 

          <div className="boxlogin">
          <div className="box">
            <img className="piclogo" src={logo}/>
            <div className="space">
            <p style={{marginBottom:"8px"}}>ลงชื่อเข้าใช้งาน</p>

            <form>
            <input className="form-control fontlog" type="text" placeholder="ใส่ชื่อของคุณ" required onChange={this.onChangeValue} value={this.state.value}/>
            {this.state.value === "" ?
              <button type="submit" className="btn btn-info fontlog">เข้าสู่ระบบ</button>
              :
              <button type="button" onClick={this.login} class="btn btn-info fontlog" data-toggle="modal" data-target="#exampleModalCenter">
                เข้าสู่ระบบ
              </button>
            } 
            </form>
            </div>
            <div>
              </div>
                </div>
            </div>
          </div>
        </div>
      </div>
     
     
    );
  }
}

export default Loginscreen;
