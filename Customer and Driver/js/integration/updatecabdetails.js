function updatecabDetails(){
    var setCabRegistrationNo=document.getElementById("").value;
    var setCabInsuranceNo=document.getElementById("").value;
    var setCabType=document.getElementById("").value;
    var cabCapacityi
    =document.getElementById("").value;
    var licenseNo=document.getElementById("").value;

    var updatecabDtailsData={
        setCabRegistrationNo:setCabRegistrationNo,
        setCabInsuranceNo:setCabInsuranceNo,
        setCabType:setCabType,
        setCabCapacity:setCabCapacity,
        getLicenseNo:getLicenseNo,

    }
    $.ajax({
        type:"POST",
        contentType:"application/json",
        url: "localhost:8081/login/Cabs/updateCabDetails",
        data: JSON.stringify(updatecabDetails),
        datatype: "json",

        success: function(result){
            if(result.status == "200"){
                window.location= ""
            }
        }
            })
}