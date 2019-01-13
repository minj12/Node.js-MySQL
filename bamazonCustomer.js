// Dependencies
var mysql = require('mysql');
var inquirer = require('inquirer');

// Connect to database
const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'min95595',
  database : 'bamazon_db'
});

connection.connect(function(err) {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }
  console.log('connected as id ' + connection.threadId);
});

// Show ids, names, and prices of products
connection.query('SELECT * FROM `products`', function (err, results, fields) {
  if (err) {
    console.log(err);
  }
  for (var i=0; i<results.length; i++) {
    console.log(results[i].item_id + " " + results[i].product_name + " [" + results[i].price + "]");
  }
  // Prompt user to select a product and enter desired quantity
  function buyPrompt() {
    inquirer.prompt( [{
      name: "itemId",
      type: "input",
      message: "Enter the id of the product you'd like to buy."
    }, {
      name: "quantity",
      type: "input",
      message: "How many units would you like to purchase?"
    }]).then(function(answer) {
      for (var i=0; i<results.length; i++) {
        if (results[i].item_id === parseInt(answer.itemId)) {
          // If order quantity is too much, let user know "insufficient stock!"
          if (results[i].stock_quantity < parseInt(answer.quantity)) {
            console.log("Insufficient stock!");
            buyPrompt();
          } else {
            // Calculate total and remaining stock
            let total = parseFloat(answer.quantity*results[i].price).toFixed(2);
            let newStock = results[i].stock_quantity - answer.quantity;

            // Construct for the query to update stock
            const updateStock = 'UPDATE `products` SET `stock_quantity` = ' + newStock + ' WHERE `item_id` = ' + answer.itemId
            connection.query(updateStock, function(err, result) {
              if (err) {
                console.log(err);
              } else {
                console.log(result.affectedRows + " product updated");
              }
            });

            // Notify user of successful purchase
            console.log("You have purchased " + answer.quantity + " " + results[i].product_name);
            console.log("Your order total is " + total);
          }
        }
      }
    });
  }
  buyPrompt();
});