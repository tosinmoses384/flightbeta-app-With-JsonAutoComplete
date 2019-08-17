$(document).ready(function () {   
    $("#signup-btn").on("click", function(e) {
        e.preventDefault()
        var $title = $("#title")
        var $fullName = $("#fullName")
        var $userName = $("#userName")
        var $email = $("#email")
        var $phoneNumber = $("#phoneNumber")
        var $password = $("#password")
        var users = {
            title:      $title.val(),
            fullName:   $fullName.val(),
            userName:   $userName.val(),
            email:      $email.val(),
            phoneNumber:$phoneNumber.val(),
            password:   $password.val() 
        }
        console.log(password);
        $.ajax({
            method: "POST",
            url: "http://localhost:3000/users",
            data: users
        }).done(function (data) {
          alert("account created successfully!");
              $title.val(''),
              $fullName.val(''),
              $userName.val(''),
              $email.val(''),
              $phoneNumber.val(''),
              $password.val(''),
              window.location="signin.html";
            }).fail(function () {
                alert("couldn't reach server")
            })
    })
})
