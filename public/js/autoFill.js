import Quill from "quill";
import ImageUploader from "quill-image-uploader";
import ImageResize from "quill-image-resize";
import { quillConfig } from "./quillConfig";
import $ from "jquery";

Quill.register("modules/imageUploader", ImageUploader);
Quill.register("modules/imageResize", ImageResize);

let variableJSON = $("#variableJSON")?.text();

if (variableJSON) {
  const data = JSON.parse(variableJSON);
  for (const [key, value] of Object.entries(data)) {
    if (key !== "id") {
      if (key === "description") {
        let quill = new Quill("#editor-container", quillConfig);
        quill.clipboard.dangerouslyPasteHTML(0, value);
      }
      document.getElementsByName(key)[0].value = value;
    }
  }
}
