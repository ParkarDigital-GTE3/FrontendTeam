function CabBooking(){
    var source= document.getElementById("PLocation").value;
    var destination=document.getElementById("DLocation").value;
    var cabType=document.getElementById("Vtype").value;


    var CabBookingData={
        source:source,
        destination:destination,
        cabType:cabType,

        }
    console.log(JSON.stringify(CabBookingData))
    $.ajax({
        type:"POST",
        contentType: "application/json",
        url:"http://localhost:8082/login/customer/setCabTypegetRates",
        data: JSON.stringify(CabBookingData),
        dataType: "json",
        headers:{
            Accept: "*/*",
            Authorization: 'Bearer ' + sessionStorage.getItem("token") 
        },
        success: function(result){
            console.log(result.status)
            if(result.status == "200"){
              
                        console.log(result.capacity),
                        console.log(result.totalRate),
                        sessionStorage.setItem("Capacity",result.capacity),
                        sessionStorage.setItem("TotalRate",result.totalRate),
                        $('#capacity').val(result.capacity);
                        $('#rate').val(result.totalRate);
                    
                }
            }
    })
}

function bookCab(){
    var source= document.getElementById("PLocation").value;
    var destination=document.getElementById("DLocation").value;
    var cabType=document.getElementById("Vtype").value;
    
    var bookcab = {
        source:source,
        destination:destination,
        cabType:cabType,
        cabCapacity: sessionStorage.getItem("Capacity"),
        customerEmail:sessionStorage.getItem("cemail")
        }
    $.ajax({
        type:"POST",
        contentType: "application/json",
        url:"http://localhost:8082/login/customer/bookCab",
        data: JSON.stringify(bookcab),
        dataType: "json",
        headers:{
            Accept: "*/*",
            Authorization: 'Bearer ' + sessionStorage.getItem("token") 
        },
        success: function (result) {
            console.log(result.status)
            if(result.status == "200"){
                sessionStorage.setItem("b_id",result.booking.booking_id)
                window.location = "Finding_a_cab.html"
            }
        },
        error: function(result){
            console.log(result.status);
        }
    })
}