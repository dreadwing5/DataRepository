import Quill from "quill";
import ImageUploader from "quill-image-uploader";
import ImageResize from "quill-image-resize";
import { quillConfig } from "./QuillConfig";

Quill.register("modules/imageUploader", ImageUploader);
Quill.register("modules/imageResize", ImageResize);

export const isInsertMode = document.getElementById("myForm")?.dataset
  .isinsertmode;

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

if (isInsertMode === "true") {
  quillConfig.placeholder = "Add Description Here..";
  //Create a new instance of quill in insert page
}

export const quill = new Quill("#editor-container", quillConfig);
