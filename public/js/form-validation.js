"use strict";

(function () {
  window.addEventListener(
    "load",
    function () {
      // Fetch all the forms we want to apply custom Bootstrap validation styles to
      var forms = document.getElementsByClassName("needs-validation");
      // Loop over them and prevent submission
      var validation = Array.prototype.filter.call(forms, function (form) {
        form.addEventListener(
          "submit",
          function (event) {
            if (form.checkValidity() === false) {
              event.preventDefault();
              event.stopPropagation();
              form.classList.add("was-validated");
            } else {
              submitForm(event);
            }
          },
          false
        );
      });
    },
    false
  );
})();

function submitForm(event) {
  event.preventDefault();
  const formData = new FormData(myForm);
  let description = quill.root.innerHTML;
  if (description === "<p><br></p>") {
    description = null;
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

  console.log(object);

  const url = myForm.action;
  axios({
    method: "post",
    url: url,
    data: object,
  }).then(function (response) {
    document.getElementById("alert").style.display = "block";
    document.body.scrollTop = document.documentElement.scrollTop = 0;
    setTimeout(() => window.location.reload(), 2000);
  });
}
