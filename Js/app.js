var container = document.querySelector(".container");
var inUser = document.getElementById("inUser");
var inPass = document.getElementById("inPass");
var upUser = document.getElementById("upUser");
var upFrist = document.getElementById("upFrist");
var upLast = document.getElementById("upLast");
var upEmail = document.getElementById("upEmail");
var upPass = document.getElementById("upPass");
var upPassRe = document.getElementById("upPassRe");
var sign_in_btn = document.querySelector("#sign-in-btn");
var sign_up_btn = document.querySelector("#sign-up-btn");
var formIn = document.getElementById("formIn");
var formUp = document.getElementById("formUp");

sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});
var simulateClick = function (elem) {
  var evt = new MouseEvent("click", {
    bubbles: true,
    cancelable: true,
    view: window,
  });
  var canceled = !elem.dispatchEvent(evt);
};
formUp.addEventListener("submit", function (e) {
  e.preventDefault();
  function regex() {
    var passw = /^(?=.*[a-z])[a-zA-Z0-9]{8,}$/;
    if (upPass.value.match(passw)) {
      return true;
    } else {
      document.getElementById("Message").style.color = "Red";
      document.getElementById("Message").innerHTML = `<ul>
      <li>Minimum eight in length</li>
      <li>At least one letter</li>
      <li>At least one number</li>
      </ul>`;
      return false;
    }
  }
  if (regex() && upPass.value === upPassRe.value) {
    simulateClick(sign_in_btn);
    localStorage.setItem("Fristname", upFrist.value);
    localStorage.setItem("Lastname", upLast.value);
    localStorage.setItem(upUser.value, "Username");
    localStorage.setItem(upEmail.value, "Email");
    localStorage.setItem(upPass.value, "Password");
  } else if (upPass.value !== upPassRe.value) {
    e.preventDefault();
    document.getElementById("Message").style.color = "Red";
    document.getElementById("Message").innerHTML = "Passwords do NOT match!";
  }
});
formIn.addEventListener("submit", function (event) {
  if (
    localStorage.getItem(inUser.value) &&
    localStorage.getItem(inPass.value)
  ) {
  } else {
    event.preventDefault();
    document.getElementById("Message1").style.color = "Red";
    document.getElementById("Message1").innerHTML =
      "Incorrect Username or Password";
  }
});
