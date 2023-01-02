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

// function passwordValidation(passwordInput) {
//   var password = document.getElementById("password");
//   var issueArr = [];
//   if (!/^.{7,15}$/.test(passwordInput)) {
//     issueArr.push("Password must be between 7-15 characters.");
//   }
//   if (!/\d/.test(passwordInput)) {
//     issueArr.push("Must contain at least one number.");
//   }
//   if (!/[a-z]/.test(passwordInput)) {
//     issueArr.push("Must contain a lowercase letter.");
//   }
//   if (!/[A-Z]/.test(passwordInput)) {
//     issueArr.push("Must contain an uppercase letter.");
//   }
//   if (issueArr.length > 0) {
//     password.setCustomValidity(issueArr.join("\n"));
//     password.style.borderColor = alertRedInput;
//   } else {
//     password.setCustomValidity("");
//     password.style.borderColor = defaultInput;
//   }
// }

function postValidation(postInput) {
  var post = document.getElementById("post");
  var issueArr = [];
  if (!/^.{4}$/.test(postInput)) {
    issueArr.push("Post Must be in 4 character");
  }
  if (!/^[0-9]/.test(postInput)) {
    issueArr.push("Post Must in number");
  }
  if (issueArr.length > 0) {
    post.setCustomValidity(issueArr.join("\n"));
    post.style.borderColor = alertRedInput;
  } else {
    post.setCustomValidity("");
    post.style.borderColor = defaultInput;
  }
}