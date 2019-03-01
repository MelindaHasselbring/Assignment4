/*eslint-env browser*/

//STEP  1.	Create a string array that contains your five favorite movies. Then, use the console to display the second movie in your array.
var fruits = ["pineapple", "rasberry", "cherry", "apple", "orange"]
window.console.log(fruits[1]);


//STEP  2.	Declare an array called movies using the function constructor method. Add the length of 5 into the constructor. Then, assign one of your favorite movies to each index in the array until you have 5 total movies in your array. Then, use the console to display the first movie in your array.

var movie = new Array(5);
    movie[0] "Jurassic Park",
    movie[1] "Titanic",
    movie[2] "Toy Story",
    movie[3] "Iron Man",
	movie[4] "X Men",
window.console.log(movies[0]);

		
		
//STEP 3.	Copy your code from step 2. Add a new movie into the 5th position within your array. Then, use the console to display the length of the array. You should now have 6 total movies stored in the array.

var movie = new Array(5);
    movie[0] "Jurassic Park",
    movie[1] "Titanic",
    movie[2] "Toy Story",
    movie[3] "Iron Man",
	movie[4] "X Men",
	movie[5] "THOR",	
window.console.log(movie.length);


//STEP 4.	Declare an array called movies using literal notation. Then, assign one of your favorite movies to each index in the array until you have 5 total movies in your array. Now, use the delete operator to remove the first movie in the array. Use the console to display the contents of the array.

var movie = new Array(5);
    movie[0] "Jurassic Park",
    movie[1] "Titanic",
    movie[2] "Toy Story",
    movie[3] "Iron Man",
	movie[4] "X Men",
	movie[5] "THOR",	
movie.delete[0];
console.log(movie[]);


//STEP 5.	Declare an array called movies using literal notation. Then, assign one of your favorite movies to each index in the array until you have 7 total movies in your array. Now, use a for loop to iterate through the array and display each movie within the console window.
var i;
var movies=["Jurassic Park", "Titanic", "THOR", "X Men", "Iron Man","Spider Man"];
 	for (i = 0; i < movies.length; i += 1){
		window.console.log(movies[i]);
	}

//STEP 6.	Copy the code from step 5. Now, use a for-in loop to iterate through the array and display each movie within the console window.
var i;
var movies=["Jurassic Park", "Titanic", "THOR", "X Men", "Iron Man","Spider Man"];
 	for (i in movies) {
		window.console.log(movie[i]);
	}


//STEP 7.	Copy the code from step 5. Using the for-in loop to iterate through the array, display each movie within the console window in a sorted view.

var i;
var movies=["Jurassic Park", "Titanic", "THOR", "X Men", "Iron Man","Spider Man"];
 	array.sort();
	window.console.log(movie[i]);
	}


//STEP 8.	Copy the code from step 5. Under the existing array, create a new array called leastFavMovies. Populate the array with the 3 movies that you regret watching. Display both arrays within the console window so that it’s formatted to look like this (note the spacing, you must include that too):
//	Movies I like:
//
//Movie 1
//Movie 2
//Movie 3
//…
//
//Movies I regret watching:
//
//Movie 1
//Movie 2
//Movie 3


var movie = new Array(5);
    movie[0] "Jurassic Park",
    movie[1] "Titanic",
    movie[2] "Toy Story",
    movie[3] "Iron Man",
	movie[4] "X Men",
	movie[5] "THOR",	

var leastFavMovies = new leastFavMovies(3);
	leastFavMovies[0] "Dumb and Dumber",
 	leastFavMovies[1] "Jackass",
	leastFavMovies[2] "Idiocracy",

console.log("  Movies I like: " + "\n" +"\n" + movie[0] + "\n" + "Movie " + movie[1] + "\n"  + "Movie " + movie[2] + "\n" + "\n" + "  Movies I regret watching: " + "\n" +"\n" + movie[0] + "\n" + "Movie " + movie[1] + "\n"  + "Movie " + movie[2] + "\n" + "\n");


