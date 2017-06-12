var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,

    user: "root",

    password: "root",
    database: "bamazon"
});

connection.connect(function (err) {

    if (err) throw err;
    console.log("connected as id " + connection.threadId);

});

inquirer.prompt([
    {
        type: 'list',
        message: 'What would you like to do?',
        name: 'choice',
        choices: [, 'View All Products', 'View Low Inventory', 'Add To Inventory', 'Add New Product'],
    }.then(function (respond) {
        function handleRequest(req, res) {
            var choice = respond.choices;
            switch (choice) {
                case "View All Products":
                    viewProducts();
                    break;
                case "View Low Inventory":
                    viewLowInventory();
                    break;
                case "Add To Inventory":
                    addtoInventory();
                    break;
                case "Add New Product":
                    addNewProduct();
                    break;
                default:
                    console.log("Please select one of the choices");
            }


        }
    })
])   */


function viewProducts() {
        connection.query("SELECT * FROM products", function (err, res) {
            if (err) throw err;
           console.log("All items for sale:");
            for (var i = 0; i < res.length; i++) {
                
                console.log(res[i].item_id + " | " + res[i].product_name + " | " + res[i].department_name + " | " + res[i].price
                    + " | " + res[i].stock_quantity)

            }
        
        });
    };

function viewLowInventory() {
    connection.query("SELECT * FROM products", function (err, res) {
        if (err) throw err;
         console.log("Items with low inventory");
        for (var i = 0; i < res.length; i++) {
           
            if (res[i].stock_quantity <= 3) {
                
                console.log(res[i].item_id + " | " + res[i].product_name + " | " + res[i].department_name + " | " + res[i].price
                    + " | " + res[i].stock_quantity)

            }
        }
    })
}

function addToInventory() {
    connection.query("UPDATE products SET ? WHERE ?", function (err, res) {
        if (err) throw err;

    })
}

function addNewProduct() {
    connection.query("INSERT INTO products SET ?", {
        [{
            item_id: item_id
}, {
            product_name: product_name
}, {
            department_name: department_name
}, {price: price
    }, {
            stock_quantity: stock_quantity
    }]; function (err, res) { }

})
}

viewProducts();
viewLowInventory();