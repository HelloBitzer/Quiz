function auswerten()
{
	var punkte = 0;
	var RB1 = document.fr1.r1;
	
	if (RB1[3].checked)
	{
		punkte = punkte + 10;
	}
	console.log(punkte);
	
	if(document.fr1.r2[2].checked)
	{
		punkte = punkte + 10;
	}
	console.log(punkte);
	
	if (document.fr1.r3[1].checked)
	{
		punkte += 10;
	}
	console.log(punkte);
	
	if (document.fr1.r4[2].checked)
	{
		punkte += 10;
	}
	
	
	else
	{
		punkte -= 5;
	}
	
	console.log(punkte);
	document.fr1.Ausgabe.value = punkte; 
}