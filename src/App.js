import logo from "./logo.svg";
import "./App.css";
import BasicSortingGrid from "./components/BasicSortingGrid";
import DataGridDemo from "./components/DataGridDemo";
import DatePickers from "./components/DatePickers";
import Google from "./components/Google";
import { auth } from "./components/Firebase";
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Phoneverifications from "./components/Phoneverifications";
import Cards from "./components/Cards";
import Chatbot from 'react-chatbot-kit';
import MessageParser from "./components/MessageParser";
import ActionProvider from "./components/ActionProvider";
import config from "./components/config";
import Payment from "./components/Payment";
import StripeCheckout from "react-stripe-checkout";
import Responsive from "./components/Responsive";
import Rating from "./components/Rating";
function App() {
  const [user, setUser] = useState(auth.currentUser);
  const [rating,setRating]=useState(0);
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        console.log(user.displayName);
        setUser(user);
      } else {
        console.log("sign out");
        setUser(null);
      }
    });
    return unsubscribe;
  }, []);
  async function handleToken(token, addresses) {
    console.log(token,addresses);
    // const response = await axios.post(
    //   "https://ry7v05l6on.sse.codesandbox.io/checkout",
    //   { token, product }
    // );
    // const { status } = response.data;
    // console.log("Response:", response.data);
    // if (status === "success") {
    //   toast("Success! Check email for details", { type: "success" });
    // } else {
    //   toast("Something went wrong", { type: "error" });
    // }
  }
  function rate(e)
  {
    setRating(e);
  }
  return (
    <div className="App">
      {/* <Dateandtime/> */}
      {/* <BasicSortingGrid/> */}
      {/* <DataGridDemo/>
      <DatePickers/> */}
      {/* <Google/> */}
      {/* <Router>
        <Navbar/>
        <Switch>
            <Route exact path="/home">
                <Home/>
            </Route>
            <Route exact path="/about">
                <About/>
            </Route>
            <Route exact path="/contact">
                <Contact/>
            </Route>
        </Switch>
      </Router> */}
      {/* <Phoneverifications/> */}
      {/* <Cards/> */}
      {/* <Chatbot config={config} messageParser={MessageParser} actionProvider={ActionProvider}/> */}
      {/* <Payment/> */}
      {/* <StripeCheckout stripeKey="pk_test_51J3F0TSD3MHNLJuAeW7lT9SJfRxPWpLFk6WQHCtiVhj8iVbxn9h08R8bizJmgqDO9giCnqdnddXvEATniYxqgvKD00iAlrY2dS" token={handleToken}/> */}
      {/* <Responsive/> */}
      <Rating rate={rate}/>
      <h1>Your ratings is {rating}</h1>
      <h1>Hello</h1>
    </div>
  );
}

export default App;
