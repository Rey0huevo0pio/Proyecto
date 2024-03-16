document.addEventListener("DOMContentLoaded", function() {
   
    var enviarBtn = document.getElementById("enviarBtn");

    
    enviarBtn.addEventListener("click", function() {
       
        var empresa = document.getElementById("empresa").value;
        var email = document.getElementById("email").value;
        var telefono = document.getElementById("telefono").value;
        var ciudad = document.getElementById("ciudad").value;

       
        console.log("Empresa: " + empresa);
        console.log("Correo electrónico: " + email);
        console.log("Teléfono: " + telefono);
        console.log("Ciudad: " + ciudad);

    
        document.getElementById("empresa").value = "";
        document.getElementById("email").value = "";
        document.getElementById("telefono").value = "";
        document.getElementById("ciudad").value = "";
    });
});
