var submit = document.getElementById('submit');
var formulario = document.getElementById('formulario');

var nombre = document.getElementById('name');
var apellido = document.getElementById('apellido');
var dni = document.getElementById('dni');
var fecha = document.getElementById('fecha');
var celular = document.getElementById('celular');
var telefono = document.getElementById('telefono');
var pass = document.getElementById('pass');
var confirmPass = document.getElementById("confirm-pass");
var comment = document.getElementById('comment');
var check = document.getElementById('check');

submit.addEventListener('click',function(event) {
    event.preventDefault();  // evita que se limpie automaticamente

						if(nombre.value.length ==0 || apellido.length ==0 || dni.length ==0 || fecha.length ==0 ||
							 celular.length ==0 || telefono.length==0 || pass.length==0 || confirmPass.length==0) {
							alert("* Completa todos los campos.");
						} else {
							alert("OK");
		          document.getElementById("formulario").reset();  // limpiar formulario
						}

});

nombre.addEventListener('blur',function(event) {
	var names = /^([A-ZÁ-Ú]{1}[a-zá-úA-ZÁ-Ú]+[\s]*)+$/g;
	if(!names.test(nombre.value)) {
		nombre.nextElementSibling.innerText= "El nombre debe tener la primera letra en mayúscula.";
	} else {
		nombre.nextElementSibling.innerText= "";
	}
});

apellido.addEventListener('blur',function(event) {
	var names = /^([A-ZÁ-Ú]{1}[a-zá-úA-ZÁ-Ú]+[\s]*)+$/g;
	if(!names.test(apellido.value)) {
		apellido.nextElementSibling.innerText= "El apellido debe tener la primera letra en mayúscula.";
	} else {
		apellido.nextElementSibling.innerText= "";
	}
});

dni.addEventListener('blur',function(event) {
	var regexDni = /^([0-9]{8}$)/g;
	if(!regexDni.test(dni.value)) {
		dni.nextElementSibling.innerText= "El dni debe tener 8 digitos";
	} else {
		dni.nextElementSibling.innerText= "";
	}
});

celular.addEventListener('blur',function(event) {
	var regexCelular = /^[9]{1}[\d]{8}$/;
	if(!regexCelular.test(celular.value)) {
		celular.nextElementSibling.innerText= "El celular debe tener 9 al inicio y max. 9 digitos";
	} else {
		celular.nextElementSibling.innerText= "";
	}
});

telefono.addEventListener('blur',function(event) {
	var regexTelefono = /^[^9|0|1]{1}[\d]{6}$/;
	if(!regexTelefono.test(telefono.value)) {
		telefono.nextElementSibling.innerText= "El teléfono fijo debe tener 7 digitos y no puede empezar con 9, 0 o 1.";
	} else {
		telefono.nextElementSibling.innerText= "";
	}
});
