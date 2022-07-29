function addRow() {
          
    var srno = document.getElementById("srno");
    var ctype= document.getElementById("ctype");
	var capacity = document.getElementById("capacity");
    var rates= document.getElementById("rates");
	  var table = document.getElementById("myTableData");
 
    var rowCount = table.rows.length;
    var row = table.insertRow(rowCount);
 
     row.insertCell(0).innerHTML=srno.value;
    row.insertCell(1).innerHTML=ctype.value;
	row.insertCell(2).innerHTML= capacity.value;
    row.insertCell(3).innerHTML= rates.value;   
 
}
 

function addbutton(objj) {
     location.replace("cab-details.html")
   
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