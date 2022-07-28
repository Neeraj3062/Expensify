import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

// ====HOOKS====
import { useAuthContext } from "./hooks/useAuthContext";


// ===COMPONENTS===
import Navbar from "./components/Navbar";

// ===PAGES===
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";
import Notfound from "./pages/notfound/Notfound";
import Welcome from "./pages/welcome/Welcome";
import About from "./pages/about/About";

// ===STYLES===
import "./App.css";
import Footer from "./components/Footer";


function App() {

  const { authisReady, user } = useAuthContext();

  return (
    <div className="App">
    {authisReady && (
      <BrowserRouter>
      <Navbar/>
        <Switch>
          <Route exact path="/">
            <Welcome/>
          </Route>
          <Route path="/home">
          {!user && <Redirect to="/login" />}
          {user &&  <Home />}
          </Route>
          <Route path="/about">
          {!user && <Redirect to="/login" />}
          {user &&  <About />}
          </Route>
          <Route path="/login">
          {!user  &&   <Login/>}
           {user &&  <Redirect to="/home" />}
          </Route>
          <Route path="/signup">
          {!user &&  <Signup />}
           {user && <Redirect to="/home" />}
          </Route>
          <Route path="*">
            <Notfound />
          </Route>
        </Switch>
        
      </BrowserRouter>
   
    )}
    </div>
  );
}

export default App;
