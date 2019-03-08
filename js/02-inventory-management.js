/*eslint-env browser*/

//The Product Inventory Management System (55 points)

//In this part of the assignment you will use multi-dimensional arrays to build a small inventory management system. Here are the specifics:
//•	The primary array will be “inventory”.

//var session;
//var list = "";
window.console.log(localStorage);
window.console.log(localStorage.getItem('inventory'));
if(localStorage.getItem('inventory') == null){
		
var inventory = [
                [2233, "Hat",       12, 14.99],
                [3223, " Socks",    36, 9.99],
                [4824, " Shirt",    10, 15.99],
                [6343, " Jeans",    22, 39.99],
                [9382, " Jacket",    5, 49.99]];
}
window.console.log(inventory);




function display_menu() {
    "use strict";
    window.console.log("Welcome to the Employee Management Application");
    window.console.log("");
    window.console.log("COMMAND MENU");
    window.console.log("view - Show intentory");
    window.console.log("add - Add a product");
    window.console.log("del - Delete a product");
    window.console.log("exit - Exit the program");
    window.console.log("");
};
//display_menu();


//•	The nested arrays (products) will each contain elements that represent sku (number), product (string), quantity (number), and cost (floating point number).
//•	You should have at least 5 products in your inventory.

//•	Similar to lab 9, your application should display a title in the console window along with a command menu that features commands to view all products, update stock, and exit the program. 
//•	When the user select view, rather than displaying each product in a numeric list like you did in lab 9, you should display the details for each product, ordered by sku number. Here’s an example of what the user should see if they choose the view command:

//2233 Hat (12) $14.99
//3223 Socks (36) $9.99
//4824 Shirt (10) $15.99
//6343 Jeans (22) $39.99
//9382 Jacket (5) $49.99



function view(inventory) {
    "use strict";
//	window.console.log(inventory);
	
	inventory = inventory.sort();
    // loop the outer array
	inventory.forEach(function(i){
//		window.console.log([i]);
		console.log([i][0][0] + " " + [i][0][1] + " ("  + [i][0][2] + ") $" + [i][0][3]);

}); 
	
	
//•	All data should be persisted using Web Storage. If the user closes the browser and then reopens it, all of the data should be retained from the previous session.
		 window.console.log(inventory);
         localStorage.setItem('inventory', inventory.join("|")); 
    }

//•	If the user selects the update command, a prompt should appear that allows the user to enter a sku number. Once the user enters a correct sku number a second prompt should appear that allows the user to enter a new stock quantity. The quantity should then update the product of the sku number entered.

function update(sku, quantity){
    "use strict";
//    sku = parseInt(window.prompt("Enter sku number to be added"), 10);
    if (sku < 1 || sku > sku.length) {
        window.alert("Invalid sku number, please re-enter a valid sku number");
    } else {
//        if (quantity !== quantity.isInteger()){
		if(typeof quantity == 'integer') {
            window.alert("Please re-enter a valid number");
        } else {
			var selectedInventory = inventory.forEach(function(i){
if(inventory[i] == sku) return i;
});
            inventory = inventory.splice([selectedInventory][2], quantity);
        }
        window.console.log(sku + ' was updated.');
    }
}


//•	Make sure to validate all inputs. If the user enters a command that’s not valid, the application should be able to handle that. Similarly, if the user enters a bad sku number, or text instead of a number when updating stock, the application should be able to handle that too.

    
    function main() {
    "use strict";
    var command;
    
    display_menu();
//window.console.log(inventory);
		
    while (true) {
        command = window.prompt("Enter command");
        if (command !== null) {
            if (command === "view") {
                view(inventory);
            } else if (command === "update") {
				 var sku = parseInt(window.prompt("Enter sku number to be added"), 10);
				var quantity = parseInt(window.prompt("Enter quantity"), 10);
                update(sku, quantity);
				
//•	If the user selects the exit command, the program should be terminated.

            } else if (command === "exit") {
				    window.console.log("Program terminated.");
                break;
            } else {
                window.alert("That is not a valid command.");
            }
        } else {
            break;
        }
    window.console.log("Program terminated.");
}
	}
main();

