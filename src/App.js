import './styling/App.scss';
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
        <h1 id="titleBar">Bennie Take Home</h1>
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
