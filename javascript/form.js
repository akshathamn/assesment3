function validateForm() {
  var fname = document.myForm.fname.value;
  var lname = document.myForm.lname.value;
  var email = document.myForm.email.value;
  var number = document.myForm.number.value;
  var address1 = document.myForm.address1.value;
  var address2 = document.myForm.address2.value;
  var city = document.myForm.city.value;
  var state = document.myForm.state.value;
  var number2 = document.myForm.number2.value;
  var psw = document.myForm.psw.value;
  var vpsw = document.myForm.vpsw.value;
  if (fname == "") {
    document.getElementById("demo1").innerHTML="FirstName cannot be blank";
    document.getElementById("input1").style.border="1px solid red";
    document.getElementById("name1").style.color="red";
  }
  if (lname == "") {
    document.getElementById("demo2").innerHTML="LastNmae cannot be blank";
    document.getElementById("input2").style.border="1px solid red";
    document.getElementById("name2").style.color="red";  
  }
  if (email == "") {
    document.getElementById("demo3").innerHTML="Email cannot be blank";
    document.getElementById("input3").style.border="1px solid red";
    document.getElementById("email").style.color="red";    
  }
  if (number == "") {
    document.getElementById("demo4").innerHTML="PhoneNumber cannot be blank";
    document.getElementById("input4").style.border="1px solid red";
    document.getElementById("phnum").style.color="red";   
  }
  if (address1 == "") {
    document.getElementById("demo5").innerHTML="Street cannot be blank";
    document.getElementById("input5").style.border="1px solid red";
    document.getElementById("street1").style.color="red";   
  }
  if (address2 == "") {
    document.getElementById("demo6").innerHTML="Street Address cannot be blank";
    document.getElementById("input6").style.border="1px solid red";
    document.getElementById("street2").style.color="red";   
  }
  if (city == "") {
    document.getElementById("demo7").innerHTML="City cannot be blank";
    document.getElementById("input7").style.border="1px solid red"; 
    document.getElementById("city").style.color="red";  
  }
  if (state == "") {
    document.getElementById("demo8").innerHTML="State can't be blank";
    document.getElementById("input8").style.border="1px solid red"; 
    document.getElementById("state").style.color="red";  
  }
  if (number2 == "") {
    document.getElementById("demo9").innerHTML="Zip cannot be blank";
    document.getElementById("input9").style.border="1px solid red"; 
    document.getElementById("zip").style.color="red";  
  }
  if (psw == "") {
    document.getElementById("demo10").innerHTML="Password cannot be blank";
    document.getElementById("input10").style.border="1px solid red";
    document.getElementById("password").style.color="red";   
  }
   if (vpsw == "") {
    document.getElementById("demo11").innerHTML="Verify Password cannot be blank";
    document.getElementById("input11").style.border="1px solid red";
    document.getElementById("vpassword").style.color="red";
}
}