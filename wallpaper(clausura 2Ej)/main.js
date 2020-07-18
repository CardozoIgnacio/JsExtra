const board = document.getElementById("boardImg");
const h1= document.getElementById("nombreArchivo")

const wallP = [
"1416250650_preview_btf_bg.png",
"7l8vx6hqybh41.png"
];

//    <img src="" alt="">


//------------------------------------------------------------------------------------
//------------------------------Clausuras---------------------------------------------
//------------------------------------------------------------------------------------

//modificar para que cuando el mouse pase sobre una imagen, se detalle la ruta en h1
//Como esta el codigo solamente mostrara la ultima ruta, xq se genero una clausura con la img
//es decir no estoy almacenando el valor de img, sino una "referencia" al valor de img
//motivo por el cual todos las imagenes guardan la ultima ruta.
function cargaImg() {
    for (let i = 0; i < wallP.length; i++) {
        var img = document.createElement("img");
        img.src="./Wallpapers/"+wallP[i];
        img.width="800"
        img.height="400"
        img.onmouseover=function () {
            //Se crea una CLAUSURA con img...
            h1.innerHTML="La direccion de la imagen es : "+img.src
        }
        board.appendChild(img)
        
    }    
}

cargaImg()