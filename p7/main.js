function Telefono (marca, color, llamadas){
	this.marca = marca;
	this.color = color;
	this.llamadas = 0;
	this.marcar = function (){
		llamadas +=1;
		};
}

function Todos() {
	marcas_fonos = [];
	marcas_fonos_alcatel = [];
	marcas_fonos_apple = [];
	marcas_fonos_samsung = [];
	marcas_fonos_windows = [];
	marcas_fonos_android = [];

Juntar = function (telefono)