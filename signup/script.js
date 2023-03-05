function validate() {
  let firstname = document.getElementById("fname");
  let lastname = document.getElementById("lname");
  let email = document.getElementById("email");
  let pass = document.getElementById("pass");
  let passr = document.getElementById("passr");
  console.log("inside", firstname, lastname, email);
  if (
    firstname.value.trim() == "" ||
    lastname.value.trim() == "" ||
    email.value.trim() == "" 
  ) {
    alert("input fields cannot be empty");
    return false;
  } else if (firstname.value.trim().length < 5) {
    alert("username must be of 5 characters");
    return false;
  } else if (lastname.value.trim().length < 2) {
    alert("last name must be of 2 characters");
    return false;
  } else if (pass.value.trim().length < 5) {
    alert("password must be 5 characters or more");
  } else if (passr.value.trim().length < 5) {
    alert("confirm password must be same");
  } else if (pass.value !== passr.value) {
    alert("password did not match");
  } else {
    localStorage.setItem(
      email.value,
      JSON.stringify({
        firstname: firstname.value,
        lastname: lastname.value,
        email: email.value,
        password: pass.value,
      })
    );
    return window.open(window.location.href.replace("signup", "login"));
  }
}
