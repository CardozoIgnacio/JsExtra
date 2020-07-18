const comandos = document.getElementById("botones");
const msjDisparo = document.getElementById("msjDisparo");
const msjObj = document.getElementById("msjObj");
var listoDispara;

// Retorna un entero aleatorio entre min (incluido) y max (excluido)
// ¡Usando Math.round() te dará una distribución no-uniforme!
// Para mas info sobre random
// https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Math/random
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

// La promesa "buscandoBlanco" genera un numero random y luego de 5seg ejecuta una funcion "esPar"
// la funcion "esPar()" que esta dentro del timeout Verifica si el numeo es par o no.Si es par
// Si es par dispara, y sino falla.Enviando los msj correspondientes
buscandoBlanco = new Promise(function preparando(exito, error) {
  var numRandom = getRandomInt(0, 5000);
  setTimeout(function esPar() {
    //pregunto si es par
    if (numRandom % 2 === 0) {
      exito("Objetivo localizado...Listo para disparar");
    } else {
      error("No puedo fijar el objetivo muchos civiles!");
    }
  }, 5000); //desp de 5seg ejecuto la funcion esPar()
});

function disparar() {
  msjDisparo.innerHTML="Rayooo Lassser Disparado"
}
////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////Programe a partir de aca////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////

// Modificar el codigo para reflejar dentro de la pagina si se pudo o no, localizar el objetivo.
// En caso de localizar el objetivo, ejecutar tmb la funcion dispara()....SOLAMENTE SI SE LOCALIZO EL OBJETIVO
buscandoBlanco.then(function exito(msj) {console.log(msj)})
              .catch(function error(msj) {console.log(msj)});
