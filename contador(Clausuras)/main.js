const divBotones = document.getElementById("botones");
const cantidadBotones = document.getElementById("cantidad")
const contador = document.getElementById("contador")
const boton = document.getElementById("generar")
function generar(){
    crearBotones(parseInt(cantidadBotones.value));
    cantidadBotones.value=""
    boton.disabled=true//Desactiva el boton para no generar mas botenes
}

//La funcion sumar creo una clausura con la variable valor, entonces al forma una clausura se lleva una "referencia"
//es decir todos los botones guardan el valor en la misma variable.En este caso la  variable se llama valor
function crearBotones(num){
    var valor=0 //Esta variable es la que "lleva" la funcion sumar() 
    for (let i = 0; i < num; i++) {
        //Si la defincion de valor la realizo dentro del ciclo for con un let, cada boton va tener su propio contador
        //recordar comentar el "var valor = 0"
        //let valor =0
        var boton = document.createElement("button")
        boton.innerHTML="Sumar "+i
        boton.onclick= function sumar() {
                            valor= valor + i 
                            contador.innerHTML=""+valor
                        }
        divBotones.appendChild(boton)

    }
}