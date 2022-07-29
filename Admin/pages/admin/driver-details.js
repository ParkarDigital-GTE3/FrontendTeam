function addRow() {
          
    var srno = document.getElementById("sr no");
    var name= document.getElementById("name");
    var cont = document.getElementById("cont");
	 var vtype = document.getElementById("vtype");
	  var vmodel = document.getElementById("vmodel");
	  var reg = document.getElementById("reg");
	  var capacity = document.getElementById("capacity");
	  var dob = document.getElementById("dob");
	  var ins = document.getElementById("ins");
	  var license = document.getElementById("license");
    var table = document.getElementById("myTableData");
 
    var rowCount = table.rows.length;
    var row = table.insertRow(rowCount);
 
     row.insertCell(0).innerHTML=srno.value;
    row.insertCell(1).innerHTML=name.value;
    row.insertCell(2).innerHTML= cont.value;
	 row.insertCell(3).innerHTML= vtype.value;
	  row.insertCell(4).innerHTML= vmodel.value;
	  row.insertCell(5).innerHTML= reg.value;
	  row.insertCell(6).innerHTML= capacity.value;
	  row.insertCell(7).innerHTML= dob.value;
	  row.insertCell(8).innerHTML= ins.value;
	  row.insertCell(9).innerHTML= license.value;
}
 

function addbutton(objj) {
     location.replace("driver-details.html")
   
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