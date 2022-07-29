function addRow() {
          
    var srno = document.getElementById("sr no");
    var name= document.getElementById("name");
	var email = document.getElementById("email");
    var cont = document.getElementById("cont");
	  var dob = document.getElementById("dob");
	  var gender = document.getElementById("gender");
	  var table = document.getElementById("myTableData");
 
    var rowCount = table.rows.length;
    var row = table.insertRow(rowCount);
 
     row.insertCell(0).innerHTML=srno.value;
    row.insertCell(1).innerHTML=name.value;
	row.insertCell(2).innerHTML= email.value;
    row.insertCell(3).innerHTML= cont.value;
	row.insertCell(4).innerHTML= dob.value;
	 row.insertCell(5).innerHTML=gender.value;
   
 
}
 

function addbutton(objj) {
     location.replace("customer-details.html")
   
}
 
function addTable() {
      
    var myTableDiv = document.getElementById("myDynamicTable");
      
    var table = document.createElement('TABLE');
    table.border='1';
    
    var tableBody = document.createElement('TBODY');
    table.appendChild(tableBody);
      
    for (var i=0; i<3; i++){
       var tr = document.createElement('TR');
       tableBody.appendChild(tr);
       
       for (var j=0; j<4; j++){
           var td = document.createElement('TD');
           td.width='75';
           td.appendChild(document.createTextNode("Cell " + i + "," + j));
           tr.appendChild(td);
       }
    }
    myTableDiv.appendChild(table);
    
}
 
function load() {
    
    console.log("Page load finished");
 
}