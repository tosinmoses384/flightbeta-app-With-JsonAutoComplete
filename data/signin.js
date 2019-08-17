$(document).ready(function () {     
    $("#signup-btn").on("click", function(e) {
        e.preventDefault()
        var $user = $("#username").val();
        var $password = $("#password").val();
        if($user == "" || $password == ""){
            alert("please fill all field");
            //return;
        }
        console.log(password);
        $.ajax({
            method: "GET",
            url: "http://localhost:3000/admin"
        }).done(function (data) {
            if (data.length > 0){
                for(var i=0; data.length > i; i++ ){
                    if(data[i].adminId == $user && data[i].password == $password){
                        window.location="index.html";
                    }
                }
            }
            $("#error").show();
        });  
    });

});