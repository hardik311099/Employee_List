import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import "./App.css";
import From from "./components/FromView/From";
import EmployeeGridView from "./components/GridView/Employee_Grid_View";
import EmployeeListView from "./components/ListView/Employee_List_View";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <EmployeeGridView />
          </Route>
          <Route exact path="/from">
            <From />
          </Route>
          <Route exact path="/list">
            <EmployeeListView />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
