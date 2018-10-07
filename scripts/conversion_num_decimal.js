function solicitarNumeroDecimal(){
	var numDecimal = document.getElementById('txt_decimal').value;

	document.getElementById('txt_binario').value = convertirDec_Bin(numDecimal);
	document.getElementById('txt_octal').value = convertirDec_Oct(numDecimal);
	document.getElementById('txt_hexadecimal').value = convertirDec_Hex(numDecimal);
}

function convertirDec_Bin(num){
	return (parseFloat(num)).toString(2);
}

function convertirDec_Oct(num){
	return (parseFloat(num)).toString(8);
}

function convertirDec_Hex(num){
	return (parseFloat(num)).toString(16);
}