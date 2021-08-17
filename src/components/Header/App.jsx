import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Todos from '../Todos/Todos'
import Users from '../Users/Users'

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1 className="hTitle">Todo's list</h1>
          <ul className="hList">
            <li key="todo" className="hItem">
              <Link to="/">Todo's</Link>
            </li>
            <li key="users" className="hItem">
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </header>

        <Switch>
          <Route exact path="/" component={Todos}></Route>
          <Route path="/users" component={Users}></Route>
          <Route exact path="/:userID" component={Todos}></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
