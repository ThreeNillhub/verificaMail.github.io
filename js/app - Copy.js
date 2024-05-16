//formulario correos
//Si el codigo funciona llevamos progreso

document.addEventListener('DOMContentLoaded', function() {

    const email = {
        email: '',
        asunto: '',
        mensaje: '', 
    }
    //seleccionar los elementos del interfas
    const inputEmail = document.querySelector('#email');
    const inputAsunto = document.querySelector('#asunto');
    const inputMensaje = document.querySelector('#mensaje');
    const formulario = document.querySelector('#enviar-mail');
    const btnSubmit = document.querySelector('#formulario button[type="submit"]')
    const btnReset = document.querySelector('#formulario button[type="reset"]')
    const spinner = document.querySelector('#spinner')
    //console.log(inputEmail)

    //Asignar eventos blur cuando sales de un campo
    inputEmail.addEventListener('input' , validar
    );
    inputAsunto.addEventListener('blur' , validar
    );
    inputMensaje.addEventListener('blur' , validar
    );
    formulario.addEventListener('submit', enviarEmail);

    btnReset.addEventListener('click', function (e) {
        e.preventDefault();

        //reinciar objeto
        email.email = '',
        email.asunto = '',
        email.mensaje = '',
        formulario.reset ();

    });

    function enviarEmail (e) {
        e.preventDefault();
        spinner.classList.add('flex');
        spinner.classList.remove('hidden');

    }


    function validar (email) {
        //console.log(e.target.parentElement)
        //console.log(e.target.id)
        //trim elimina espacios en blanco
        if(e.target.value.trim() === '') {
            mostarAlerta(`El campo ${e.target.id} es obligatorio`, e.target.parentElement );
            email[e.targe.name] = '';
            comprobarEmail();
            return;
        }

        if(e.target.id === 'email' && !validarEmail(e.target.value)){
                mostarAlerta('El Email no es valido' , e.target.parentElement);
                email[e.targe.name] = '';
                comprobarEmail();
                return;
        }

        //asignar valores
        email[e.targe.name] = e.target.value.trim().tolowerCase();

        //comprobar el objeto email
        function comprobarEmail () {
            //console.log ( Object.values(email).includes(''));       
            if(Object.values(email).includes('')) {
                btnSubmit.classList.add('opacity-50');
                btnSubmit.disabled = true;


            }else {
                btnSubmit.classList.remove('opacity-50');
                btnSubmit.disabled = false;
            }

        }

        }

        validarEmail(e.target.value);
        limpiarAlerta(e.target.parentElement);

        //console.log ('despues del if')
        // else{ 
        //     console.log('si hay algo...');
        //     }
        //                 }


    
 
    function mostarAlerta (mensaje, referencia) {
    //comprueba si ya existe una alerta
    const alerta = referencia.querySelector('.bg-red-600');
    if (alerta) {
        alerta.remove();
        }
 

    //console.log ('hubo un error asd...');  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/ 
    //Generar alerta html -> soporta cualquier etiqueta html
    //Inner html captura todo y corres riesgo - textcontent es mas seguro
    const error = document.createElement('P');
    error.textContent = mensaje;
    error.classList.add('bg-red-600', 'text-white', 'p-2', 'text-center');
    //console.log(error);
    //funcion que inyecta al html el text de error
    referencia.appendChild(error);
    //formulario.innerHTML(error)
    }



    function limpiarAlerta (referencia) {
        const alerta = referencia.querySelector('.bg-red-600');
            if (alerta) {
        alerta.remove();
        }
    }

    function validarEmail (email) {
        const regex = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
        const resultado = regex.test(email);
        console.log(resultado);
    }


});


