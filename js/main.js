const sbutton = document.getElementById("sub");
const name1 = document.getElementById("name");
const mail = document.getElementById("mail");
const phone = document.getElementById("phone");
const message = document.getElementById("message");
const message2 = document.getElementById("ty");

sbutton.addEventListener("click", function () {
  let fillIn = name1.value && mail.value && phone.value && message.value;
  if (fillIn !== "") {
    message2.style.opacity = 1;
  } else {
    message2.style.opacity = 0;
  }
});
