import axios from "axios";

export const updateData = async (data) => {
  // console.log(object);
  try {
    let params = new URLSearchParams(location.search);
    let event = params.get("name");
    let id = params.get("id");

    const updateUrl = `/update/${event}/${id}`;
    const resp = await axios.put(updateUrl, data);
    document.getElementById("alert").style.display = "block";
    document.body.scrollTop = document.documentElement.scrollTop = 0;
    setTimeout(() => window.location.reload(), 2000);
  } catch (err) {
    // Handle Error Here
    console.error(err);
  }
};
