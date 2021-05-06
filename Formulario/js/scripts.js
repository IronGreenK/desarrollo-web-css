var usuarios = [];

function agregarUsuario(){

    //Variables init
    var usuario = new Object();
    var fecha = new Date();
    emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
    telefonoRegex = /^\d{9}/i;


    //Variables del usuario
    var nombre = document.getElementById("nombre").value;
    var apMat = document.getElementById("apellidoMaterno").value;
    var apPat = document.getElementById("apellidoPaterno").value;
    var email = document.getElementById("email").value;
    var telefono = document.getElementById("telefono").value;
    var direccion = document.getElementById("direccion").value;
    var isCheckedTermino = document.getElementById("cbox1").checked;
    var isCheckedPolitica = document.getElementById("cbox2").checked;


    if(nombre != '' && apMat != '' && apPat != '' && email != '' && telefono != '' && direccion != ''){
        if(isCheckedTermino && isCheckedPolitica){
            if(emailRegex.test(email) && telefonoRegex.test(telefono)){
                usuario["Nombre completo"] = nombre+' '+apPat+' '+apMat;
                usuario["Email"] = email;
                usuario["Teléfono"] = telefono;
                usuario["Dirección"] = direccion;
                usuario["Fecha registro"] = fecha.toLocaleDateString();
                usuarios.push(usuario);
                console.log(usuarios); 
            }else if(!emailRegex.test(email) && telefonoRegex.test(telefono)){
                alert("Email no valido");
            }else if(emailRegex.test(email) && !telefonoRegex.test(telefono)){
                alert("Telefono no valido");
            }else{
                alert("Ambos estan mal");
            }
        }else if(isCheckedTermino && !isCheckedPolitica){
            alert("No ha aceptado las políticas");
        }else if(!isCheckedTermino && isCheckedPolitica){
            alert("No ha aceptados los terminos y condiciones");
        }else{
            alert("No ha aceptado las políticas ni terminos y condiciones");
        }

    }else{
        alert("A dejado un campo vacio")
    }

    
    
}