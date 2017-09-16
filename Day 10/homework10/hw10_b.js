
function validateform(){
	var firstname = document.getElementById("firstName").value;
	var lastname = document.getElementById("lastName").value;
	var email = document.getElementById("email").value;
	var reEmail = document.getElementById("reEmail").value;
	var password = document.getElementById("password").value;

	function changeBorder(id,color){
		document.getElementById(id).style.border="2px solid "+color;
	}

	function changeReport(id,text){
		document.getElementById(id).innerHTML=text;
	}
	if(firstname==""){
		changeBorder("firstName","red");
		changeReport("noneFirstName","First name is not empty");
		return false;
	}
	else{
		document.getElementById("firstName").style.border="1px solid";
		changeReport("noneFirstName","");
	}

	if(lastname=="")
	{
		changeBorder("lastName","red");
		changeReport("noneFirstName","Last name is not empty");
		return false;
	}
	else{
		document.getElementById("lastName").style.border="1px solid";
		changeReport("noneFirstName","");
	}

	if(email==""){
		changeBorder("email","red");
		changeReport("noneEmail","Your email is not empty");
		return false;
	}
	else{
		document.getElementById("email").style.border="1px solid";
		changeReport("noneEmail","");
	}

	if(reEmail=="")
	{
		changeBorder("reEmail","red");
		changeReport("noneReEmail","Your Re-email is not empty");
		return false;
	}
	else{
		document.getElementById("reEmail").style.border="1px solid";
		changeReport("noneReEmail","");
	}
	if(email != reEmail){
		document.getElementById("noneReEmail").innerHTML="Your email do not match. Please try again";
		return false;
	}
	else{
		document.getElementById("noneReEmail").innerHTML="";
		if(password.length < 6){
			document.getElementById("nonePsw").innerHTML="Passwords must be at least 6 characters";
			return false;
		}
		else{
			document.getElementById("nonePsw").innerHTML="";
			return true;
		}
	}
}
function solve(){
	validateform();
}