import './App.css';
import Main from './Components/Main';
import Info from './Components/Info';
import  { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component = {Main} />
          <Route path="/data" exact component = {Info} />
        </Switch>
      </Router>

      
    
    </div>
  );
}

export default App;
