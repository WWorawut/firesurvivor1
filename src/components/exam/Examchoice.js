import React, {} from 'react';
import '../css/exam.css';


class Examchoice extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 

    };
  }


  render() {

    return (
    <div>
        <div class="card">
            <div class="card-header" id="headingOne">
            <h5 class="mb-0">
            <button class="btn btn-link" type="button" data-toggle="collapse" data-target={"#"+this.props.id} aria-expanded="true" aria-controls="collapseOne">
            <p>{this.props.quiz}</p>
            </button>
            </h5>
            </div>

            <div id={this.props.id} class="collapse" aria-labelledby="headingOne" data-parent="#accordionExample">
                <div class="card-body">
                    <input type="radio" checked={this.props.choice===this.props.a} onChange={this.props.change} value={this.props.a} /> <p>{this.props.onechoice}</p>
                    <input type="radio" checked={this.props.choice===this.props.b} onChange={this.props.change} value={this.props.b} /> <p>{this.props.twochoice}</p>
                    <input type="radio" checked={this.props.choice===this.props.c} onChange={this.props.change} value={this.props.c} /> <p>{this.props.threechoice}</p>
                    <input type="radio" checked={this.props.choice===this.props.d} onChange={this.props.change} value={this.props.d} /> <p>{this.props.fourchoice}</p>
                </div>
            </div>
        </div>
    </div>

    );
  }
}

export default Examchoice;

