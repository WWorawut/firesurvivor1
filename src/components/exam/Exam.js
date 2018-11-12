import React, {} from 'react';
import Examchoice from './Examchoice';

class Exam extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
        choice1:"",
        choice2:"",
        choice3:"",
        choice4:"",
        choice5:"",
        choice6:"",
        choice7:"",
        choice8:"",
        choice9:"",
        choice10:"",
    };
  }
    change=name=>(e)=>{
        this.setState({
            [name]: e.target.value
        })
    }

    submit=(e)=>{
        e.preventDefault();
        let score = 0;
        if(this.state.choice1==="true"){
            score++;
        }
        if(this.state.choice2==="true"){
            score++;
        }
        if(this.state.choice3==="true"){
            score++;
        }
        if(this.state.choice4==="true"){
            score++;
        }
        if(this.state.choice5==="true"){
            score++;
        }
        if(this.state.choice6==="true"){
            score++;
        }
        if(this.state.choice7==="true"){
            score++;
        }
        if(this.state.choice8==="true"){
            score++;
        }
        if(this.state.choice9==="true"){
            score++;
        }
        if(this.state.choice10==="true"){
            score++;
        }
        alert(score)
    }
    

  render() {

    return (
      <form onSubmit={this.submit}>
          <button className="btn btn-outline-info" type="submit">llll</button> 
    <div class="accordion" id="accordionExample">
        <Examchoice
            choice={this.state.choice1}
            change={this.change('choice1')}
            quiz="1.what"
            onechoice="aaa"
            twochoice="bbb"
            threechoice="ccc"
            fourchoice="ddd"
            a = "false1"
            b = "false2"
            c = "false3"
            d = "true"
            id="one"
        />
    </div>
    <div class="accordion" id="accordionExample">
        <Examchoice
            choice={this.state.choice2}
            change={this.change('choice2')}
            quiz="2.what"
            onechoice="e"
            twochoice="f"
            threechoice="g"
            fourchoice="h"
            a = "false1"
            b = "false2"
            c = "false3"
            d = "true"
            id="two"
        />
    </div>
        <Examchoice
            choice={this.state.choice3}
            change={this.change('choice3')}
            quiz="3.what"
            onechoice="e"
            twochoice="f"
            threechoice="g"
            fourchoice="h"
            a = "false1"
            b = "false2"
            c = "false3"
            d = "true"
            id="three"
        />
        <Examchoice
            choice={this.state.choice4}
            change={this.change('choice4')}
            quiz="4.what"
            onechoice="e"
            twochoice="f"
            threechoice="g"
            fourchoice="h"
            a = "false1"
            b = "false2"
            c = "false3"
            d = "true"
            id="four"
        />
        <Examchoice
            choice={this.state.choice5}
            change={this.change('choice5')}
            quiz="5.what"
            onechoice="e"
            twochoice="f"
            threechoice="g"
            fourchoice="h"
            a = "false1"
            b = "false2"
            c = "false3"
            d = "true"
            id="five"
        />
        <Examchoice
            choice={this.state.choice6}
            change={this.change('choice6')}
            quiz="6.what"
            onechoice="e"
            twochoice="f"
            threechoice="g"
            fourchoice="h"
            a = "false1"
            b = "false2"
            c = "false3"
            d = "true"
            id="six"
        />
        <Examchoice
            choice={this.state.choice7}
            change={this.change('choice7')}
            quiz="7.what"
            onechoice="e"
            twochoice="f"
            threechoice="g"
            fourchoice="h"
            a = "false1"
            b = "false2"
            c = "false3"
            d = "true"
            id="seven"
        />
        <Examchoice
            choice={this.state.choice8}
            change={this.change('choice8')}
            quiz="8.what"
            onechoice="e"
            twochoice="f"
            threechoice="g"
            fourchoice="h"
            a = "false1"
            b = "false2"
            c = "false3"
            d = "true"
            id="eight"
        />
        <Examchoice
            choice={this.state.choice9}
            change={this.change('choice9')}
            quiz="9.what"
            onechoice="e"
            twochoice="f"
            threechoice="g"
            fourchoice="h"
            a = "false1"
            b = "false2"
            c = "false3"
            d = "true"
            id="nine"
        />
        <Examchoice
            choice={this.state.choice10}
            change={this.change('choice10')}
            quiz="10.what"
            onechoice="e"
            twochoice="f"
            threechoice="g"
            fourchoice="h"
            a = "false1"
            b = "false2"
            c = "false3"
            d = "true"
            id="ten"
        />
      </form>

    );
  }
}

export default Exam;