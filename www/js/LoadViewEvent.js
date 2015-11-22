// Wait for Cordova to load
//
document.addEventListener("deviceready", onDeviceReady, false);

// Cordova is ready
//
function onDeviceReady() {
	var db = window.openDatabase("Database", "1.0", "Cordova Demo", 200000);
	db.transaction(queryDB, errorCB);
}


function queryDB(tx) {
	tx.executeSql('SELECT * FROM DEMO WHERE data="Event"', [], querySuccess, errorCB);
}

function querySuccess(tx, results) {
	
	
	var len = results.rows.length;
	
	for (var i=0; i<len; i++){
		var title = document.createElement("div");
		title.className = "title_view";
		title.innerHTML = results.rows.item(i).data + " " + results.rows.item(i).number;
		var holder = document.getElementById("view_holder");
		holder.appendChild(title);
		
		title = document.createElement("div");
		title.className = "content_camera_view";
		title.innerHTML = "<img src = 'img/nothing-here.jpg'>";
		holder.appendChild(title);
		
	}
	
	if (!results.rowsAffected) {
		console.log('No rows affected!');
		return false;
	}
}

// Transaction error callback
//
function errorCB(tx, err) {
	alert("Error processing SQL: "+err);
}