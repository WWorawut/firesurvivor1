import React, {} from 'react';
import '../css/exam.css';


class Examchoice extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
    };
  }


  render() {
    let cardColor;
      {this.props.cardColor === 'normal' ?
        cardColor = null
        :
        cardColor = {backgroundColor:this.props.cardColor}   
      }
      let textButton;
      {this.props.final == "final" ?
      textButton="ส่งคำตอบ"
      :
      textButton="ข้อต่อไป"
      }
    return (
    <div>
        <div className="font">
            <div style={cardColor} id="headingOne">
                <p className="sizef">{this.props.quiz}</p>
            </div>

            <div>
                <div className="card-body">
                    <div><input type="radio" checked={this.props.choice===this.props.a} onChange={this.props.change} value={this.props.a} /> <p className="line sizef">{this.props.onechoice}</p></div>
                    <div><input type="radio" checked={this.props.choice===this.props.b} onChange={this.props.change} value={this.props.b} /> <p className="line sizef">{this.props.twochoice}</p></div>
                    <div><input type="radio" checked={this.props.choice===this.props.c} onChange={this.props.change} value={this.props.c} /> <p className="line sizef">{this.props.threechoice}</p></div>
                    <div><input type="radio" checked={this.props.choice===this.props.d} onChange={this.props.change} value={this.props.d} /> <p className="line sizef">{this.props.fourchoice}</p></div>
                </div>
            </div>
                {this.props.choice !== "" ?
                    <div className="sentans">
                    <button type="button" class="btn btn-outline-danger" onClick={this.props.next}>{textButton}</button>
                    </div>
                    :null
                }
             </div>





            {/* <div className="container">
        <div className="card box1">
            <div className="card-header" style={cardColor} id="headingOne">
                <p className="sizef btn-link" data-toggle="collapse" data-target={"#"+this.props.id} aria-expanded="true" aria-controls="collapseOne">{this.props.quiz}</p>
            </div>

            <div id={this.props.id} className="collapse" aria-labelledby="headingOne" data-parent="#accordionExample">
                <div className="card-body">
                    <div><input type="radio" checked={this.props.choice===this.props.a} onChange={this.props.change} value={this.props.a} /> <p className="line sizef">{this.props.onechoice}</p></div>
                    <div><input type="radio" checked={this.props.choice===this.props.b} onChange={this.props.change} value={this.props.b} /> <p className="line sizef">{this.props.twochoice}</p></div>
                    <div><input type="radio" checked={this.props.choice===this.props.c} onChange={this.props.change} value={this.props.c} /> <p className="line sizef">{this.props.threechoice}</p></div>
                    <div><input type="radio" checked={this.props.choice===this.props.d} onChange={this.props.change} value={this.props.d} /> <p className="line sizef">{this.props.fourchoice}</p></div>
                </div>
            </div>
        </div>
    </div> */}
    </div>






    );
  }
}

export default Examchoice;

