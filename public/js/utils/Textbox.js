//Javascript for showing TextBox if users select other option

const selectBox = document.getElementById("selectBox");

selectBox?.addEventListener("click", () => {
  const selectedValue = selectBox?.options[selectBox.selectedIndex].value;
  if (selectedValue === "others") {
    document.getElementById("textboxes").style.display = "block";
  } else {
    document.getElementById("textboxes").style.display = "none";
  }
});