//STEP 9.	Copy the code from step 8. Now, use the concat() method to merge the two arrays together into a single array called movies. Use the console window to display the list in reverse sorted order.

var movies = new Array(5);
    movies[0] "Jurassic Park",
    movies[1] "Titanic",
    movies[2] "Toy Story",
    movies[3] "Iron Man",
	movies[4] "X Men",
	movies[5] "THOR",	


var leastFavMovies = new leastFavMovies(3);
	leastFavMovies[0] "Dumb and Dumber",
 	leastFavMovies[1] "Jackass",
	leastFavMovies[2] "Idiocracy",
		
movies = movies.concat("Dumb and Dumber",  "Jackass", "Idiocracy")
console.log(movies.reverse());


//STEP 10.	Copy the code from step 9. Use an array function to return just the last item in the array and display it within the console window.
var movies = new Array(5);
    movies[0] "Jurassic Park",
    movies[1] "Titanic",
    movies[2] "Toy Story",
    movies[3] "Iron Man",
	movies[4] "X Men",
	movies[5] "THOR",	

var leastFavMovies = new leastFavMovies(3);
	leastFavMovies[0] "Dumb and Dumber",
 	leastFavMovies[1] "Jackass",
	leastFavMovies[2] "Idiocracy",
		
movies = movies.concat("Dumb and Dumber",  "Jackass", "Idiocracy")
console.log(movies.lastIndexOf("Idiocracy"));

//STEP 11.	Copy the code from step 10. Remove the previous method and this time use a method to return just the first item in the array and display it within the console window

var movies = new Array(5);
    movies[0] "Jurassic Park",
    movies[1] "Titanic",
    movies[2] "Toy Story",
    movies[3] "Iron Man",
	movies[4] "X Men",
	movies[5] "THOR",	

var leastFavMovies = new leastFavMovies(3);
	leastFavMovies[0] "Dumb and Dumber",
 	leastFavMovies[1] "Jackass",
	leastFavMovies[2] "Idiocracy",
		
movies = movies.concat("Dumb and Dumber",  "Jackass", "Idiocracy")
console.log(movies.indexOf("Jurassic Park"));

//STEP 12.	Programmatically retrieve the movies in your array that you do not like and return their indices. Then, using those indices, programmatically add movies that you do like. 
var movies = new Array(5);
    movies[0] "Jurassic Park",
    movies[1] "Titanic",
    movies[2] "Toy Story",
    movies[3] "Iron Man",
	movies[4] "X Men",
	movies[5] "THOR",	

var leastFavMovies = new leastFavMovies(3);
	leastFavMovies[0] "Dumb and Dumber",
 	leastFavMovies[1] "Jackass",
	leastFavMovies[2] "Idiocracy",

movies = movies.concat("Dumb and Dumber",  "Jackass", "Idiocracy")
console.log(movies.indexOf("Dumb and Dumber", "Jackass","Idiocracy" ));
console.log(movies.splice(6, 0,"Avengers", "Doctor Strange", "Guardians of thr Galaxy"));

//STEP 13.	Create two associative arrays called employee1 and employee2 respectively. Each array should have an employeeid, name, title, department, and whether or not the employee is a current employee of the company. Now, add both of those associative arrays to a new array called employees. Then, programmatically display the name of the second employee within a console window. 
var employee1 = [];
employee["id"] = 4235;
employee["name"] = "Zak Ruvalcaba";
employee["title"] = "Web Developer";
employee["department"] = "Engineering";
employee["isCurrent"] = true;

var employee2 = [];
employee["id"] =5000;
employee["name"] = "Melinda Hasselbring";
employee["title"] = "Web Developer";
employee["department"] = "Engineering";
employee["isCurrent"] = true;

console.log(employees.concat(employee2));
console.log(employees.name[1]);




//STEP 14.	Copy the code from step 13. Modify the code slightly so that you’re using a loop to iterate through the array and print out the names of both employees.
var i;
var employee1 = [];
employee["id"] = 4235;
employee["name"] = "Zak Ruvalcaba";
employee["title"] = "Web Developer";
employee["department"] = "Engineering";
employee["isCurrent"] = true;

