document
  .getElementById("contact-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    emailjs.sendForm("service_cfol784", "template_bu8wb2u", this).then(
      function () {
        alert("Message sent successfully!");
      },
      function (error) {
        alert("Oops… something went wrong. Please try again.");
        console.log(error);
      },
    );
  });
