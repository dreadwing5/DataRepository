import axios from "axios";

export const insertData = async (data, url) => {
  try {
    const resp = await axios.post(url, data);
    document.getElementById("alert").style.display = "block";
    document.body.scrollTop = document.documentElement.scrollTop = 0;
    setTimeout(() => window.location.reload(), 2000);
  } catch (err) {
    // Handle Error Here
    console.error(err);
  }
};
