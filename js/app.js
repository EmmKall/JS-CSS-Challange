const btnMenu = document.querySelector('#btn-menu');
const menuLista = document.querySelector('#menu-lista');
const btnCerrar = document.querySelector('#cerrar-menu');
let indicadorMenu = true;
eventsListener();
function eventsListener() {

    if(window.innerWidth < 768) menuLista.style.display = 'none';
    if(window.innerWidth > 767) {
        btnCerrar.style.display = 'none';
        btnMenu.style.display = 'none';
    }

    btnMenu.addEventListener('click', menuMovil);
    btnCerrar.addEventListener('click', menuMovil);

}

function menuMovil(){
    if(indicadorMenu){
        btnMenu.style.display = 'none';
        menuLista.style.display = 'block';
        indicadorMenu = !indicadorMenu;
    } else {
        btnMenu.style.display = 'flex';
        menuLista.style.display = 'none';
        indicadorMenu = !indicadorMenu;
    }
}
