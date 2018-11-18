import React, {} from 'react';
import './App.css';
import './css/login.css';
import logo from "./picture/Logo.png";
import YouTube from 'react-youtube';

class Loginscreen extends React.Component {
constructor(props){
  super(props);
  this.state={
    value:'',
    dd:""
  }
}
  office=() => {
    window.location.href="/office";
  }

 login=()=>{
  localStorage.setItem("user", this.state.value);
 }

  onChangeValue=(e)=>{
    this.setState({
      value:e.target.value
    })
  }
  onReady(event) {
    event.target.pauseVideo();
  }
  render() {
    const opts = {
      width: '700px',
      height:'420px',
      playerVars: { // https://developers.google.com/youtube/player_parameters
        autoplay:0
      }
    };

    return (
      <div>
        <div className="jumbotron">
        <div className="row offset-6 fontlog"> 

          <div className="boxlogin">
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
            
                <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                  <div class="modal-dialog modal-dialog-centered" role="document">
                    <div class="modal-content">
                      <div class="modal-body">
                      <YouTube
                        videoId="A1BdhEYXkYI" 
                        opts={opts}
                        onReady={this.onReady}
                        onEnd={this.office}
                      />
                      </div>
                    </div>
                  </div>
                </div>

            </div>
          </div>


          {/* <div>
          <YouTube
              videoId="A1BdhEYXkYI" 
              opts={opts}
            
              onEnd={this.office}
            />
          </div> */}



          </div>
        </div>
      </div>
     
     
    );
  }
}

export default Loginscreen;
