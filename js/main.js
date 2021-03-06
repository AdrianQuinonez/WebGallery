$(document).ready(function(){
    
    $('#loginform').submit(function(e) {
        e.preventDefault();
        if(ValidateLogin()){
                $.ajax({
                    type: "POST",
                    url: '../controller/action/act_login.js',
                    data: $(this).serialize(),
                    success: function(response)
                    {
                        var jsonData = JSON.parse(response);
         
                        // user is logged in successfully in the back-end
                        // let's redirect
                        if (jsonData.success == "1")
                        {
                            if(jsonData.rol == "cli"){
                                location.href = 'index.php';
                            }else if(jsonData.rol == "adm"){
                                location.href = 'admin/index.php';
                            }
                        }
                        else
                        {
                            Mensaje('error','Oops...',jsonData.message);
                        }
                   }
                });
        }
    });
});

function ValidateLogin(){
    var user = $("#LoginEmail"),
        password = $("#LoginPassword");
    if (user.val() === '' || password.val() === '') {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Hay campos vacíos',
            //footer: '<a href="../carrito.html">Crear una cuenta</a>'
        })
        return false;
    } else if (!EmailValidation(user.val())) {
        Mensaje('error','Oops...', 'El correo no cumple con la estructura')
        user.val('');
        password.val('');
        return false;
    }else{
        return true;
    }
}