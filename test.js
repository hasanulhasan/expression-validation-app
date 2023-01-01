var alertRedInput = "#8C1010";
var defaultInput = "rgba(10, 180, 180, 1)";

function userNameValidation(usernameInput) {
  var username = document.getElementById("username");
  var issueArr = [];
  if (/[-!@#$%^&*()_+|~=`{}\[\]:";'<>?,.\/]/.test(usernameInput)) {
    issueArr.push("No special characters!");
  }
  if (issueArr.length > 0) {
    username.setCustomValidity(issueArr);
    username.style.borderColor = alertRedInput;
  } else {
    username.setCustomValidity("");
    username.style.borderColor = defaultInput;
  }
}
