function addRow() {
     
    var srno = document.getElementById("srno");     
    var name = document.getElementById("dname");
    var phone = document.getElementById("phone");
    var vtyp = document.getElementById("vechtyp");
	 var vcmodel = document.getElementById("vmodel");
	  var vcreg = document.getElementById("vreg");
    var vccap = document.getElementById("vcap");
	var ddob = document.getElementById("dob");
	var dinsur = document.getElementById("insur");
	var dlic = document.getElementById("lic");
var table = document.getElementById("myTableData");
 
    var rowCount = table.rows.length;
    var row = table.insertRow(rowCount);
 
     row.insertCell(0).innerHTML=srno.value;
    row.insertCell(1).innerHTML=name.value;
    row.insertCell(2).innerHTML= phone.value;
	 row.insertCell(3).innerHTML= vtyp.value;
	  row.insertCell(4).innerHTML= vcmodel.value;
	  row.insertCell(5).innerHTML= vcreg.value;
	  row.insertCell(6).innerHTML= vccap.value;
	  row.insertCell(7).innerHTML= ddob.value;
	  row.insertCell(8).innerHTML= dinsur.value;
	  row.insertCell(9).innerHTML= dlic.value;
	row.insertCell(10).innerHTML=  '<input type="button" class="btn btn-outline-info" value = "Activate" onClick="Javacsript:addbutton(this)">';
   
 
}
 

function addbutton(objj) {
     location.replace("new-driver.html")
   
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