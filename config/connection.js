
var Sequelize = require("sequelize");

var sequelize = new Sequelize("burger", "root", null, {
	host: "localhost",
	dialect: "mysql",
	pool: {
		max: 5,
		min: 0,
		idle: 10000
	}
});

module.exports = sequelize;

// old code
//var mysql = require("mysql");

//var connection = mysql.createConnection({
//  host: "localhost",
//  user: "root",
//  password: "",
//  database: "burgers_db"
//});

//connection.connect(function(err) {
//  if (err) {
//    console.error("error connecting: " + err.stack);
//    return;
//  }
//  console.log("connected as id " + connection.threadId);
//});

//module.exports = connection;
