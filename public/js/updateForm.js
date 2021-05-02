import axios from "axios";

export const updateForm = () => {
  const formData = new FormData(myForm);
  const quillData = document.querySelector(".ql-editor").innerHTML;
  console.log(quillData);
  let description = quillData;
  if (description === "<p><br></p>") {
    description = "No Description";
  }
  formData.append("description", description);

  const categoryName = document
    .getElementById("selectBox")
    ?.getAttribute("name");
  if (categoryName) {
    const category = document.querySelector(`select[name=${categoryName}]`)
      .value;

    //Check for others
    const categoryValue =
      category === "others"
        ? document.querySelector(".other-text").value
        : category;
    formData.set(categoryName, categoryValue);
  }

  const object = {};
  formData.forEach(function (value, key) {
    object[key] = value;
  });

  object.filterDate = new Date();
  let day = object.filterDate.getDate();
  let month = object.filterDate.getMonth();
  let year = object.filterDate.getFullYear();
  if (day <= 5) {
    day = 30;
    month = month === 0 ? 11 : month - 1;
    if (month === 11) {
      year--;
    }
  } else {
    day = 30;
  }
  month++;
  object.filterDate =
    year.toString() + "-" + month.toString() + "-" + day.toString();

  // console.log(object);
  let params = new URLSearchParams(location.search);
  let event = params.get("name");
  let id = params.get("id");

  const url = `/update/${event}/${id}`;

  const sendPutRequest = async () => {
    // console.log(object);
    try {
      const resp = await axios.put(url, object);
      document.getElementById("alert").style.display = "block";
      document.body.scrollTop = document.documentElement.scrollTop = 0;
      setTimeout(() => window.location.reload(), 2000);
    } catch (err) {
      // Handle Error Here
      console.error(err);
    }
  };

  sendPutRequest();
};
