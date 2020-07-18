const board = document.getElementById("boardImg");
const h1= document.getElementById("nombreArchivo")

const wallP = [
"1416250650_preview_btf_bg.png",
"3KumHbz.jpg",
"795d464712dbc0ca1ea94a0e0069da5f.jpg",
"7l8vx6hqybh41.png",
"alps-beautiful-blue-cold-547115.jpg",
"atacama-desert-photography-3840x2160_788746-mm-90.jpg",
"cataclysm_by_seerlight-dbnw9cx (1).jpg",
"DA8VpEx.jpg",
"fd4ae56fcc6d563fe683158516cf146f-700.jpg",
"forest-morning-mist-scenery-uhdpaper.com-4K-4.2326.jpg",
"In the Valley.jpg",
"josef-barton-162.jpg",
"knvise3sljax.png",
"Koi and Wave.png",
"loadscreen-maelstrom-full.jpg",
"pexels-photo-3633122.jpeg",
"polyscape.jpeg",
"red-and-white-lighthouse-on-land-946343.jpg",
"Samurai.jpeg",
"sea-waves-2253573.jpg",
"System76-Fractal_Mountains-by_Kate_Hazen_of_System76.png",
"System76-Old_Man_Smoked_His_Pipe-by_Ian_Hex_of_LightSweep.jpg",
"System76-Robot-by_Kate_Hazen_of_System76.png",
"System76-System76_Brandmark_Blue-by_Kate_Hazen_of_System76.jpg",
"System76-System76_Brandmark_Gray-by_Kate_Hazen_of_System76.jpg",
"System76-System76_Brandmark_Yellow-by_Kate_Hazen_of_System76.jpg",
"System76-System76_Logo_Blue-by_Kate_Hazen_of_System76.jpg",
"System76-System76_Logo_Gray-by_Kate_Hazen_of_System76.jpg",
"System76-System76_Logo_Yellow-by_Kate_Hazen_of_System76.jpg",
"System76-Unleash_Your_Robot_Blue-by_Kate_Hazen_of_System76.png",
"System76-Unleash_Your_Robot-by_Kate_Hazen_of_System76.png",
"wallpaperflare.com_wallpaper.jpg"];

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
        img.width="200"
        img.onmouseover=function () {
            //Se crea una CLAUSURA con img...
            h1.innerHTML="La direccion de la imagen es : "+img.src
        }
        board.appendChild(img)
        
    }    
}

cargaImg()