import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Quiz from "./pages/Quiz";
import Result from "./pages/Result";
import Signup from "./pages/Signup";
import { AuthProvider } from "./contexts/AuthContext";
import PrivateRoute from "./components/PrivateRoute";
import PublicRoute from "./components/PublicRoute";

const App = () => {
  return (
    <div>
      <Router>
        <AuthProvider>
          <Navbar />

          <main className="w-4/5 mx-auto">
            <Switch>
              <Route exact path="/" component={Home} />
              <PublicRoute exact path="/login" component={Login} />
              <PublicRoute exact path="/signup" component={Signup} />
              <PrivateRoute exact path="/quiz/:id" component={Quiz} />
              <PrivateRoute exact path="/result/:id" component={Result} />
            </Switch>
          </main>
        </AuthProvider>
      </Router>
    </div>
  );
};

export default App;
