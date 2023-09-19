import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import VendingMachine from './components/VendingMachine';
import Snack1 from './components/Snack1';
import Snack2 from './components/Snack2';
import Snack3 from './components/Snack3';


function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={VendingMachine} />
          <Route path="/snack1" component={Snack1} />
          <Route path="/snack2" component={Snack2} />
          <Route path="/snack3" component={Snack3} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
