import Quill from "quill";
import { quillConfig } from "./QuillConfig";
import { isInsertMode } from "./Utils";

let data = document.querySelector("#variableJSON")?.textContent;

if (isInsertMode === "false") {
  for (const [key, value] of Object.entries(JSON.parse(data))) {
    // console.log(key, value);
    if (key !== "id") {
      //Since we don't have id in frontend
      if (key === "description") {
        //new instance of quill in edit page
        let quill = new Quill("#editor-container", quillConfig);
        quill.clipboard.dangerouslyPasteHTML(0, value); //paste the description to quill editor
      }
      document.getElementsByName(key)[0].value = value;
    }
  }
}
