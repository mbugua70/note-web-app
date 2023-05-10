import React, { useContext } from "react";
import styleForm from "../styles/styled.module.css";
import { NoteContext } from "./notecontext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
const Noteform = ({ visible, handleVisibility }) => {
  const { addNote } = useContext(NoteContext);
  const [title, setTitle] = React.useState("");
  const [details, setDetails] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addNote(title, details);
    setDetails("");
    setTitle("");
  };

  return (
    <>
      {!visible && (
        <form className={styleForm.forms}>
          <div className="crossitem">
            <FontAwesomeIcon
              icon={faX}
              size="1x"
              className={styleForm.crossicon}
              onClick={handleVisibility}
            />
          </div>
          <div className={styleForm.flexinput}>
            <input
              type="text"
              value={title}
              className={styleForm.input}
              placeholder="Enter your title"
              onChange={(e) => setTitle(e.target.value)}
            />
            <textarea
              type="text"
              value={details}
              className={styleForm.inputtextarea}
              placeholder="Enter your notes"
              onChange={(e) => setDetails(e.target.value)}
            />
          </div>
          <button
            type="button"
            className={styleForm.button}
            onClick={handleSubmit}
          >
            save
          </button>
        </form>
      )}
    </>
  );
};

export default Noteform;
