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
      width: '800px',
      height:'520px',
      playerVars: { // https://developers.google.com/youtube/player_parameters
        autoplay:0
      }
    };

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
                <div className="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <div className="videospace">
                  <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                      <div className="modal-body">
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
