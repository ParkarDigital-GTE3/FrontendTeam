function addRow() {
          
    var srno = document.getElementById("srno");
    var srcc = document.getElementById("src");
	var destt= document.getElementById("dest");
	var diss = document.getElementById("dis");
	var table = document.getElementById("myTableData");
 
    var rowCount = table.rows.length;
    var row = table.insertRow(rowCount);
 
 row.insertCell(0).innerHTML=srno.value;
     row.insertCell(1).innerHTML=srcc.value;
    row.insertCell(2).innerHTML=destt.value;
    row.insertCell(3).innerHTML= diss.value;
   
 
}
 

function addbutton(objj) {
     location.replace("TRIP DETAILS.html")
   
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