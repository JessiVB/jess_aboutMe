
document.addEventListener("DOMContentLoaded", function (event) {
  let callMebtn = document.getElementById("callMe");
  let findMebtn = document.getElementById("findMe");

  function callMe() {
    alert("Send me an em for my phone number!");
  }
  function findMe() {
    alert("Don't be a creeper, you don't need to know where I live " + String.fromCodePoint(128064));
  }

  callMebtn.addEventListener("click", callMe);
  findMebtn.addEventListener("click", findMe);
});

// var userName = prompt("What is your name?");
// alert("Nice to meet you, " + userName + ". Enjoy my 'About Me' page!");
