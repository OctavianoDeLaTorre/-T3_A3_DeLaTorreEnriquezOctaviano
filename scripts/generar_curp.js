function generarCURP () {
	var nombre = document.getElementById('txt_nombre').value;
	var primerAp = document.getElementById('txt_p_ap').value;
	var segundoAp = document.getElementById('txt_s_ap').value;
	var sexo = document.getElementById('rb_h').value;
	var fechaNacimiento = document.getElementById('fecha_nacimiento').value;
	var estado = document.getElementById('cb_estados').selectedIndex;

	
	var CURP = 
		obtnerPrimerLetra(formaterCadena(primerAp))+
		obtenerVocal(formaterCadena(primerAp),1)+
		obtnerPrimerLetra(formaterCadena(segundoAp))+
		obtnerPrimerLetra(nombre)+
		obtnerFecha(fechaNacimiento)+
		obtenerSexo(sexo)+
		obtenerEstado(estado)+
		obtenerConsonate(formaterCadena(primerAp))+
		obtenerConsonate(formaterCadena(segundoAp))+
		obtenerConsonate(nombre)+
		obtenerNumero(fechaNacimiento);

		alert("CURP : " + CURP.toUpperCase());
}

function obtenerNumero(fecha){
	return '0'+fecha.substring(2, 3);
}

function obtenerConsonate(cadena){
	for (var i = 1; i < cadena.length; i++) {
		if(!esVocal(cadena.charAt(i))){
			return cadena.charAt(i);
		}
	}
}

function obtenerEstado(numEstado){
var ENTIDAD_FEDERATIVA_VALOR = ["AS",
                          "BC",
		                  "BS",
                          "CC",
                          "CL",
                          "CM",
                          "CS",
                          "CH",
                          "DF",
                          "DG",
                          "GT",
                          "GR",
                          "HG",
                          "JC",
                          "MC",
                          "MN",
                          "MS",
                          "NT",
                          "NL",
                          "OC",
                          "PL",
                          "QT",
                          "QR",
                          "SP",
                          "SL",
                          "SR",
                          "TC",
                          "TS",
                          "TL",
                          "VZ",
                          "YN",
                          "ZS",
                          "SM",
                          "NE"];
     return ENTIDAD_FEDERATIVA_VALOR[numEstado];
}

function obtenerSexo (sexo) {
	if (sexo == 'on') {
		return 'H';
	} else {
		return 'M';
	}
}

function obtnerFecha (fecha) {
	return fecha.substring(2, 4)+
		fecha.substring(5, 7)+
		fecha.substring(8, 10);
}

function obtnerPrimerLetra(cadena){
	for (var i = 0; i < cadena.length; i++){
		if (cadena.charAt(i) != " ") {
			return cadena.charAt(i);
		}
	}
}


function obtenerVocal(cadena,num) {
	var cont = 0;
	for (var i = 0; i < cadena.length; i++){
		if (esVocal(cadena.charAt(i))) {
			cont++;
			if (cont == num) {
				return cadena.charAt(i);
			}
		}
	}
}

function esVocal(caracter){
	var array = ["A","E","I","O","U"];
	for (var j = 0; j < array.length; j++){
		if(caracter.toUpperCase() == array[j]){
			return true;
		} 
	}

	return false;
}

function formaterCadena (cadena) {
	var res = cadena.split(" ");
	return res[res.length - 1];
}