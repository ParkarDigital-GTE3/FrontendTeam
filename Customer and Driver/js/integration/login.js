function login() {
  var userid = document.getElementById("user").value;
  var emailId = document.getElementById("email").value;
  var password = document.getElementById("password").value;

  var loginData = {
    //userid:userid,
    email: emailId,
    password: password,
  }


  if(userid=="customer")
  {
    $.ajax({
      type: "POST",
      contentType: "application/json",
      url: "http://localhost:8082/login/customerLogin",
      data: JSON.stringify(loginData),
      dataType: "json",
  
      success: function (result) {
        if(result.status == "200"){
          sessionStorage.setItem("cemail",result.username),
          sessionStorage.setItem("cpassword",loginData.password),
          sessionStorage.setItem("token",result.jwt),
          console.log(sessionStorage.getItem("token")),
          window.location = "WelcomeCustomer.html"
        }
            },
      error: function (result) {
        alert("Login Failed!")
      },
    })
  }else{
    $.ajax({
      type: "POST",
      contentType: "application/json",
      url: "http://localhost:8083/login/driverLogin",
      data: JSON.stringify(loginData),
      dataType: "json",
      
  
      success: function (result) {
        if(result.status == "200"){
          sessionStorage.setItem("demail",result.username),
          sessionStorage.setItem("dpassword",loginData.password),
          sessionStorage.setItem("token",result.jwt),
          console.log(sessionStorage.getItem("token")),
          window.location = "WelcomeDriver.html"
        }
            },
  
      error: function (result) {
        alert("Login Failed!")
      },
    })
  }
  
}
