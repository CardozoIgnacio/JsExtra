const comandos = document.getElementById("botones");
const msj = document.getElementById("msj");
const msjObj = document.getElementById("msjObj")
var apuntado = false;//Variable q indica si se  adquirio un objetivo... siempre arranca en falso

//Funcion que apunta 
function funcTime() {
          apuntado=true;
          msjObj.innerText="Objetivo adquirido...Puede disparar"
}


//ESta funcion la llama el boton apuntar
function apuntar() {
  //SetTimeout va a recibir una funcion y la va ejecutar desp de 5000 mseg == 5seg
  //la funcion "funcTime" esta declarada arriba
  setTimeout(funcTime, 5000);
      msjObj.innerText="Apuntando....."
}

//Esta funcion la llama el boton disparar
function disparar() {
  if (apuntado) {
      msj.innerText="Disparando...objetivo destruido"
  } else {
      msj.innerText="Todavia no hay objetivo fijado..."
  }
}
