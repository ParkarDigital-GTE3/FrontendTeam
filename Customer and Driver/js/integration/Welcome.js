function WelcomeCustomer() {
    console.log(sessionStorage.getItem('token')),
$.ajax({
    type:"GET",
    url:"http://localhost:8082/login/customerLogin/welcomeCustomer",
    contentType:"applcation/json",
    headers:{
                Accept: "*/*",
                 Authorization: 'Bearer ' + sessionStorage.getItem("token") 
     },
    
    

})
}

function WelcomeDriver() {
    console.log(sessionStorage.getItem('token')),
$.ajax({
    type:"GET",
    url:"http://localhost:8083/login/customerLogin/welcomeDriver",
    contentType:"applcation/json",
    headers:{
                Accept: "*/*",
                 Authorization: 'Bearer ' + sessionStorage.getItem("token") 
     },
    
    

})
}