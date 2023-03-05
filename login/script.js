function validate() {
  let emailid = document.getElementById("email");
  let password = document.getElementById("pass");
  const currentUserData = localStorage.getItem(emailid.value);
  if (!currentUserData) {
    alert("User doesnot exist");
  } else if (JSON.parse(currentUserData).password !== password.value) {
    alert("wrong login credentials");
  } else {
    localStorage.setItem("userLoggedIn", "true");
    return window.open(window.location.href.replace("login", "shop"));
  }
}
