import React, { useContext } from "react";
import { NoteContext } from "./notecontext";
import Notedetail from "../components/Notedetail";
import styledList from "../styles/styled.module.css";
const Notedetails = () => {
  const { note } = useContext(NoteContext);
  return (
    <>
      <div>
        <ul className={styledList.parentnotecontainer}>
          {note.map((items) => {
            return <Notedetail items={items} key={items.id} />;
          })}
        </ul>
      </div>
    </>
  );
};

export default Notedetails;
