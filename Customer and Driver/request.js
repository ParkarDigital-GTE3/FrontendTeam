function addRow() {
          
    var Source = document.getElementById("Source");
    var Destination = document.getElementById("Destination");
	var Customer_name = document.getElementById("Customer_name");
	var Customer_contact = document.getElementById("Customer_contact");
	var accept = document.getElementById("accept");
	var decline = document.getElementById("decline");
    var table = document.getElementById("myTableData");
 
    var rowCount = table.rows.length;
    var row = table.insertRow(rowCount);

    row.insertCell(0).innerHTML= Source.value;
    row.insertCell(1).innerHTML= Destination.value;
	row.insertCell(2).innerHTML= Customer_name.value;
	row.insertCell(3).innerHTML= Customer_contact.value;
	row.insertCell(4).innerHTML= '<input type="button" class="btn_accept" value = "Accept">';
    row.insertCell(5).innerHTML= '<input type="button" class="btn_decline" value = "Decline">'
}
function addTable() {
      
    var myTableDiv = document.getElementById("myDynamicTable");
      
    var table = document.createElement('TABLE');
    table.border='';
    
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