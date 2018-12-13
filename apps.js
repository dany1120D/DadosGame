// 
//document.querySelector("#boton").addEventListener('click', function () {
//	alert("coshi  Coshi");
//})

//evento del rol
var acumuladora = 0;
var valor = 0;
var estado = 1;
var resultado = 0;
var resultado1 = 0;
document.querySelector("#roll").addEventListener('click', function () {

	let num = Math.floor(Math.random() * (6) + 1);
	resultado = num;
	document.getElementById("dice").src = `dice-${resultado}.png`;
	if (estado == 1) {
		document.querySelector(".player-0-panel").classList.add('active');
		//	document.getElementById("resultado").innerHTML = resultado;
		if (resultado > 1) {
			//		console.log(resultado);
			acumuladora += resultado;
			document.getElementById("current-0").innerHTML = acumuladora;
			//
			//		document.getElementById("current-0").innerHTML = acumuladora;
			//		console.log(acumuladora);
		} else {
			document.querySelector(".player-0-panel").classList.remove('active');
		document.querySelector(".player-1-panel").classList.add('active')
			alert("PErdistePerro");
			acumuladora = 0;
			estado = 2;
			resultado = 0;
			resultado1 = 0;
			document.getElementById("current-0").innerHTML = resultado;

		}

	} else {
		document.querySelector(".player-1-panel").classList.add('active');

		let num = Math.floor(Math.random() * (6) + 1);
		resultado1 = num;
		document.getElementById("dice").src = `dice-${resultado}.png`;



		//	document.getElementById("resultado").innerHTML = resultado;
		if (resultado1 > 1) {





			//		console.log(resultado);
			acumuladora += resultado1;
			document.getElementById("current-1").innerHTML = acumuladora;



			//
			//		document.getElementById("current-0").innerHTML = acumuladora;
			//		console.log(acumuladora);



		} else {

			document.querySelector(".player-1-panel").classList.remove('active');
		document.querySelector(".player-0-panel").classList.add('active');
			alert("PErdistePerro");
			acumuladora = 0;
			estado = 1;
			resultado = 0;
			resultado1 = 0;
			document.getElementById("current-1").innerHTML = resultado1;
		}

	}
})


document.querySelector("#hold").addEventListener('click', function () {

	if (estado == 1) {
		document.querySelector(".player-0-panel").classList.remove('active');
		document.querySelector(".player-1-panel").classList.add('active');
		valor += acumuladora;
		document.getElementById("score-0").innerHTML = valor;
		acumuladora = 0;
		estado = 2;
		if (valor >= 100) {
			alert("Jugador1 es campeon con " + valor + " puntos");
			location.href = "index.html";

		}
		resultado = 0;
		resultado1 = 0;
		document.getElementById("current-0").innerHTML = resultado;

	} else {
		document.querySelector(".player-1-panel").classList.remove('active');
		document.querySelector(".player-0-panel").classList.add('active');
		valor += acumuladora;
		document.getElementById("score-1").innerHTML = valor;
		acumuladora = 0;
		estado = 1;
		if (valor >= 100) {
			alert("Jugador2 es campeon con " + valor + " puntos");
			location.href = "index.html";

		}
		resultado = 0;
		resultado1 = 0;
		document.getElementById("current-1").innerHTML = "0";


	}



	//	console.log(acumuladora);




})
document.querySelector("#nuevo").addEventListener('click', function () {
	location.href = "index.html";

})
