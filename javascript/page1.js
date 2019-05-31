function login() {
  document.getElementById("myForm").style.display = "block";
}

// function closeForm() {
//   document.getElementById("myForm").style.display = "none";
// }
// function myFunction() {
//   alert("The form was submitted");
//   }
 // function validateForm() {
 //        var un = document.loginform.usr.value;
 //        var pw = document.loginform.pword.value;
 //        var username = "username"; 
 //        var password = "password";
 //        if ((un == username) && (pw == password)) {
 //            window.location = "main.html";
 //            return false;
 //        }
 //        else {
 //            alert ("Login was unsuccessful, please check your username and password");
 //        }
 //      }
      (function() {
'use strict';
window.addEventListener('load', function() {
// Fetch all the forms we want to apply custom Bootstrap validation styles to
var forms = document.getElementsByClassName('needs-validation');
// Loop over them and prevent submission
var validation = Array.prototype.filter.call(forms, function(form) {
form.addEventListener('submit', function(event) {
if (form.checkValidity() === false) {
event.preventDefault();
event.stopPropagation();
}
form.classList.add('was-validated');
}, false);
});
}, false);
})();