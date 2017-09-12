
function yournumber() {
	var x=document.getElementById("number").value;
	document.getElementById("numbername").innerHTML = x;

	var number_array = new Array();
	var muoilam_array = new Array();
	
	for(var i=0;i<=x;i++)
	{
		number_array[i]=i;
		document.getElementById("for").innerHTML = number_array.join(" ");
		if(i%15==0)
		{
			muoilam_array[i]="MUOI LAM";
			if(i%5==0)
			{
				muoilam_array[i]="NAM MUOI LAM";
				if(i%3==0)
				{
					muoilam_array[i]="BA NAM MUOI LAM";
				}
			}
		}
		else
		{
			if(i%5==0)
			{
				muoilam_array[i]="NAM";
				if(i%3==0)
				{
					muoilam_array[i]="BA NAM";
				}
			}
			else
			{
				if(i%3==0) 
				{
					muoilam_array[i]="BA";
				}
				else
				{
					muoilam_array[i]=i;
				}
			}
		}
		document.getElementById("ba").innerHTML = muoilam_array.join(" - ");

	}
	
}
