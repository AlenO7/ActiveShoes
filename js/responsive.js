const menuHamburguesa = document.getElementById('menuHamburguesa');
const nav = document.querySelector('.navbar');
const btnCerrar = document.querySelector('.botonCerrarActivo');
const barraFiltro = document.getElementById('filtro-barra');
const btnFiltro = document.getElementById('filtroProductos');
const btnCerrarFiltro = document.getElementById('btnCerrarFiltro');

/*evento menu*/
menuHamburguesa.addEventListener('click',()=>{
	if (menuHamburguesa.classList.contains("menuHamburguesaActivado")) {
		nav.style.display = 'block';
		menuHamburguesa.src = './static/img/close.png';
		menuHamburguesa.classList = 'btnCerrar'
	} else if(menuHamburguesa.classList.contains("btnCerrar")){
		nav.style.display = 'none';
		menuHamburguesa.src = './static/img/menuHamburguesa.png';
		menuHamburguesa.classList = 'menuHamburguesaActivado'
	}
})


if(window.location.pathname === '/productos.html'){
	btnFiltro.addEventListener('click', ()=>{
		barraFiltro.style.display = 'block';
	})
	
	btnCerrarFiltro.addEventListener('click', ()=>{
		barraFiltro.style.display = 'none';
	})
}
