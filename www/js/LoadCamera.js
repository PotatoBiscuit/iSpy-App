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
	// this will be true since it was a select statement and so rowsAffected was 0
	var len = results.rows.length;
	
	for (var i=0; i<len; i++){
		var list = document.createElement("LI");
		list.className = "ul_element";
		list.innerHTML = "<label for='mylist-node" + results.rows.item(i).number + "'><div class = 'ul_container1'>" + results.rows.item(i).data + " " + results.rows.item(i).number + "</div><div class = 'ul_container2'><p style='color:green; margin-top:7vh;'>Active</p></div></label><input type='checkbox' id='mylist-node" + results.rows.item(i).number + "' /><ul><li class = 'li_editor'><button class = 'button_edit_del' type='button' onclick='AddCamera()'>Edit</button><button class = 'button_edit_del' type='button' onclick='ViewCamera()'>Delete</button></li></ul>";
		var holder = document.getElementById("collapsibleList");
		holder.appendChild(list);
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