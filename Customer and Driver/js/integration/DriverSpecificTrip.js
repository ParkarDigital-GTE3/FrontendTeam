function driverSpecificTrip() {
    var trip_id

    $.ajax({
        type:"GET",
        contentType:"application/json",
        url:"http://localhost:8081/login/Driver/viewTrip/1",
        data:JSON.stringify(),
        dataType:"json",

        success: function(result){
            if(result == "200"){
                console.log("Display specific trip details")
            }
        }
    })


}