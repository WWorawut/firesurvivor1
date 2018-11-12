import React, {} from 'react';
import './App.css';
import New from './new';
import Exam from './exam/Exam';
import { BrowserRouter as Router, Route, Redirect} from 'react-router-dom';

class App extends React.Component{
  render() {
    return (
      <Router>
      <div>
        <Route exact path="/" component={New} />
        <Route path="/exam" component={Exam} />                
      </div>
    </Router>
    );
  }
}

export default App;
