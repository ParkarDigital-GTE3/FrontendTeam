function customerSpecificTrip() {
    var book_id ={
        booking_id : sessionStorage.getItem("b_id"),
    }
    $.ajax({
        type:"GET",
        contentType:"application/json",
        url:"http://localhost:8082/login/customer/viewTrip",
        data:JSON.stringify(book_id),
        dataType:"json",
        headers:{
            Accept: "*/*",
            Authorization: 'Bearer ' + sessionStorage.getItem("token") 
        },

        success: function(result){
            if(result.status == 200){
            $('#name').val(result.result.name);
            $('#phone').val(result.result.contactNo);
            $('#vno').val(result.result.dateOfBirth);
            $('#src').val(result.result.email);
            $('#dest').val(result.result.gender);
            $('#date').val(result.result.gender);
            $('#dist').val(result.result.gender);
            $('#rate').val(result.result.gender);
            $('#fare').val(result.result.gender);
            }
        },
        error: function(result){
            console.log("No trips found")
        }
    })
}