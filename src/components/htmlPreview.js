import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";

const Preview = (props) => (
  <Card>
    <Typography id="text">Preview</Typography>
    <Divider variant="middle" />
    <CardContent
      id="preview"
      dangerouslySetInnerHTML={props.htmlMarkup}
    ></CardContent>
  </Card>
);

export default Preview;
