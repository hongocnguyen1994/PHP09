function bookingroom() {
	var nguoilon=document.getElementById("nguoilon").value;
	var treem=document.getElementById("treem").value;
	var ngayden=document.getElementById("ngayden").value;
	var ngaydi=document.getElementById("ngaydi").value;
	var day= new Date().setDate();
	var month= new Date().setMonth()+1;
	var year= new Date().setFullYear();
	if(treem>nguoilon)
	{
		document.getElementById("thongbao1").innerHTML = "Số trẻ em không được lớn hơn số người lớn";
	}
	if(nguoilon<=0)
	{
		document.getElementById("thongbao2").innerHTML = "Số người lớn phải lớn hơn 0";
	}
	if(ngayden.setFullYear()<year) {document.getElementById("thongbao3").innerHTML = "Ngày đến phải lớn hơn hoặc bằng ngày hiện tại";}
	else
	{
		if(ngayden.setMonth()+1<month) {document.getElementById("thongbao3").innerHTML = "Ngày đến phải lớn hơn hoặc bằng ngày hiện tại";}
		else {if(ngayden.setDate()<day) {document.getElementById("thongbao3").innerHTML = "Ngày đến phải lớn hơn hoặc bằng ngày hiện tại";}}
	}
	if(ngaydi<ngayden)
	{
		document.getElementById("thongbao4").innerHTML = "Ngày đi phải lớn hơn hoặc bằng ngày đến";	
	}
}
