import React, { useState } from "react";
import "./App.css";
import Grid from "@material-ui/core/Grid";

let marked = require("marked");
function App() {
  const [input, setInput] = useState("");

  function toHtml() {
    var markUp = marked(input, { sanitizer: true });
    return { __html: markUp };
  }
  return (
    <Grid>
      <input value={input} onChange={(e) => setInput(e.target.value)} />
      <h1>Preview</h1>
      <div
        style={{ border: "5px solid black" }}
        dangerouslySetInnerHTML={toHtml()}
      ></div>
    </div>
  );
}

export default App;
