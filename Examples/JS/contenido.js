

var tdIni  = false;

/**
 * Oculta todos los bloques y solo visualiza el que corresponde. También asigna el valor activo al que corresponde
 * @param {*} Indice del elemento que se desea visualizar
 */
function VisualizarBloque(Indice){

    var i;
    for(i = 1; i <= BloquesN; i++){
        document.getElementById("Block" + i).setAttribute("hidden", "hidden");
        document.getElementById("Block" + i).setAttribute("hidden", "hidden");

        document.getElementById("NavBlock" + i).classList.remove("active");
        
    }

    document.getElementById("Block" + Indice).removeAttribute("hidden");
    document.getElementById("NavBlock" + Indice).classList.add("active");

    if (tdIni == false){
        if (Indice == 2){
            tdIni = true;
            InicializacionRender();
        }
    }

};

