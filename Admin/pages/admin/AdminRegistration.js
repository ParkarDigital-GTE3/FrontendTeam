function AdminReg() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("pass").value;

    var RegData = {
        email: email,
        password: password,
      }
      console.log(RegData)
      $.ajax({
        type:"POST",
        contentType: "application/json",
        url: "http://localhost:8081/login/registerAdmin",
        data: JSON.stringify(RegData),
        dataType:"json",

        success: function(result) {
          console.log(result.status)
            if(result.status == "200"){
              
              alert("Registration successful!")  
              window.location = "Admin_login.html"
            }
        },
        error: function(result) {
            console.log("registration failed!")
        }
    });
    
}