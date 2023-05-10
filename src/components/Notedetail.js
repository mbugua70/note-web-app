import React, { useContext } from "react";
import styleMain from "../styles/styled.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import { NoteContext } from "./notecontext";
import styledEdit from "../styles/edit.module.css";

const Notedetail = ({ items }) => {
  const { removeNote, note, handleUpdate } = useContext(NoteContext);
  const [isEditing, setEditing] = React.useState(false);
  const [title, setTitle] = React.useState(note.title);
  const [details, setDetails] = React.useState(note.details);
  const [editNote, setEditNote] = React.useState(note);

  const handEditPage = () => {
    setEditing(true);
  };

  const handleSave = () => {
    handleUpdate(items.id, title, details);
    setEditing(false);
  };

  const handleCancel = () => {
    setEditNote(note);
    setEditing(false);
  };

  return (
    <>
      {isEditing ? (
        <>
          <div className={styledEdit.parenteditcontainer}>
            <input
              type="text"
              name="title"
              value={editNote.title}
              onChange={(e) => setTitle(e.target.value)}
              className={styledEdit.inputedit}
              placeholder="Title"
            />

            <textarea
              name="details"
              value={editNote.details}
              onChange={(e) => setDetails(e.target.value)}
              className={styledEdit.detailedit}
              placeholder="notes"
            />
            <div className={styledEdit.buttonflex}>
              <button onClick={handleSave} className={styledEdit.buttonone}>
                save
              </button>
              <button onClick={handleCancel} className={styledEdit.buttontwo}>
                cancel
              </button>
            </div>
          </div>
        </>
      ) : (
        <li key={items.id} className={styleMain.notecontainer}>
          <div className={styleMain.title}>{items.title}</div>
          <div className={styleMain.details}>{items.details}</div>
          <div className={styleMain.flexicon}>
            <FontAwesomeIcon
              icon={faEdit}
              size="1x"
              className={styleMain.editicon}
              onClick={handEditPage}
            />
            <FontAwesomeIcon
              icon={faTrash}
              size="1x"
              className={styleMain.plusicon}
              onClick={() => removeNote(items.id)}
            />
          </div>
        </li>
      )}
    </>
  );
};

export default Notedetail;
