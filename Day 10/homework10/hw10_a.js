function solve() {
	var str = document.getElementById("sample").innerHTML;
	var text = document.getElementById("textname").value;
	var textChange = "<span style=\"background-color:yellow\">"+text+"</span>";
	document.getElementById("sample").innerHTML= str.replace(new RegExp(text,'g'),textChange);
 }	

