function addRow() {
          
    var date = document.getElementById("date");
    var Source= document.getElementById("Source");
	var Destination = document.getElementById("Destination");
    var Drivers_name= document.getElementById("Drivers_name");
	var Customers_Name= document.getElementById("Customers_Name");
	var table = document.getElementById("myTableData");
 
    var rowCount = table.rows.length;
    var row = table.insertRow(rowCount);
 
    row.insertCell(0).innerHTML=date.value;
    row.insertCell(1).innerHTML=Source.value;
	row.insertCell(2).innerHTML= Destination.value;
    row.insertCell(3).innerHTML= Drivers_name.value;   
	row.insertCell(4).innerHTML= Customers_Name.value;   
	row.insertCell(5).innerHTML=  '<input type="button" class="btn btn-outline-info" value = "More Info" onClick="Javacsript:addbutton(this)">';
 
}
 

function addbutton(objj) {
     location.replace("Trip_Details.html")
   
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