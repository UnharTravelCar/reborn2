document.getElementById("infoForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent the default form submission

  var name = document.getElementById("nameInput").value;
  var email = document.getElementById("emailInput").value;
  var info = document.getElementById("infoInput").value;

  // Send the information to another company (AJAX request)
  sendInformation(name, email, info);
});

function sendInformation(name, email, info) {
  // Simulate AJAX request
  setTimeout(function() {
    var responseSection = document.getElementById("responseSection");
    var responseMessage = document.getElementById("responseMessage");

    responseMessage.textContent = "Informasi telah dikirim ke perusahaan lain.";
    responseSection.style.display = "block";
  }, 2000);
}
