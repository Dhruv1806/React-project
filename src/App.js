// import logo from './logo.svg';
import { useState } from "react";
import "./App.css";
// import ReactDOM from "react-dom";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextFrom from "./components/TextForm";
import Alert from "./components/Alert";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 500);
  };
  const toggleModeDark = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "grey";
      showAlert("Dark mode is enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode is enabled", "success");
    }
  };
  const toggleModeGreen = () => {
    if (mode === "light") {
      setMode("success");
      document.body.style.backgroundColor = "#bcf5d2";
      showAlert("Green mode is enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode is enabled", "success");
    }
  };
  const toggleModeRed = () => {
    if (mode === "light") {
      setMode("danger");
      document.body.style.backgroundColor = "#f5bcbc";
      showAlert("Red mode is enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode is enabled", "success");
    }
  };
  const toggleModeBlue = () => {
    if (mode === "light") {
      setMode("info");
      document.body.style.backgroundColor = "#bcdff5";
      showAlert("Blue mode is enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode is enabled", "success");
    }
  };
  return (
    <>
      <Router>
        <Navbar
          mode={mode}
          toggleModeDark={toggleModeDark}
          toggleModeGreen={toggleModeGreen}
          toggleModeRed={toggleModeRed}
          toggleModeBlue={toggleModeBlue}
        />
        <Alert alert={alert} />
        <div className="container">
          <Switch>
            <Route exact path="/about">
              <About />
            </Route>
            <Route exact path="/">
              <TextFrom
                text="Enter your text here"
                showAlert={showAlert}
                mode={mode}
              />
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
