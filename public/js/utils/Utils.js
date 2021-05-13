import { trim, camelCase, startCase } from "lodash";
import Quill from "quill";

import ImageUploader from "quill-image-uploader";
import ImageResize from "quill-image-resize";

Quill.register("modules/imageUploader", ImageUploader);
Quill.register("modules/imageResize", ImageResize);

import { quillConfig } from "./QuillConfig";

export const isInsertMode =
  document.getElementById("myForm")?.dataset.isinsertmode;

/* Show the column name in report page */
const column__names = document.querySelectorAll(".column__name");
column__names?.forEach((name) => {
  let columnName = name.dataset.column__name;
  name.innerHTML = startCase(columnName);
});
/* Show the column data in report page */
const column__data = document.querySelectorAll(".column__data");

column__data?.forEach((data) => {
  let columnData = data.dataset.column__data;
  data.innerHTML = columnData ? columnData : "NA";
});

/* Handle Description here */

const table__footer = document.querySelector(".table__footer");

/* Check for undefined case and parse the value */
const isDescriptionRequired =
  table__footer && JSON.parse(table__footer.dataset.isdescriptionrequired);

console.log("isDescriptionRequired", isDescriptionRequired);
if (isDescriptionRequired) {
  const table__description = document.querySelectorAll(".table__description"); //get all the description table
  table__description.forEach((table) => {
    const footer = table.closest(".table__footer"); //find the footer class related to that table
    footer.style.display = ""; //Show the description field
    table.innerHTML = table.dataset.description; //Fill the data for description
  });
}

/* Description End here */

/* Handle Table Name Here */

const tables = document.querySelectorAll(".table__row");
tables?.forEach((table) => {
  const report__title = table.previousElementSibling;
  report__title.style.display = "";
});

// const report__title = document.querySelectorAll(".report-title");
// report__title?.forEach((title) => {
//   console.log(title);
//   console.log(title.querySelector(".row"));
// });

if (isInsertMode === "true") {
  quillConfig.placeholder = "Add Description Here..";
  let quill = new Quill("#editor-container", quillConfig);

  //Create a new instance of quill in insert page
}

const editData = (row) => {
  // let eventName = row.dataset.mod;
  let id = row.closest(".table").rows[1].cells[1].innerText.trim(" ");
  let eventID = row.closest(".table").dataset.id;
  let eventName = document.getElementById(`event-name-${eventID}`).innerText;
  eventName = trim(camelCase(eventName), "Report");
  console.log(eventName);
  window.location.href = `/edit?name=${eventName}&id=${id}`;
};

const deleteData = (row) => {
  let data = row.closest(".table"); //This will select the entire table
  data.remove();
};

const table__data = document.querySelector(".table__data");
table__data?.addEventListener("click", (e) => {
  e.preventDefault();
  //Matching Strategy
  if (e.target.classList.contains("edit__entry")) {
    editData(e.target);
  }
  if (e.target.classList.contains("delete__entry")) {
    deleteData(e.target);
  }
});
