function reiniciar(){
	$("#puntosJugador").text("Puntos del jugador: 0");
    $("#puntosMaquina").text("Puntos de la máquina: 0");

    $("#pJugador").text(0);
    $("#pMaquina").text(0);

    //random
    var numero = Math.round(Math.random()+1);

    $("#llavePos").text(numero);
}

function pista(){
	var keyPos = $("#llavePos").text();
          
    $("#cerrada"+keyPos).toggle();
    $("#llave"+keyPos).toggle();
    setTimeout(function () {$("#llave"+keyPos).toggle();}, 1000);
    setTimeout(function () {$("#cerrada"+keyPos).toggle();}, 1000);
}