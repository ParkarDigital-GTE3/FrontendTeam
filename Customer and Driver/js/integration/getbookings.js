function getBooking() {
    var booking_id

    $.ajax({
        type:"GET",
        contentType:"application/json",
        url:"http://localhost:8081/Driver/getBookings",
        data:JSON.stringify(),
        dataType:"json",

        success: function(result){
            if(result == "200"){
                console.log("get booking details")
            }
        }
    })
}