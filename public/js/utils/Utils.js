import { trim, camelCase } from "lodash";

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
