function DriverProfile() {
    var Emaildata = {
      email:sessionStorage.getItem("demail")
    }
      $.ajax({
        type:"POST",
        contentType: "application/json",
        url:"http://localhost:8083/login/driver/getDriver",
        data: JSON.stringify(Emaildata),
        dataType: "json",
        headers:{
            Accept: "*/*",
            Authorization: 'Bearer ' + sessionStorage.getItem("token") 
        },

        success: function(result){
            if(result.status == "200"){
              $('#name').val(result.result.name);
              $('#Phone').val(result.result.contactNumber);
              $('#dob').val(result.result.dateOfBirth);
              $('#email').val(result.result.email);
              $('#gender').val(result.result.gender);
                }
            },
    })
    }

