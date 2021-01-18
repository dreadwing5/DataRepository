Quill.register("modules/imageUploader", ImageUploader);

var quill = new Quill("#editor-container", {
  theme: "snow",
  placeholder: "Add Description here...",
  modules: {
    imageResize: {
      displaySize: true,
    },
    toolbar: "#toolbar-container",
    imageUploader: {
      upload: (file) => {
        return new Promise((resolve, reject) => {
          const formData = new FormData();
          formData.append("image", file);
          fetch(
            "https://api.imgbb.com/1/upload?key=c210567c64bf7b3ef26973176b507bc6",
            {
              method: "POST",
              body: formData,
            }
          )
            .then((response) => response.json())
            .then((result) => {
              console.log(result);
              resolve(result.data.url);
            })
            .catch((error) => {
              reject("Upload failed");
              console.error("Error:", error);
            });
        });
      },
    },
  },
});
