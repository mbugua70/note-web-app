import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import styleHeader from "../styles/styled.module.css";

const HeaderContainer = ({ visible, handleVisibility }) => {
  return (
    <>
      <header className={styleHeader.headercontainer}>
        <nav className={styleHeader.navcontainer}>
          <ul>
            <li>Keep Notes</li>
            <li>
              {visible && (
                <FontAwesomeIcon
                  icon={faPlus}
                  size="2x"
                  className={styleHeader.plusheadericon}
                  onClick={handleVisibility}
                />
              )}
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default HeaderContainer;
