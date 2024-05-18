 const formulario = document.getElementById('formularioRegistro');
const inputs = document.querySelectorAll('#formularioRegistro input');

const expresiones = {
	
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	apellido: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	dni: /^\d{8,10}$/, // 8 a 10 numeros.
	email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/, // Letras, numeros, guion y guion_bajo
	password: /^.{4,15}$/, // 4 a 12 digitos.
	passwordConfirm:  /^.{4,15}$/
	
}

const validarFormulario = (e) => {
	switch (e.target.name) {
				case "nombre":
					validarCampo(expresiones.nombre, e.target, 'nombre'); // Llamo a la funcion validarCampo con 3 parametros (expresion, input y campo).
				break;
				case "apellido":
					validarCampo(expresiones.apellido, e.target, 'apellido');
				break;
				case "dni":
					validarCampo(expresiones.dni, e.target, 'dni');
				break;
				case "email":
					validarCampo(expresiones.email, e.target, 'email');
					
				break;
				case "password":
					validarCampo(expresiones.password, e.target, 'password');
				break;
				case "passwordConfirm":
					validarPasswordConfirm();
				break;
		    case "Npedido":
			}

}
// Creo la funcion para validar cada campo.
const validarCampo = (expresion,input, campo) => {

	if(expresion.test(input.value)){
		document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-incorrecto');
		document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-correcto');
		document.querySelector(`#grupo__${campo} i`).classList.add('fa-circle-check');
		document.querySelector(`#grupo__${campo} i`).classList.remove('fa-circle-xmark');
		document.querySelector(`#grupo__${campo} .form_input-error` ).classList.remove('form_input-error-activo');
	} else {
		document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-incorrecto');
		document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-correcto');
		document.querySelector(`#grupo__${campo} i`).classList.add('fa-circle-xmark');
		document.querySelector(`#grupo__${campo} i`).classList.remove('fa-circle-check');
		document.querySelector(`#grupo__${campo} .form_input-error` ).classList.add('form_input-error-activo');

	}
}

inputs.forEach((input) => {
	input.addEventListener('keyup', validarFormulario ); // valida al soltar la tecla
	input.addEventListener('blur', validarFormulario ); // valida al presionar fuera del input

});

formulario.addEventListener ('submit' , () =>{
	expresiones.preventDefault(); 
} );





 const validarPasswordConfirm = () => {
	 
	const inputPassword = documentElementById('password');
	const inputPasswordConfirm = documentElementById('passwordConfirm');

	if(inputPassword.value !== inputPasswordConfirm.value){

		document.getElementById(`grupo__passwordConfirm`).classList.add('formulario__grupo-incorrecto');
		document.getElementById(`grupo__passwordConfirm`).classList.remove('formulario__grupo-correcto');
		document.querySelector(`#grupo__passwordConfirm i`).classList.add('fa-circle-xmark');
		document.querySelector(`#grupo__passwordConfirm i`).classList.remove('fa-circle-check');
		document.querySelector(`#grupo__passwordConfirm .form_input-error` ).classList.add('form_input-error-activo');

	} else {
		document.getElementById(`grupo__passwordConfirm`).classList.remove('formulario__grupo-incorrecto');
		document.getElementById(`grupo__passwordConfirm`).classList.add('formulario__grupo-correcto');
		document.querySelector(`#grupo__passwordConfirm i`).classList.add('fa-circle-check');
		document.querySelector(`#grupo__passwordConfirm i`).classList.remove('fa-circle-xmark');
		document.querySelector(`#grupo__passwordConfirm .form_input-error` ).classList.remove('form_input-error-activo');

	}
 }



// inputs.forEach((input) => {
// 	input.addEventListener('keyup', validarFormulario);
// 	input.addEventListener('blur', validarFormulario);
// });

// formularioRegistro.addEventListener('submit', (e) => {
// 	e.preventDefault();

// 	const terminos = document.getElementById('terminos');
// 	if(campos.usuario && campos.nombre && campos.password && campos.correo && campos.telefono && terminos.checked ){
// 		formulario.reset();

// 		document.getElementById('formulario__mensaje-exito').classList.add('formulario__mensaje-exito-activo');
// 		setTimeout(() => {
// 			document.getElementById('formulario__mensaje-exito').classList.remove('formulario__mensaje-exito-activo');
// 		}, 5000);

// 		document.querySelectorAll('.formulario__grupo-correcto').forEach((icono) => {
// 			icono.classList.remove('formulario__grupo-correcto');
// 		});
// 	} else {
// 		document.getElementById('formulario__mensaje').classList.add('formulario__mensaje-activo');
// 	}
// });*/
