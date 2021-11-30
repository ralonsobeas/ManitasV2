var puntosJugador=0;
var puntosMaquina=0;
var bloqueado = false;

function clickMano(id){
	  if(bloqueado){
      	return;
    }

    puntosJugador = parseInt($("#pJugador").text());
    puntosMaquina = parseInt($("#pMaquina").text());

    if(encontrarLlave(id)==true){
      	puntosJugador+=1;
      	$("#puntosJugador").text("Puntos del jugador: " + puntosJugador);
      	$("#pJugador").text(puntosJugador);
  	}
  	else{
		puntosMaquina+=1;
		$("#puntosMaquina").text("Puntos de la máquina: " + puntosMaquina);
		$("#pMaquina").text(puntosMaquina);
	}

    //random
    var numero = Math.round(Math.random()+1);

    $("#llavePos").text(numero);
}

function encontrarLlave(id){
  	bloqueado = true;

  	$("#cerrada"+id).toggle();
    setTimeout(function () {$("#cerrada"+id2).toggle();}, 1000);

  	var id2 = (id == '1') ? 2 : 1;

  	var acierto = ($("#llavePos").text()==id);

  	if(acierto){
    		$("#llave"+id).toggle();
      	setTimeout(function () {$("#abierta"+id2).toggle();}, 1000);

    		setTimeout(function () {$("#llave"+id).toggle();}, 2000);
      	setTimeout(function () {$("#abierta"+id2).toggle();}, 2000);
    }
  	else{
    		$("#abierta"+id).toggle();
      	setTimeout(function () {$("#llave"+id2).toggle();}, 1000);

    		setTimeout(function () {$("#abierta"+id).toggle();}, 2000);
      	setTimeout(function () {$("#llave"+id2).toggle();}, 2000);
    }
    setTimeout(function () {$("#cerrada"+id).toggle(); $("#cerrada"+id2).toggle(); bloqueado = false;}, 2000);

    return acierto;
}
