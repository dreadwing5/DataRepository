import axios from "axios";

export const sendGetRequest = async (tableName) => {
  try {
    const resp = await axios.get(`/dropdown/${tableName}`);
    for (const { name } of resp.data) {
      let option = document.createElement("option");
      option.value = name;
      option.text = name.charAt(0).toUpperCase() + name.slice(1);
      select.appendChild(option);
    }
  } catch (err) {
    console.error(err);
  }
};
