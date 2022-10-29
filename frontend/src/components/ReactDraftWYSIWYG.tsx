import React, { useState } from "react";
import { Editor } from "react-draft-wysiwyg";
import { EditorState } from "draft-js";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import {stateToHTML} from 'draft-js-export-html';

export default function ReactDraftWYSIWYG() {
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );

  console.log(stateToHTML(editorState.getCurrentContent()));
  return (
    <div>
      <h2>Start editing to see some magic happen!</h2>
      <div 
      style={{ 
        border: "1px solid black", 
        padding: '2px',
        // minHeight: '400px'
      }}
      >
        <Editor
          editorState={editorState}
          onEditorStateChange={setEditorState}
        />
      </div>
    </div>
  );
}