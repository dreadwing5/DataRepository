"use strict";

const setMaxDate = () => {
  const dateControl = document.querySelectorAll('input[type="date"]');
  let today = new Date().toISOString().slice(0, 10);
  dateControl.forEach((date) => {
    date.setAttribute("max", today);
  });
};
setMaxDate();

const setDate = () => {
  let sDate = document.getElementsByName("startDate")[0];
  if (sDate) {
    sDate = sDate.value;
    let eDate = document.getElementsByName("endDate")[0];
    eDate.setAttribute("min", sDate);
  }
};
