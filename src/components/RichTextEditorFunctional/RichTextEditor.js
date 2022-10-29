import {Editor, EditorState} from 'draft-js';
import { useState } from 'react';

// import '../../components/RichTextEditor.css'
// import '../../../node_modules/draft-js/dist/Draft.css'
import {stateToHTML} from 'draft-js-export-html';

const MyInput = () => {
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty(),
  );

  console.log(stateToHTML(editorState.getCurrentContent()));

  return (
    <div className="RichEditor-root">
  <Editor
    editorState={editorState} 
    onChange={setEditorState} 
    />
    </div>
  );
};

export default MyInput