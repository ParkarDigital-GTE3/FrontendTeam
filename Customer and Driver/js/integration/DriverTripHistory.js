function driverTripHistory() {
    var email

    $.ajax({
        type:"GET",
        contentType:"application/json",
        url:"http://localhost:8081/login/Driver/viewTripHistory/driver@gmail.com",
        data:JSON.stringify(),
        dataType:"json",

        success: function(result){
            if(result == "200"){
                console.log("Trip history!")
            }
        }
    })
}