// It get the data from Local Storage automatically invoked
var init1 = function(){
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			if(localStorage.getItem('employeeList') === null){
				localStorage.setItem('employeeList', this.responseText) ;
			}
		}
    }
	xhttp.open("GET", "employee.json", true);
	xhttp.send();
 };
 
  
//It gives table heading
var employeeHeading = function(){
	table = document.getElementById('employeetable');
	table.innerHTML = '<tr>'+
							'<th>EMPLOYEE ID</th>'+
							'<th>NAME</th>'+
							'<th>COMPANY</th>'+
					  '</tr>' ;
};

//It creates a table with the json data in Local Storage
var employees = function(){
	if(document.getElementById("companytable").style.display == "block")
		{
			document.getElementById("companytable").style.display = "none";	
			document.getElementById("employeetable").style.display = "block";
		}
		else{
			document.getElementById("employeetable").style.display = "block";
		}
	document.getElementById('edit2').style.display = 'none';
	document.getElementById('edit').style.display = 'none';
	document.getElementById('addemployee').style.display = 'block';
	document.getElementById('addcompany').style.display = 'none';
	employeeHeading();
	var data = JSON.parse(localStorage.getItem('employeeList'));
	var len = data.length;
	for(var i = 0; i<len ; i++){
		var j = i+1;
		var row = table.insertRow(j);
		var id = row.insertCell();
		var name = row.insertCell();
		var company = row.insertCell();
		var editRow = row.insertCell();
		var deleteRow = row.insertCell();
		id.innerHTML = data[i].id;
		name.innerHTML = data[i].name;
		company.innerHTML = data[i].company;
		editRow.innerHTML = '<button onclick="onEditEmployee('+data[i].id+')">Edit</button>' ;
		deleteRow.innerHTML = '<button onclick="onDeleteEmployee('+data[i].id+')">Delete</button>' ;
	}
};

//It edits the particular row
var onEditEmployee = function(id){
	document.getElementById('edit2').style.display = 'block';
	
	if(document.getElementById('updateButton2').style.display == 'none'){
		document.getElementById('updateButton2').style.display = 'block';
	}
	document.getElementById('saveButton2').style.display = 'none';
	if(document.getElementById('resetforsave2').style.display == 'none'){
		document.getElementById('resetforsave2').style.display = 'block';
	}
	document.getElementById('resetforadd2').style.display = 'none';
	
	var employeeList = JSON.parse(localStorage.getItem('employeeList'));
	var len = employeeList.length;
	for(var i = 0; i<len; i++){
		if(id == employeeList[i].id){
			document.getElementById("id2").value = employeeList[i].id;
			document.getElementById("name2").value = employeeList[i].name;
			document.getElementById("company2").value = employeeList[i].company;
			break;
		}
	}
	
	//This updates the particular row
	this.onUpdateEmployee = function(){
		var updateEmployee = {};
		updateEmployee.id = document.getElementById('id2').value;
		updateEmployee.name = document.getElementById('name2').value;
		updateEmployee.company = document.getElementById('company2').value;
		
		employeeList.splice(i, 1, updateEmployee);
		localStorage.setItem('employeeList', JSON.stringify(employeeList));
		onCancel2();
		employees();
	};
	this.onresetEmployee = function(){
		document.getElementById("id2").value = employeeList[i].id;
			document.getElementById("name2").value = employeeList[i].name;
			document.getElementById("company2").value = employeeList[i].company;

	};
	
	};  

// It deletes the row
var onDeleteEmployee = function(index){
	var employeeList = JSON.parse(localStorage.getItem('employeeList'));
	var len = employeeList.length;
	for(var i = 0; i<len; i++){
		if(index == employeeList[i].id){
			employeeList.splice(i,1);
			localStorage.setItem('employeeList', JSON.stringify(employeeList));
			break;
		}
	}
	employees();
};

// It displays the new entry block
var onAddNewEmployee = function(){

		nullData2();
		
	document.getElementById('edit2').style.display = 'block';
		if(document.getElementById('saveButton2').style.display == 'none'){
		document.getElementById('saveButton2').style.display = 'block';
	}
	if(document.getElementById('resetforadd2').style.display=='none'){
		document.getElementById('resetforadd2').style.display='block';
	}

	document.getElementById('updateButton2').style.display = 'none';
	document.getElementById('resetforsave2').style.display = 'none';
	
};

// for resting on add functionality
	var onresetadd2 = function(){
			nullData2();
	
};

// It saves the new entry
var onSaveEmployee = function(){
	
		var employeeList = JSON.parse(localStorage.getItem('employeeList'));
						
		var newEmployee = {};
		newEmployee.id = document.getElementById('id2').value;
		newEmployee.name = document.getElementById('name2').value;
		newEmployee.company = document.getElementById('company2').value;
		
		employeeList.push(newEmployee);
		localStorage.setItem('employeeList', JSON.stringify(employeeList));
		onCancel();
		companies();	
};

// It cancels the block
var onCancel2 = function(){
	nullData2();
	document.getElementById('edit2').style.display = 'none';
}
var nullData2= function(){
		document.getElementById('id2').value = null;
		document.getElementById('name2').value = null;
		document.getElementById('company2').value = null;
	}
init1();



