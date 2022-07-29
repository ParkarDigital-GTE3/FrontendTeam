function getCabDetails(){

    var getCabDetailsData={
        driverEmail:sessionStorage.getItem("demail"),
    }
    $.ajax({
        type:"POST",
        contentType:"application/json",
        url:"http://localhost:8083/login/driver/SetCab/getCabDetails",
        data: JSON.stringify(getCabDetailsData),
        dataType: "json",

        success: function(result){
            if (result.status == "200"){
                $('#vtype').val(result.cab.cabType);
                $('#model').val(result.cab.cab_name);
                $('#vno').val(result.cab.cabRegistrationNo);
                $('#capacity').val(result.cab.cabCapacity);
                $('#ins').val(result.cab.cabInsuranceNo);
                $('#lic').val(result.cab.licenseNo);
            }
        }
    })
}