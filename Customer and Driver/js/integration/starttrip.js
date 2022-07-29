function startTrip() {

    //var customerEmail
    //var driverEmail
    //var tripDate

    $.ajax({
        type:"POST",
        contentType:"application/json",
        url:"localhost:8081/login/Driver/startTrip/3",
        data:JSON.stringify(),
        dataType:"json",

        success: function(result){
            if(result == "200"){
                window.location = ""
            }
        }
    })
}