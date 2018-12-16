import React, {} from 'react';
import './App.css';
import New from './new';
import Loginscreen from './Loginscreen';
import Intro from './video/Intro';
import Exam from './exam/Exam';
import Howplay from './Howplay';

import Asum from './PeopleSummary/Asum';
import Bsum from './PeopleSummary/Bsum';
import Csum from './PeopleSummary/Csum';
import Dsum from './PeopleSummary/Dsum';
import Esum from './PeopleSummary/Esum';

import allsum from './Infographic/allsum';
import janghad from './Infographic/janghad'; 

import { BrowserRouter as Router, Route, Redirect} from 'react-router-dom';

class App extends React.Component{
  render() {
    return (
      <Router>
      <div>
        <Route exact path="/" component={Loginscreen} />
        <Route path="/intro" component={Intro} />
        <Route path="/office" component={New} />
        <Route path="/exam" component={Exam} />
        <Route path="/howtoplay" component={Howplay} />


        <Route path="/typeA" component={Asum} />  {/* people summary page */}
        <Route path="/typeB" component={Bsum} />
        <Route path="/typeC" component={Csum} />
        <Route path="/typeD" component={Dsum} />
        <Route path="/typeE" component={Esum} />

        <Route path="/allsum" component={allsum} /> {/* Infographic page */}
        <Route path="/alarm" component={janghad} />  {/* Info แจ้งเหตุ */}
                        
      </div>
    </Router>
    );
  }
}

export default App;
