import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import FriendDetail from "./components/FriendDetail/FriendDetail";
 
import Home from "./components/Home/Home";
import NoMatch from "./components/No Match/NoMatch";

function App() {

  return (
    <Router>
      <Switch>
        <Route path='/Home'>
          <Home ></Home>
        </Route>

        <Route path='/friend/:Id'>
          <FriendDetail></FriendDetail>
        </Route>



        <Route exact path='/'>
          <Home ></Home>
        </Route>





        <Route>
          <NoMatch path="*"></NoMatch>
        </Route>

      </Switch>
    </Router>
  );
};

export default App;
