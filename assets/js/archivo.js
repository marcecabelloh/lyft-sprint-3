
// Intento crear una clase que se llame auto y contenga las coordenadas x e y y que arroje un alert con la posición del auto cuando se mueva
//si bien creo los métodos no se que codificar dentro

function Auto(position_x,position_y){
	this.position_x = parseInt(position_x);
	this.position_y = parseInt(position_y);
	this.avanzar = function(subir){}
	this.ir_izquierda = function(izq){}
	this.ir_derecha = function(der){}
	this.retroceder = function (atrás){}

	this.coordenadas = function(){
		alert(this.position_x + " , " + this.position_y)// intención de desplegar un alert con la posición del auto
	}
}

//intento validar el ingreso de un número de teléfono

var numeroFono = document.getElementById("fono").value;

document.getElementById("boton").addEventListener("click", function(){

	if (!/^([0-9])*$/.test(numeroFono)){
		alert("Debe ser un número válido, ingrese un número de 9 dígitos");
	}
});


//intento que al hacer click en el boton start desaparezca lo que hay y aparezca el tablero

var a = document.getElementById("start");
a.addEventListener("click", function);

function ocultarCaja(){
	document.getElementById("contenido").style.display = "none";//permite ocultar elementos  en este caso el div que contiene los autos y los inputs

//div vacío en donde se desplegará el tablero

var dibujarTablero= document.getElementById("tablero");

/*Función que permite recorrer el arreglo. Sacado del archivo js que venía adjunto, intenté adaptarlo. Debe recorrer la totalidad del arreglo que es de 10x6 
	
function Tablero(){
for(var i = 0; i < this.tablero.length; i++){
			this.tablero[i] = new Array(x);
			for (var j = 0; j < this.tablero[i].length; j++) {
				this.tablero[i][j] = "se encuentra vacío";
			}
		}*/


// Recorrer el arreglo e ir dibujando el tablero en un div creado en js
//no corre

for(var i = 0; i<tablero.length; i++){
	linea = document.createElement("div");
	linea.classList.add("fila");
	for(var j = 0; j<tablero[i].length; j++){
		cuadro = document.createElement("div");
		cuadro.innerHTML = tablero[i][j];
		cuadro.classList.add("cuadro")
		linea.appendChild(cuadro);
	}
	dibujarTablero.appendChild(linea);
}


//intento validar el ingreso de las coordenadas, seguí el ejemplo presente en el archivo del js sin embargo no funciona

document.getElementById("start").addEventListener("click", function(press){
	press.preventDefault();
	var x = document.getElementById("coordenadaX").value;
	var y = document.getElementById("coordenadaY").value;	
	
});




//tengo muchos problemas para ordenarme con js, creo que ese es el problema a la hora de hacer correr el código, están las nociones de como
//resolver las cosas pero no logro llevarlo a la práctica