function calculeer() {
	var getallen = document.getElementById("getallen").value;
	var vermenigvuldiger = document.getElementById("vermenigvuldiger").value;
	
	var resultaat = 0;
	
	var getallenArray = getallen.trim().split(",");
	
	for(var index = 0; index < getallenArray.length; index++) {
		if(index + 1 >= getallenArray.length) {
			break;
		}
		
		var eerste = index == 0 ? getallenArray[0] : resultaat;
		var tweede = getallenArray[index + 1];
		
		resultaat = telOp(parseInt(eerste), parseInt(tweede), vermenigvuldiger);
	}
	
	document.getElementById("output").innerHTML = resultaat;
}

function telOp(getal, getal2, vermenigvuldiger) {
	switch(vermenigvuldiger) {
		case "*":
			return getal * getal2;
		case "+":
			return getal + getal2;
		case "-":
			return getal - getal2;
		case "/":
			return getal / getal2;
		default:
			return "Ongeldige vermenigvuldiger.";
	}
}