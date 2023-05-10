import React from "react";
import HeaderContainer from "./components/Header";
import Notedetails from "./components/Notedetails";
import stylMain from "./styles/styled.module.css";
import Noteform from "./components/Noteform";
import { NoteContextProvider } from "./components/notecontext";

function App() {
  const [visible, setVisible] = React.useState(true);
  const handleVisibility = () => {
    if (visible) {
      setVisible(false);
    } else {
      setVisible(true);
    }
  };
  return (
    <>
      <div className={stylMain.maincontainer}>
        <NoteContextProvider>
          <HeaderContainer
            visible={visible}
            handleVisibility={handleVisibility}
          />
          <Notedetails />
          <Noteform visible={visible} handleVisibility={handleVisibility} />
        </NoteContextProvider>
      </div>
    </>
  );
}

export default App;
