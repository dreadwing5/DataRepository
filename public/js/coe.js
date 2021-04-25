"use strict";
let flag = 1;
const select = document.getElementById("select");

const sendGetRequest = async () => {
  try {
    const resp = await axios.get("/coe");
    for (const { name } of resp.data) {
      let option = document.createElement("option");
      option.value = name;
      option.text = name.charAt(0).toUpperCase() + name.slice(1);
      select.appendChild(option);
      flag = 0;
    }
  } catch (err) {
    console.error(err);
  }
};

select.addEventListener("click", () => {
  if (flag === 1) {
    sendGetRequest();
  }
});
