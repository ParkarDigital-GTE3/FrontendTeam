function setcabdetails(){
    var licenseNo=document.getElementById("fli").value;
    var cab_name=document.getElementById("fname").value;
    var cabRegistrationNo=document.getElementById("fphone").value;
    var cabType=document.getElementById("vtype").value;
    var cabCapacity=document.getElementById("capacity").value;
    var cabInsuranceNo=document.getElementById("fins").value;
    //var button=document.getElementById("button-send").

    var cabdetailsData = {
        licenseNo:licenseNo,
        cab_name:cab_name,
        cabRegistrationNo:cabRegistrationNo,
        cabType:cabType,
        cabCapacity:cabCapacity,
        cabInsuranceNo:cabInsuranceNo,
        driverEmail:sessionStorage.getItem("demail")
    }
    $.ajax({
        type:"POST",
        contentType: "application/json",
        url: "http://localhost:8083/login/driver/SetCab/setCabDetails",
        data: JSON.stringify(cabdetailsData),
        datatype: "json",
        headers:{
            Accept: "*/*",
             Authorization: 'Bearer ' + sessionStorage.getItem("token")
        },

        success: function(result){
            if(result.status == "200"){
                console.log("cab details set successfully!")
                sessionStorage.setItem("cabRegistrationNo",result.result.cab_id.cabRegistrationNo)
                window.location = "CabDetails.html"
            }
        
            
        }
    })
}