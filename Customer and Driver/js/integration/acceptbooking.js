function acceptBooking() {
    var email = document.getElementById("").value;

    var bookingdata = {
        email:sessionStorage.getItem("cemail")
    }

    $.ajax({
        type:"POST",
        contentType:"application/json",
        url: "http://localhost:8081/login/Driver/acceptBooking",
        data: JSON.stringify(bookingdata),
        dataType: "json",

        success: function(result){
            if(result == "200"){
                window.location = ""
            }
        }
    })
}