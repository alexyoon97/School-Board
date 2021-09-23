import "./App.css";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home/Home";
import CreateSchool from "./pages/CreateSchool/CreateSchool";
import SchoolDetail from "./pages/SchoolDetail/SchoolDetail";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/createschool" component={CreateSchool} />
        <Route exact path="/schooldetail/:school_uid" component={SchoolDetail} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
