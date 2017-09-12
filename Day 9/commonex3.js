

function yourname() {
	var username = document.getElementById("name").value;

	document.getElementById("urname").innerHTML = username;
	document.getElementById("stringLength").innerHTML = username.length;

	var pos=username.indexOf(" ");
	text1=username.slice(0,pos);

	var pos2=username.lastIndexOf(" ");
	text2=username.slice(pos2);

	var text3=text1+" PHP09"+text2;
	document.getElementById("index").innerHTML = text3;
	
	document.getElementById("search").innerHTML = username.search("n");

	document.getElementById("upperCase").innerHTML = username.toUpperCase();

	document.getElementById("lowerCase").innerHTML = username.toLowerCase();

	document.getElementById("cut").innerHTML = username.slice(pos);

}
