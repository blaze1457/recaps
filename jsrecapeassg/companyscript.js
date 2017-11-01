// It get the data from Local Storage automatically invoked
var init1 = function(){
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			if(localStorage.getItem('companyList') === null){
				localStorage.setItem('companyList', this.responseText) ;
			}
		}
    }
	xhttp.open("GET", "company.json", true);
	xhttp.send();
 };
 
  
//It gives table heading
var companyHeading = function(){
	table = document.getElementById('companytable');
	table.innerHTML = '<tr>'+
							'<th>REG ID</th>'+
							'<th>Name</th>'+
							'<th>Location</th>'+
					  '</tr>' ;
};

//It creates a table with the json data in Local Storage
var companies = function(){
	if(document.getElementById("employeetable").style.display == "block")
		{
			document.getElementById("employeetable").style.display ="none";
			document.getElementById("companytable").style.display = "block";
		}
		else
		{
		document.getElementById("companytable").style.display = "block";
		}
	document.getElementById('edit2').style.display = 'none';
document.getElementById('edit').style.display = 'none';	
	document.getElementById('addcompany').style.display = 'block';
	document.getElementById('addemployee').style.display = 'none';
	companyHeading();
	var data = JSON.parse(localStorage.getItem('companyList'));
	var len = data.length;
	for(var i = 0; i<len ; i++){
		var j = i+1;
		var row = table.insertRow(j);
		var id = row.insertCell();
		var name = row.insertCell();
		var loc = row.insertCell();
		var editRow = row.insertCell();
		var deleteRow = row.insertCell();
		id.innerHTML = data[i].id;
		name.innerHTML = data[i].name;
		loc.innerHTML = data[i].loc;
		editRow.innerHTML = '<button onclick="onEditCompany('+data[i].id+')">Edit</button>' ;
		deleteRow.innerHTML = '<button onclick="onDeleteCompany('+data[i].id+')">Delete</button>' ;
	}
};

//It edits the particular row
var onEditCompany = function(id){
	document.getElementById('edit').style.display = 'block';
	document.getElementById('resetforadd').style.display = 'none';
	document.getElementById('saveButton').style.display = 'none';
	if(document.getElementById('updateButton').style.display == 'none'){
		document.getElementById('updateButton').style.display = 'block';
	}
	if(document.getElementById('resetforsave').style.display == 'none'){
		document.getElementById('resetforsave').style.display = 'block';
	}
	
	
	var companiesList = JSON.parse(localStorage.getItem('companyList'));
	var len = companiesList.length;
	for(var i = 0; i<len; i++){
		if(id == companiesList[i].id){
			document.getElementById("id1").value = companiesList[i].id;
			document.getElementById("name1").value = companiesList[i].name;
			document.getElementById("company1").value = companiesList[i].loc;
			break;
		}
	}
	
	//This updates the particular row
	this.onUpdateCompany = function(){
		var updateCompany = {};
		updateCompany.id = document.getElementById('id1').value;
		updateCompany.name = document.getElementById('name1').value;
		updateCompany.loc = document.getElementById('company1').value;
		
		companiesList.splice(i, 1, updateCompany);
		localStorage.setItem('companyList', JSON.stringify(companiesList));
		onCancel();
		companies();
	};
	this.onresetCompany = function(){
		document.getElementById("id1").value = companiesList[i].id;
			document.getElementById("name1").value = companiesList[i].name;
			document.getElementById("company1").value = companiesList[i].loc;

	};
	
	};  

// It deletes the row
var onDeleteCompany = function(index){
	var companiesList = JSON.parse(localStorage.getItem('companyList'));
	var len = companiesList.length;
	for(var i = 0; i<len; i++){
		if(index == companiesList[i].id){
			companiesList.splice(i,1);
			localStorage.setItem('companyList', JSON.stringify(companiesList));
			break;
		}
	}
	companies();
};

// It displays the new entry block
var onAddNewCompany = function(){

		nullData();
	document.getElementById('edit').style.display = 'block';
	document.getElementById('updateButton').style.display = 'none';
	document.getElementById('resetforsave').style.display = 'none';
	if(document.getElementById('saveButton').style.display == 'none'){
		document.getElementById('saveButton').style.display = 'block';
	}
	if(document.getElementById('resetforadd').style.display=='none'){
		document.getElementById('resetforadd').style.display='block';
	}

};

// for resting on add functionality
	var onresetadd = function(){
			nullData();
	
};

// It saves the new entry
var onSaveCompany = function(){
	
		var companiesList = JSON.parse(localStorage.getItem('companyList'));
						
		var newCompany = {};
		newCompany.id = document.getElementById('id1').value;
		newCompany.name = document.getElementById('name1').value;
		newCompany.loc = document.getElementById('company1').value;
		
		companiesList.push(newCompany);
		localStorage.setItem('companyList', JSON.stringify(companiesList));
		onCancel();
		companies();	
};

// It cancels the block
var onCancel = function(){
	nullData();
	document.getElementById('edit').style.display = 'none';
}
var nullData= function(){
		document.getElementById('id1').value = null;
		document.getElementById('name1').value = null;
		document.getElementById('company1').value = null;
	}
init1();



