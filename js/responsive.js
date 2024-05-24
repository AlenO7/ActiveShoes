if(window.location.pathname === '/productos.html'){
	btnFiltro.addEventListener('click', ()=>{
		barraFiltro.style.display = 'block';
	})
	
	btnCerrarFiltro.addEventListener('click', ()=>{
		barraFiltro.style.display = 'none';
	})
}

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