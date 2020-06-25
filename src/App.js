import React, { useState } from "react";
import "./App.css";
import Grid from "@material-ui/core/Grid";
import Preview from "./components/htmlPreview";
import { withStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import TextField from "@material-ui/core/TextField";

const styles = (theme) => ({
  container: {
    alignItems: "center",
    height: "100vh",
  },

  text: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
});
const placeholder = `# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:
  
Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`
  
You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.com), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | ------------- 
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbered lists too.
1. Use just 1s if you want! 
1. But the list goes on...
- Even if you use dashes or asterisks.
* And last but not least, let's not forget embedded images:

![React Logo w/ Text](https://goo.gl/Umyytc)
`;

let marked = require("marked");

function App({ classes }) {
  const [input, setInput] = useState(placeholder);

  function toHtml() {
    var markUp = marked(input, { sanitizer: true });
    return { __html: markUp };
  }
  return (
    <Grid
      className={classes.container}
      justify="center"
      id="quote-box"
      container
      spacing={3}
    >
      <Grid item xs={6} sm={6}>
        <TextField
          id="editor"
          label="Multiline"
          multiline
          rows={4}
          value={input}
          variant="outlined"
          onChange={(e) => setInput(e.target.value)}
          fullWidth
        />
      </Grid>
      <Grid item xs={6} sm={6}>
        <Box width="75%">
          <Preview htmlMarkup={toHtml()} />
        </Box>
      </Grid>
    </Grid>
  );
}

export default withStyles(styles)(App);
