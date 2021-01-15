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
            } else {
              submitForm(event);
            }
            form.classList.add("was-validated");
          },
          false
        );
      });
    },
    false
  );
})();

function submitForm(event) {
  const formData = new FormData(myForm);
  const description = quill.root.innerHTML;
  formData.append("description", description);
  if (formData.get("category") === "others") {
    formData.set("category", document.querySelector(".other-text").value);
  } else {
    formData.set(
      "category",
      document.querySelector("select[name='category']").value
    );
  }

  const object = {};
  formData.forEach(function (value, key) {
    object[key] = value;
  });

  const json = JSON.stringify(object);
  const url = myForm.action;
  const fetchOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: json,
  };
  fetch(url, fetchOptions);
}
