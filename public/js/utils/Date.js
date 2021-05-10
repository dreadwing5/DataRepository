const dateControl = document.querySelectorAll(".date__control");
const startDate = document.querySelector(".start__date");

//Set Max Date on date fields
if (dateControl) {
  let today = new Date().toISOString().slice(0, 10);
  dateControl.forEach((date) => {
    date.setAttribute("max", today);
  });
}

//make sure that the end date is less than the start date

startDate?.addEventListener("change", () => {
  let sDate = document.getElementsByName("startDate")[0];
  sDate = sDate?.value;
  let eDate = document.getElementsByName("endDate")[0];
  eDate?.setAttribute("min", sDate);
});
