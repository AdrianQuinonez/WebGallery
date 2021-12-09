$(document).ready(function(){
    console.log("Entro a esta funcion");
    var compra = $("#ComprarYa");

    compra.click(function(){
        console.log("Entro a la funcion click");
        MensajeConfirm("success","Compra exitosa", "Su compra ha finalizado, te llegara pronto", "index.html")
    });
});
