function updateDriver() {
    var name = document.getElementById("fname").value;
    var contactNumber = document.getElementById("fphone").value;
    var dateOfBirth = document.getElementById("dob").value;


    var updateDriverdata = {
        email : sessionStorage.getItem("demail"),
        name : name,
        contactNumber : contactNumber,
        dateOfBirth : dateOfBirth,
        password : sessionStorage.getItem("dpassword")

    }

    $.ajax({
        type:"POST",
        contentType: "application/json",
        url: "http://localhost:8083/login/driver/updateDriverDetails",
        data: JSON.stringify(updateDriverdata),
        dataType: "json",
        headers:{
            Authorization: 'Bearer ' + sessionStorage.getItem("token") 
        },
        success: function(result) {
            if(result.status == "200"){
                console.log(result.status)
                
            }
        }
    })
}

