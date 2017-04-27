var submit = document.getElementById('submit');
var formulario = document.getElementById('formulario');

var nombre = document.getElementById('name');
var apellido = document.getElementById('apellido').value;
var dni = document.getElementById('dni').value;
var fecha = document.getElementById('fecha').value;
var celular = document.getElementById('celular').value;
var telefono = document.getElementById('telefono').value;
var pass = document.getElementById('pass').value;
var confirmPass = document.getElementById("confirm-pass").value;
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
/*
nombre.addEventListener('click',function(event) {
	var names = \bt[a-z]+\b;
	if(!names.test(nombre)) {
		document.getElementById("error-name").innerText = "error";
	} else {
		document.getElementById("error-name").innerText = "";
	}
});
*/
