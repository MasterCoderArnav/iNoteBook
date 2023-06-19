import React, { useContext, useEffect, useRef, useState } from "react";
import NotesContext from "../context/Notes/NotesContext";
import NoteItem from "./NoteItem";

const NotesComp = () => {
  const context = useContext(NotesContext);
  const { notes, fetchAllNotes } = context;
  const updateNote = (note) => {
    ref.current.click();
    setNote({etitle:note.title,edescription:note.description,etag:note.tag});
  };
  useEffect(() => {
    fetchAllNotes();
    // eslint-disable-next-line
  }, []);
  const ref = useRef(null);
  const [note, setNote] = useState({
    etitle: "",
    edescription: "",
    etag: "default",
  });
  const onChange = (e) => {
    setNote({ ...note, [e.target.id]: e.target.value });
  };
  const handleClick = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <button
        ref={ref}
        type="button"
        className="btn btn-primary d-none"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Launch demo modal
      </button>
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Edit Note
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form className="my-3">
                <div className="mb-3">
                  <label htmlFor="title" className="form-label">
                    Title
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="etitle"
                    name="etitle"
                    value={note.etitle}
                    aria-describedby="emailHelp"
                    onChange={onChange}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="description" className="form-label">
                    Description
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="edescription"
                    name="edescription"
                    value={note.edescription}
                    onChange={onChange}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="tag" className="form-label">
                    Tag
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="etag"
                    name="etag"
                    value={note.etag}
                    onChange={onChange}
                  />
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                onClick={handleClick}
                type="button"
                className="btn btn-primary"
              >
                Update Note
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="row my-3">
        {notes.map((note) => {
          return <NoteItem note={note} updateNote={updateNote} />;
        })}
      </div>
    </>
  );
};

export default NotesComp;
