import logo from "./logo.svg";
import "./App.css";
import Sidebar from "./sidebar";
import Topbar from "./topbar";
import Dashboard from "./dashboard/dashboard";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Useredit from "./useredit";
import UserList from "./userlist";
import Usercreate from "./usercreate";

function App() {
  return (
    <>
      {" "}
      <Router>
        <div id="wrapper">
          <Sidebar></Sidebar>
          <div id="content-wrapper" class="d-flex flex-column">
            <div id="content">
              <Topbar></Topbar>
              <div class="container-fluid">
                <Switch>
                  <Route path="/dashboard" component={Dashboard} />
                  <Route path="/userlist" component={UserList} />
                  <Route path="/useredit/:id" component={Useredit} />
                  <Route path="/usercreate" component={Usercreate} />
                </Switch>
              </div>
            </div>
          </div>
        </div>
      </Router>
    </>
  );
}

export default App;
