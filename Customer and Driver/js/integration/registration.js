function registration(){
    var role = document.getElementById("user").value;
    var name = document.getElementById("fname").value;
    var email = document.getElementById("email").value;
    var contactNumber = document.getElementById("fphone").value;
    var password = document.getElementById("pass").value;
    var dateOfBirth = document.getElementById("dob").value;
    var gender = document.getElementById("Gender").value;


    var RegistrationDataCustomer = {
        role : role,
        email : email,       
        contactNo : contactNumber,
        name: name,
        dateOfBirth : dateOfBirth,
        gender : gender,
        password : password
    }
    var RegistrationDataDriver = {
      role : role,
      email : email,       
      contactNumber : contactNumber,
      name: name,
      dateOfBirth : dateOfBirth,
      gender : gender,
      password : password,
    }

    if(role=="Customer")
    {
    $.ajax({
        type:"POST",
        contentType: "application/json",
        url: "http://localhost:8082/register/registerCustomer",
        data: JSON.stringify(RegistrationDataCustomer),
        crossDomain: true,
        dataType:"json",

        success: function(result) {
            if(result.status == "200"){
              alert("Registration successful!")  
              window.location = "LoginPage.html"
            }
        },
        error: function(result) {
            console.log("registration failed!")
        }
    })
  }else{
    $.ajax({
        type:"POST",
        contentType: "application/json",
        url: "http://localhost:8083/register/registerDriver",
        data: JSON.stringify(RegistrationDataDriver),
        crossDomain: true,
        dataType:"json",

        success: function(result) {
            if(result.status == "200"){
              alert("Registration successful!")  
              window.location = "LoginPage.html"
            }
        },
        error: function(result) {
            console.log("registration failed!")
        }
    })
  }

}
