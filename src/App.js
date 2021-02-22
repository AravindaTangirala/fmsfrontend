import "./App.css";
import Feedback from "./components/Feedback";
import Comments from "./components/Comments";
import Summary from "./components/Summary";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

function App() {
  return (
    <div className="app">
      <h1> Welcome to the Feedback Managemet System app</h1>
      <div className="feedback">
        <Router>
          <Switch>
            <Redirect exact from="/" to="/feedback" />

            <Route path="/comments" exact>
              <Comments />
            </Route>
            <Route path="/summary" exact>
              <Summary />
            </Route>
            <Route path="/feedback" exact>
              <Feedback />
            </Route>
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
