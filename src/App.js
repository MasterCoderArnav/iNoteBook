import "./App.css";
import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import NotesState from "./context/Notes/NotesState";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Alert from "./components/Alert";

function App() {
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }
  return (
    <>
      <NotesState>
        <BrowserRouter>
          <Navbar />
          <Alert alert={alert} />
          <Routes>
            <Route exact path="/" element={<Home showAlert={showAlert}/>} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/login" element={<Login showAlert={showAlert}/>} />
            <Route exact path="/signUp" element={<SignUp showAlert={showAlert}/>} />
          </Routes>
        </BrowserRouter>
      </NotesState>
    </>
  );
}

export default App;
