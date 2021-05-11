import Quill from "quill";

import { isInsertMode } from "../utils/Utils";
import { insertData } from "./InsertData";
import { updateData } from "./UpdateData";
import { quillConfig } from "../utils/QuillConfig";

export const submitForm = () => {
  const formData = new FormData(myForm);
  if (isInsertMode === "false") {
    const description = document.querySelector(".ql-editor").innerHTML; //This will again append the content of quill in to description if we are fetching  the data
    formData.append("description", description);
  } else {
    let quill = new Quill("#editor-container", quillConfig);

    //Create a new instance of quill in insert page
    let description = quill.root.innerHTML;
    if (description === "<p><br></p>") {
      description = "No Description";
    }
    formData.append("description", description);
  }

  const categoryName = document
    .getElementById("selectBox")
    ?.getAttribute("name");
  if (categoryName) {
    const category = document.querySelector(`select[name=${categoryName}]`)
      .value;

    //Check for others
    const categoryValue =
      category === "others"
        ? document.querySelector(".other-text").value
        : category;
    formData.set(categoryName, categoryValue);
  }

  const object = {};
  formData.forEach(function (value, key) {
    object[key] = value;
  });

  //This is done to set the date to the last month no matter when we submit the form

  object.filterDate = new Date();
  let day = object.filterDate.getDate();
  let month = object.filterDate.getMonth();
  let year = object.filterDate.getFullYear();
  if (day <= 5) {
    day = 30;
    month = month === 0 ? 11 : month - 1;
    if (month === 11) {
      year--;
    }
  } else {
    day = 30;
  }
  month++;
  object.filterDate =
    year.toString() + "-" + month.toString() + "-" + day.toString();

  const url = myForm.action;

  isInsertMode === "false" ? updateData(object) : insertData(object, url);
};
