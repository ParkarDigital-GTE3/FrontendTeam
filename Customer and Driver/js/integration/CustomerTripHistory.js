function customerTripHistpry() {
    var email = {
        email : sessionStorage.getItem("cemail"),
    }

    $.ajax({
        type:"GET",
        contentType:"application/json",
        url:"http://localhost:8082/login/Customer/viewCustomerTripHistory",
        data:JSON.stringify(email),
        dataType:"json",

        success: function(result){
            if(result == 200){
                console.log("view customer trip history")
            }
        }
    })
}