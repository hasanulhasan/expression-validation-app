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


function emailValidation(emailInput) {
  var email = document.getElementById("email");
  var issueArr = [];
  if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailInput)) {
    issueArr.push("Enter email format like ab@cd.com");
  }
  if (issueArr.length > 0) {
    email.setCustomValidity(issueArr.join("\n"));
    email.style.borderColor = alertRedInput;
  } else {
    email.setCustomValidity("");
    email.style.borderColor = defaultInput;
  }
}

function postValidation(postInput) {
  var post = document.getElementById("post");
  var issueArr = [];
  if (!/^.{4}$/.test(postInput)) {
    issueArr.push("Post Must be in 4 character");
  }
  if (/[^0-9]/.test(postInput)) {
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

function phoneValidation(phoneInput) {
  var phone = document.getElementById("phone");
  var issueArr = [];
  if (!/^.{11}$/.test(phoneInput)) {
    issueArr.push("Phone Must be in 11 character");
  }
  if (!/^01/.test(phoneInput)) {
    issueArr.push("Should Start with 01");
  }
  if (/[^0-9]/.test(phoneInput)) {
    issueArr.push("Character Must be number");
  }
  if (issueArr.length > 0) {
    phone.setCustomValidity(issueArr.join("\n"));
    phone.style.borderColor = alertRedInput;
  } else {
    phone.setCustomValidity("");
    phone.style.borderColor = defaultInput;
  }
}


// modal
// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onsubmit = function () {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

function test() {
  console.log('submited')
}