const dateControl = document.querySelectorAll(".date__control");
const start__date = document.querySelector(".start__date");
const end__date = document.querySelector(".end__date");

//Set Max Date on date fields
if (dateControl) {
  let today = new Date().toISOString().slice(0, 10);
  dateControl.forEach((date) => {
    date.setAttribute("max", today);
  });
}
//make sure that the end date is less than the start date

start__date?.addEventListener("change", () => {
  end__date?.setAttribute("min", start__date.value);
});
