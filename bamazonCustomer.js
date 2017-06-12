var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,

    user: "root",

    password: "root",
    database: "bamazon"
});

connection.connect(function(err) {
    
    if (err) throw err;
    console.log("connected as id " + connection.threadId);

});

connection.query("SELECT * FROM products", function(err, res) {
    if (err) throw err;

    for (var i = 0; i < res.length; i++){
        console.log(res[i].item_id + " | " + res[i].product_name + " | " + res[i].department_name + " | " + res[i].price 
        + " | " + res[i].stock_quantity)
        
    }
    //console.log(res[0].artist);
    
});

inquirer.prompt([
    {
        type: 'input',
        message: 'What is the ID of the product you would like to buy?',
        name: 'id'
    },
    {
        type: 'input',
        message: 'How many would you like?',
        name: 'quantity'
    }
    ]).then(function(respond){
        var id = (respond.id - 1);
        var quantity = respond.quantity;
        console.log(id);
        //console.log(quantity);
    //);

        connection.query("SELECT * FROM products", function(err, res) {
              console.log(res[id].stock_quantity);
    if (err) throw err;

    if ((res[id].stock_quantity - quantity) < 0){
        console.log("Insufficient quantity!");
    } else {
        console.log("That will be $" + (quantity * res[id].price) + ", please.")
    }//new stuff below this line

    var newQuantity = (res[id].stock_quantity - quantity);

connection.query("UPDATE products SET stock_quantity = ? WHERE item_id = ?" [newQuantity, id], function(err, res){});
    console.log("Thank you! Now there are " + newQuantity + " of that item left.");
    //console.log(err);

    connection.end();  
    });
    //console.log(res[0].artist);
    
});


   // });

//connection.end();
