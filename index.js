const express = require('express')
const mysql = require('mysql')
const app = express()
const sql = "SELECT * FROM `events` WHERE `eid` = 126608"

/*

const con = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "",
	database: "new"

})

con.connect(function(err){
	if(err) throw err;
	console.log("Connected!")
	

	
	con.query("CREATE DATABASE nodedb", function (err, result) {
    if (err) throw err;
    	console.log("Database created");
  	})
  	

	
	con.query(sql, function (err, result){
		if(err) throw err;
		console.log("Result: ", result)
	})
	
})

*/


app.use(express.static('public'))
app.listen(3000, () => console.log('Server running on port 3000'))