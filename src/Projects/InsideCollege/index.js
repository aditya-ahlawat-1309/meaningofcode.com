import React from "react";
import ReactDOM from "react-dom";
import Table from "./table";

import "./styles.css";

function ic_App() {
  return (
    <div>
    <div className="App_ic_app" style={{backgroundColor:"white"}}>
      <div class="heading">Student's List</div>
      <Table />
    </div>
   </div>
  );
}

// const rootElement = document.getElementById("root");
export default ic_App;
