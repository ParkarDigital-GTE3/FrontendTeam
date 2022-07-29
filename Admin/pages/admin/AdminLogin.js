function AdminLogin() {
    var emailId = document.getElementById("username").value;
  var password = document.getElementById("password").value;


  var loginData = {
    email: emailId,
    password: password,
  }
  console.log(loginData)
  $.ajax({
    type: "POST",
    contentType: "application/json",
    url: "http://localhost:8081/login/adminLogin",
    data: JSON.stringify(loginData),
    dataType: "json",

    success: function (result) {
      if(result.status == "200"){
        sessionStorage.setItem("cemail",result.username),
        sessionStorage.setItem("cpassword",loginData.password),
        sessionStorage.setItem("token",result.jwt),
        console.log(sessionStorage.getItem("token")),
        window.location = "indexadmin.html"
      }
      
          },
    error: function (result) {
      alert("Login Failed!")
    },
  })
}