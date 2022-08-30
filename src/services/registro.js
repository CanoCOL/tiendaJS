import {
  getAuth,
  createUserWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/9.9.3/firebase-auth.js";

let buttonRegistro = document.getElementById("buttonRegistro");

buttonRegistro.addEventListener("click", function (evento) {
  evento.preventDefault();

  let email = document.getElementById("loginName").value;
  let password = document.getElementById("loginPassword").value;

  console.log(email, password);

  const auth = getAuth();
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      // ...
      alert("registro exitoso");
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
      alert("Ups! fallamos: " + errorMessage);
    });
});
