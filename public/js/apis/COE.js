import axios from "axios";

let flag = 1;
export const sendGetRequest = async () => {
  if (flag === 0) return; //Stop the dropdoen from sending multiple get
  try {
    const resp = await axios.get("/dropdown/coe");
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
