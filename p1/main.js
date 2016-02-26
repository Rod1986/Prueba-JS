var suma = 0;
var fin = "fin";

do {
	var ingreso = prompt("ingresa un número");
	suma = parseInt(ingreso) + suma;
	console.log(suma);

} while (ingreso != fin);