var employee2 = [];
employee["id"] =5000;
employee["name"] = "Melinda Hasselbring";
employee["title"] = "Web Developer";
employee["department"] = "Engineering";
employee["isCurrent"] = true;

console.log(employees.concat(employee2));

for(var 1 = 0; index < employees.length; 1++) {
    console.log(i  + employees[i]);
}


//STEP 15.	Copy the code from step 14. Now add a third employee and set his employment status to false. Then, programmatically loop through the array but don’t display an employee if they aren’t a current employee of the company. Basically, only the first two should appear in the console window.
var employee1 = [];
employee["id"] = 4235;
employee["name"] = "Zak Ruvalcaba";
employee["title"] = "Web Developer";
employee["department"] = "Engineering";
employee["isCurrent"] = true;

var employee2 = [];
employee["id"] =5000;
employee["name"] = "Melinda Hasselbring";
employee["title"] = "Web Developer";
employee["department"] = "Engineering";
employee["isCurrent"] = true;

var employee3 = [];
employee["id"] =6000;
employee["name"] = "Mike Boone";
employee["title"] = "Project Manager";
employee["department"] = "Engineering";
employee["isCurrent"] = false;

console.log(employees.concat(employee2));
employees.push(employee3);

var i;

for (i = 0; i < employees.length; i +=1) {
	window.document.write(employees[i][0] + " " + employees[i][1]);
}


var current = employees.find(function(element) {
  return employees["isCurrent"] = true;
});


//STEP 16.	Create a multi-dimensional array that contains your 5 favorite movies and their ranking from 1-5. The array should look something like this: 

//movies = [["Movie 1", 1], ["Movie 2", 2], ["Movie 3", 3], ["Movie 4", 4], ["Movie 5", 5]];

//Now, loop through the array and filter out and display only the movie names. You must use the filter() method and you’ll need to filter out the names by their primitive data type.

var i;
var movies = [["Avengers",1],["Doctor Strange",2],["THOR",3],["X Men",4],["THOR",5]];
for (i = 0; i < employees.length; i +=1) {
	window.document.write(movies[i][0] + " " + movies[i][1] + " " + movies[i][2] + " " + movies[i][3] + " " + movies[i][4]);
}

//STEP 17.	Create a string array called employees using literal notation and populate the array with several employee names. Then, create an anonymous function called showEmployee. The function should accept a parameter. Call this function, passing in the employees array into the function as a parameter. Make sure to display the result in the console window. Within the function, loop through the passed in array and display the result so that it looks exactly like this in the console window:

//Employees: 
//
//ZAK 
//JESSICA 
//MARK 
//FRED 
//SALLY

var employees = ["Zak", "JESSICA", "MARK", "FRED", "SALLY"];

function display(employee_list) {
    "use strict";
    var i = 1;
    employees.forEach(function (employee) {
        window.console.log(String(i) + ". " + employee);
        i += 1;
    });
    window.console.log("");
}


//STEP 18.	Write a JavaScript function to filter false, null, 0 and blank values from an array.
//Test Data: window.console.log(filterValues([58, '', 'abcd', true, null, false, 0]));
//Expected Result: [58, "abcd", true]

var items = [58, '', 'abcd', true, null, false, 0];
window.console.log(filterValues([58, '', 'abcd', true]));


//STEP 19.	Write a JavaScript function to get a random item from an array. So if I create a numeric array with 10 numbers and then pass that array into my function, the function should randomly return one of those numbers.

function random_item(items) {
  return items[Math.floor(Math.random()*items.length)];   
}

var items = [289, 90, 412, 369, 783, 374, 45, 219, 125, 8943];
console.log(random_item(items));

//STEP 20.	Write a JavaScript function to get the largest number from a numeric array. 


var myArray = [289, 90, 412, 369, 783, 374, 45, 219, 125, 8943];

console.log(Math.max(...myArray));
