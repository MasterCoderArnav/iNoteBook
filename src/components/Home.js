import React from "react";
import NotesComp from "./NotesComp";
import AddNote from "./AddNote";

const Home = () => {
  return (
    <div className="container">
      <AddNote />
      <div className="row">
        <h2>Your Notes</h2>
        <NotesComp />
      </div>
    </div>
  );
};

export default Home;
