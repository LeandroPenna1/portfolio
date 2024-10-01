/*  */
function seleccionar(link){
    var opciones = document.querySelector('#links a');
    opciones[0].className = "";
    opciones[1].className = "";
    opciones[2].className = "";
    opciones[3].className = "";
    opciones[4].className = "";

    var x = document.getElementById("nav");
    x.className = "";
}

/* Menu responsive */
function responsiveMenu() {
    var x = document.getElementById("nav");
    if(x.className==="") {
        x.className = "responsive";
    }else{
        x.className = "";
    }
}

/* PROTFOLIO */
const arrowLeft = document.querySelector('.arrow-left');
const arrowRight = document.querySelector('.arrow-right');
const proyectosWeb = document.querySelector('.proyectos-web');
const proyectosData = document.querySelector('.proyectos-data');

arrowRight.addEventListener('click', () => {
    proyectosWeb.style.display = 'none';
    proyectosData.style.display = 'flex';
    arrowLeft.style = 'flex';
    arrowRight.style = 'none';
});

arrowLeft.addEventListener('click', () => {
    proyectosData.style.display = 'none';
    proyectosWeb.style.display = 'flex';
    arrowLeft.style = 'none';
    arrowRight.style = 'flex';
});

