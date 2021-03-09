import logo from './logo.svg';
import './App.css';
import Home from "./components/Home"
import ProfilePage from "./components/ProfilePage"

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"

function App() {

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/users/:id" render={(props) => (
            <ProfilePage {...props}/>
          )}
          />
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
