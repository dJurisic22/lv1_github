




 
function Dodaj(){
	var table = document.getElementById("tablica");
	var input1=document.getElementById("naziv_Predmeta").value;
	var input2=document.getElementById("godina").value;
	var input3=document.getElementById("boodvi").value;
	//var input4 = document.getElementById("4").value;
	var row = table.insertRow(1);


	var button = document.createElement("button");
	button.innerHTML = "Do Something";

 
	var cell1 = row.insertCell(0);
	var cell2 = row.insertCell(1);
	var cell3 = row.insertCell(2);
	var cell4 = row.insertCell(3);

	cell1.innerHTML=input1;
	cell2.innerHTML=input2;
	cell3.innerHTML=input3;
	cell4.innerHTML=button;
}


function removeRow(oButton) {
        var empTab = document.getElementById('empTable');
        empTab.deleteRow(oButton.parentNode.parentNode.rowIndex); // buttton -> td -> tr
    }