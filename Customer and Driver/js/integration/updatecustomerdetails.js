function Updatecustomer() {
    var name= document.getElementById("fname").value;
    var contactNumber=document.getElementById("fphone").value;
    var dateOfBirth=document.getElementById("dob").value;

    var UpdatecustomerData={
        name:name,
        contactNumber:contactNumber,
        dateOfBirth:dateOfBirth,
        email:sessionStorage.getItem("cemail"),
        password:sessionStorage.getItem("cpassword"),
    }

    //send email and password by URL to update driver details

    $.ajax({
        type:"POST",
        contentType: "application/json",
        url: "http://localhost:8082/login/customer/updateCustomerDetails",
        data: JSON.stringify(UpdatecustomerData),
        dataType: "json",
        headers:{
            Accept: "*/*",
            Authorization: 'Bearer ' + sessionStorage.getItem("token") 
        },
        
        success: function(result){
            console.log(result.status)
            if(result.status == "200"){
                window.location = "CustomerProfile.html"
            }
        }
    })

}