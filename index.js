

function on() {
  document.getElementById("overlay").style.display = "block";
  document.getElementById("box_type1").style.display = "none";
}

function off() {
  document.getElementById("overlay").style.display = "none";
  document.getElementById("box_type1").style.display = "none";
}



function func() {
  var correct_way =/^[A-Z a-z]+$/;

  var a=document.myform.fname.value;
 
  if (a=="") {
    document.getElementById ("message").innerHTML="please fill first name";
    return false;
  }

  if (a.length<3) {
    document.getElementById ("message").innerHTML="user name must be 3 character";
    return false;
  }
  if (a.length>20) {
    document.getElementById ("message").innerHTML="user name must be less than 20 characters";
    return false;
  }
  if (a.match (correct_way)) {
    true;}
    else {
    document.getElementById ("message").innerHTML="only alphebets  are allowed";
    return false;
  }




  var b=document.getElementById("lname").value;
  // var currect_way =/^[A-Z a-z]+$/;
  
    if (b==""){
      document.getElementById("message1").innerHTML="please fill first name";
      return false;
    }
  
    if (b.length<3){
      document.getElementById("message1").innerHTML="user name must be 3 character";
      return false;
    }
    if (b.length>20){
      document.getElementById("message1").innerHTML="user name must be less than 20 characters";
      return false;
    }
   



    var c=document.myform.email.value;
    if(c.indexOf('@')<=0) {
      document.getElementById("messageMail").innerHTML="invalid@position";
      return false;
    }
    if((c.charAt (c.length-4)!='.') && (c.charAt(c.length-3)!='.')) {
      document.getElementById("messageMail").innerHTML="invalid.position";
      return false;
    }



    var x=document.getElementById("number").value;
    if (x=="") {
      document.getElementById("messageNumber").innerHTML="please fill mobile number";
      return false;
    }
    if (isNaN(x)){
      document.getElementById("messageNumber").innerHTML="enter only numeric value";
      return false;
    }
    if (x.length<10){
      document.getElementById("messageNumber").innerHTML="mobile number must 10 digits";
      return false;
    }
    if (x.length>10){
      document.getElementById("messageNumber").innerHTML="mobile number must be less than 10 digits";
      return false;
    }
    if ((x.charAt (0) !=9) && (x.charAt(0) !=8) && (x.charAt(0)!=7)){
      document.getElementById("messageNumber").innerHTML="mobile number must  start with 8, 9 and 7";
      return false;
    }





    var z=document.myform.msg.value;
   
    if (z=="") {
      document.getElementById ("Message").innerHTML="please fill message name";
      return false;
    }
  
    if (z.length<10) {
      document.getElementById ("Message").innerHTML="messages must be 10 words";
      return false;
    }
   
  
}

