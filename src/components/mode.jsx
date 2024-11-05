import React, {useContext} from "react";
import { DarkModeContext } from "../contexts/DarkModeContext";
import Lightswitch from "./Lightswitch";

function Mode() {
  const {darkMode} = useContext(DarkModeContext);
  return (
    <div className={darkMode ? 'mode mode-dark' : 'mode mode-light'}><Lightswitch/></div>
  )
}
export default Mode;