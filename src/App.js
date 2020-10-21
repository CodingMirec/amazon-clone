import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

import "./App.css";
import Header from "./Header";
import Home from "./Home";
import Checkout from "./Checkout";
import Login from "./Login";
import Payment from "./Payment";
import Orders from "./Orders";

const promise = loadStripe(
  "pk_test_51Hdfv3CvqKP3FC1OCbBfOJDDr9NDA1DRn1LkGxG2Nfp5UW65e9y5z4Z7S6juYMDyZgfrheS1lO9QImF9dRRSEuyF00ulWp1luf"
);

function App() {
  const [{ user }, dispatch] = useStateValue();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        //user is logged in

        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        //user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });

    return () => {
      //Any cleanup operations go here
      unsubscribe();
    };
  }, []);

  console.log("USER IS >>", user);

  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/payment">
            <Header />
            <Elements stripe={promise}>
              <Payment />
              <Route path="/orders">
                <Orders />
              </Route>
            </Elements>
          </Route>
          {/* This is deafault route */}
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
