import React from "react";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";
import "codemirror/mode/xml/xml";
import "codemirror/mode/javascript/javascript";
import "codemirror/mode/css/css";
import "codemirror/addon/edit/closebrackets";
import "codemirror/addon/edit/matchbrackets";
import "codemirror/addon/edit/matchtags";
import "codemirror/addon/fold/foldcode";
import "codemirror/addon/fold/comment-fold";
import "codemirror/addon/hint/javascript-hint";
import "codemirror/addon/hint/show-hint";
import "codemirror/addon/hint/show-hint.css";

import { Controlled as ControlledEditor } from "react-codemirror2";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  codeMirrorWrapper: {
    width: "100%",
    height: "calc(100% - 240px)",
    "& .CodeMirror": {
      boxSizing: "border-box",
      minHeight: "100%",
      fontSize: 16,
      paddingTop: theme.spacing(4),
      paddingLeft: theme.spacing(1),
    },
  },
}));

const CodeEditor = (props) => {
  const classes = useStyles();

  const { language = "javascript", value, onChange } = props;

  function handleChange(editor, data, value) {
    onChange(value);
  }

  return (
    <ControlledEditor
      onBeforeChange={handleChange}
      value={value}
      className={classes.codeMirrorWrapper}
      options={{
        lineWrapping: true,
        lint: true,
        mode: language,
        lineNumbers: true,
        theme: "material",
        tabSize: 2,
        indentWithTabs: true,

        fixedGutter: true,
        coverGutterNextToScrollbar: true,
        extraKeys: { "Ctrl-Space": "autocomplete" },
        scrollbarStyle: "null",
      }}
    />
  );
};

export default CodeEditor;
