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
	tx.executeSql('SELECT * FROM DEMO WHERE data="Camera"', [], querySuccess, errorCB);
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

		if (i % 4 == 0) {
			title.innerHTML = "<img src='img/backyard.jpg' style='width: 100vw; height: 65vw;'>";
		} else if (i % 4 == 1) {
			title.innerHTML = "<img src='img/front.jpg' style='width: 100vw; height: 65vw;'>";
		} else if (i % 4 == 2) {
			title.innerHTML = "<img src='img/garage.jpg' style='width: 100vw; height: 65vw;'>";
		} else {
			title.innerHTML = "<img src='img/hallway.jpg' style='width: 100vw; height: 65vw;'>";
		}

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