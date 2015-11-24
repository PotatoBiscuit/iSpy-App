function addEvent(){
	var source = document.forms["AddNewEvent"]["source"].value;
	var number = document.forms["AddNewEvent"]["number"].value;
	if(source == null || source == "" || number == null || number == ""){
		alert("Finish the form ya doofas");
		return false;
	}
	
	var db = window.openDatabase("Database", "1.0", "Cordova Demo", 200000);
	db.transaction(queryDB, errorCB);
}

function queryDB(tx) {
	var retrieve = "SELECT id FROM DEMO ORDER BY id DESC LIMIT 1";
	tx.executeSql(retrieve, [], querySuccess, errorCB);
}

function querySuccess(tx, results){
	var ID = results.rows.item(0).id;
	ID = ID + 1;
	number = document.forms["AddNewEvent"]["number"].value;
	source = document.forms["AddNewEvent"]["source"].value;
	var command = "INSERT INTO DEMO (id, number, data, src) VALUES (" + ID + "," + number + ", 'Event','" + source + "')";
	tx.executeSql(command);
	window.location="AddEvent.html";
}

function errorCB(tx, err) {
	alert("Error processing SQL: "+err);
}