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

confirmPass.addEventListener('blur',function(event) {
	if(confirmPass.value != pass.value) {
    confirmPass.nextElementSibling.innerText= "La contraseña no coincide con la anterior, volver a confirmar contraseña.";
	} else {
    confirmPass.nextElementSibling.innerText= "";
  }
});

check.addEventListener('blur',function(event) {
	if(!check.checked) {
		check.nextElementSibling.innerText= "Aceptar los términos y condiciones.";
	} else {
		check.nextElementSibling.innerText= "";
	}
});
/*
submit.addEventListener('click',function(event) {
  event.preventDefault();
		if(nombre.value.length ==0 || apellido.length ==0 || dni.length ==0 || fecha.length ==0 ||
			 celular.length ==0 || telefono.length==0 || pass.length==0 || confirmPass.length==0 ||
       comment.value.length==0 || !check.checked) {
			submit.nextElementSibling.innerText= "Completa todos los campos.";
		} else {
      submit.nextElementSibling.innerText= "";
			alert("Los datos se enviaron con éxito!");
      document.getElementById("formulario").reset();  // limpiar formulario
		}
});

nombre.addEventListener('blur',function(event) {
	var names = /^([A-ZÁ-Ú]{1}[a-zá-úA-ZÁ-Ú]+[\s]*)+$/g;
	if(!names.test(nombre.value)) {
		nombre.nextElementSibling.innerText= "Nombres deben tener la primera letra en mayúscula.";
	} else {
		nombre.nextElementSibling.innerText= "";
	}
});

apellido.addEventListener('blur',function(event) {
	var names = /^([A-ZÁ-Ú]{1}[a-zá-úA-ZÁ-Ú]+[\s]*)+$/g;
	if(!names.test(apellido.value)) {
		apellido.nextElementSibling.innerText= "Apellidos deben tener la primera letra en mayúscula.";
	} else {
		apellido.nextElementSibling.innerText= "";
	}
});

dni.addEventListener('blur',function(event) {
	var regexDni = /^([0-9]{8}$)/g;
	if(!regexDni.test(dni.value)) {
		dni.nextElementSibling.innerText= "El dni debe tener 8 digitos.";
	} else {
		dni.nextElementSibling.innerText= "";
	}
});

fecha.addEventListener('blur',function(event) {
var reg = /^(?:3[01]|[12][0-9]|0?[1-9])([\-/.])(0?[1-9]|1[1]{1})\1\d{4}$/;
var reg = /(\d{3})[-.](\d{6})/;
	if(!reg.test(fecha.value)){
		fecha.nextElementSibling.innerText= "Fecha no es valida.";
	} else {
		fecha.nextElementSibling.innerText= "";
	}

});

celular.addEventListener('blur',function(event) {
	var regexCelular = /^[9]{1}[\d]{8}$/;
	if(!regexCelular.test(celular.value)) {
		celular.nextElementSibling.innerText= "El celular debe tener 9 al inicio y máximo 9 dígitos";
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

pass.addEventListener('blur',function(event) {
	var regexPass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
	if(!regexPass.test(pass.value)) {
		pass.nextElementSibling.innerText= "La contraseña debe tener entre 6 a 20 caracteres entre mayúsculas, minúsculas y numéros.";
	} else {
		pass.nextElementSibling.innerText= "";
	}
});
*/

/*
comment.addEventListener('blur',function(event) {
	var regexComment = /^\s*$/;
	if(regexComment.test(comment.value)) {
		comment.nextElementSibling.innerText= "El comentario no puede estar vacío";
	} else {
		comment.nextElementSibling.innerText= "";
	}
});
*/
