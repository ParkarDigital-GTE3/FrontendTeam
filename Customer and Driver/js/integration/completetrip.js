function CompleteTrip() {
    var trip_id

    $.ajax({
        type:"POST",
        contentType:"application/json",
        url:"http://localhost:8081/login/Driver/CompleteTrip",
        data:JSON.stringify(),
        dataType:"json",

        success: function(resutl){
            if(result == "200"){
                window.location = ""
            }
        }
    })
}