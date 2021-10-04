import Home from "./component/Home/Home";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route,Link  } from "react-router-dom";
import NotFound from "./NotFound/NotFound";
import Services from "./component/Services/Services";
import About from "./component/About/About";
import Contacts from "./component/Contacts/Contacts";


function App() {
  return (
    <div className="App">
      
        {/* Here Im a useing Reate Router */}
<Router>
      <Switch>
        <Route exact path="/">   
        
         <Home></Home>
        </Route>
      <Route path="/home">
         <Home></Home>
      </Route>
      <Route path="/service">
        <Services></Services>
      </Route>
      <Route path="/about">
        <About></About>
      </Route>
      <Route path="/contact">
        <Contacts></Contacts>
      </Route>


        <Route path="*">
          <NotFound></NotFound>
        </Route>
      </Switch>
</Router>



    </div>
  );
}

export default App;
