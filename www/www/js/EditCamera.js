function EditCamera1(){
	ID = localStorage["id"];
	db.transaction(queryDB1, errorCB1);
	return false;
}

function queryDB1(tx) {
	var message = "UPDATE DEMO SET src='" + document.forms["EditCamera"]["src"].value + "',number='" + document.forms["EditCamera"]["number"].value + "' WHERE id=" + ID;
	tx.executeSql(message);
	window.location = "AddCamera.html";
}

function errorCB1(tx, err) {
	alert("Error processing SQL: "+err);
}