/*eslint-env browser*/

//STEP  1.	

//var fruits = ["pineapple", "rasberry", "cherry", "apple", "orange"]
//window.console.log(fruits[1]);


//STEP  2.	

//var movie = new Array(5);
//    movie[0] = "Jurassic Park",
//    movie[1] = "Titanic",
//    movie[2] = "Toy Story",
//    movie[3] = "Iron Man",
//	  movie[4] = "X Men",
//window.console.log(movie[0]);

		
		
//STEP 3.

//var movies = new Array(5);
//    movies[0] = "Jurassic Park",
//    movies[1] = "Titanic",
//    movies[2] = "Toy Story",
//    movies[3] = "Iron Man",
//	  movies[4] = "X Men",
//movies.push("Cinderella");	
//window.console.log(movies.length);
//window.console.log(movies);
//

//STEP 4.	

//var movies = ["Jurassic Park","Titanic","Toy Story","Iron Man","X Men"];
//
//movies.shift();
//window.console.log(movies);


//STEP 5.	

//var i;
//var movies=["Jurassic Park", "Titanic", "THOR", "X Men", "Iron Man","Spider Man", "Cinderella"];
// 	for (i = 0; i < movies.length; i += 1){
//		window.console.log(movies[i]);
//	}



//STEP 6.

//var i;
//var movies=["Jurassic Park", "Titanic", "THOR", "X Men", "Iron Man","Spider Man", "Cinderella"];
// 	for (i in movies) {
//		window.console.log(movies[i]);
//	}


//STEP 7.	

//var i;
//var movies=["Jurassic Park", "Titanic", "THOR", "X Men", "Iron Man","Spider Man"];
//for (i in movies) {
// 	movies.sort();
//	window.console.log(movies[i]);
//	}


////STEP 8.	

//var i;
//var movies=["Jurassic Park", "Titanic", "THOR", "X Men", "Iron Man","Spider Man", "Cinderella"];
//var leastFavMovies = ["Dumb and Dumber","Jackass","Idiocracy"];
//window.document.write("  "+"  Movies I like:"+"<br>"+"<br>");
//for (i = 0; i < movies.length; i++){
//window.document.write(movies[i]+"<br>");
//}
//window.document.write("<br>"+"  Movies I regret watching:"+"<br>"+"<br>");
//for (i = 0; i < leastFavMovies.length; i++){
//window.document.write(leastFavMovies[i]+"<br>");
//}





//STEP 9.

//var movies=["Jurassic Park", "Titanic", "THOR", "X Men", "Iron Man","Spider Man", "Cinderella"];
//var leastFavMovies = ["Dumb and Dumber","Jackass","Idiocracy"];

//movies = (movies.concat(leastFavMovies));
//window.console.log(movies.reverse());




//STEP 10.	

//var movies=["Jurassic Park", "Titanic", "THOR", "X Men", "Iron Man","Spider Man", "Cinderella"];
//var leastFavMovies = ["Dumb and Dumber","Jackass","Idiocracy"];

//movies = (movies.concat(leastFavMovies));
//window.console.log(movies);
//console.log(movies.lastIndexOf("Idiocracy"));




//STEP 11.	

//var movies=["Jurassic Park", "Titanic", "THOR", "X Men", "Iron Man","Spider Man", "Cinderella"];
//var leastFavMovies = ["Dumb and Dumber","Jackass","Idiocracy"];
//movies = (movies.concat(leastFavMovies));
//console.log(movies.indexOf("Jurassic Park"));



//STEP 12.	

//var movies=["Jurassic Park", "Titanic", "THOR", "X Men", "Iron Man","Spider Man", "Cinderella"];
//var leastFavMovies = ["Dumb and Dumber","Jackass","Idiocracy"];
//movies = (movies.concat(leastFavMovies));

//console.log(movies.indexOf("Dumb and Dumber", "Jackass","Idiocracy" ));
//movies.splice(7, 0,"Avengers", "Doctor Strange", "Guardians of the Galaxy");
//window.console.log(movies);



//STEP 13.	

//var employees = [];
//var i;
//var employee1 = [];
//employee1["id"] = 4235;
//employee1["name"] = "Zak Ruvalcaba";
//employee1["title"] = "Web Developer";
//employee1["department"] = "Engineering";
//employee1["isCurrent"] = true;
//
//var employee2 = [];
//employee2["id"] =5000;
//employee2["name"] = "Melinda Hasselbring";
//employee2["title"] = "Web Developer";
//employee2["department"] = "Engineering";
//employee2["isCurrent"] = true;
//
//employees.push(employee1,employee2);
//window.console.log(employees[1]["name"]);

//STEP 14.	

//var employees = [];
//var i;
//var employee1 = [];
//employee1["id"] = 4235;
//employee1["name"] = "Zak Ruvalcaba";
//employee1["title"] = "Web Developer";
//employee1["department"] = "Engineering";
//employee1["isCurrent"] = true;
//
//var employee2 = [];
//employee2["id"] =5000;
//employee2["name"] = "Melinda Hasselbring";
//employee2["title"] = "Web Developer";
//employee2["department"] = "Engineering";
//employee2["isCurrent"] = true;
//
//employees.push(employee1,employee2);
//
//for(var i = 0; i < employees.length; i++) {
//    window.console.log(employees[i]["name"]);
//}


////STEP 15.	

//var employees = [];
//var i;
//var employee1 = [];
//employee1["id"] = 4235;
//employee1["name"] = "Zak Ruvalcaba";
//employee1["title"] = "Web Developer";
//employee1["department"] = "Engineering";
//employee1["isCurrent"] = true;
//
//var employee2 = [];
//employee2["id"] =5000;
//employee2["name"] = "Melinda Hasselbring";
//employee2["title"] = "Web Developer";
//employee2["department"] = "Engineering";
//employee2["isCurrent"] = true;
//
//employees.push(employee1,employee2);
//
//var employee3 = [];
//employee3["id"] = 6000;
//employee3["name"] = "Mike Boone";
//employee3["title"] = "Project Manager";
//employee3["department"] = "Engineering";
//employee3["isCurrent"] = false;
//
//employees.push(employee3);
//window.console.log(employees);
//
//
//for(var i = 0; i < employees.length; i++) {
//	
//	if ("isCurrent" === true){
//    window.console.log(employees[i]["name"]);
//	}
//}
//
//foreach(employees as key => item) {
//	foreach(item as key => isCurrent){
//		if key ==
//	}
//}

//STEP 16.	

//var movies = [["Avengers", 1],["Doctor Strange", 2],["THOR", 3],["X Men", 4],["THOR", 5]];
//	
//var myFaveMovies = movies.filter(function (item){
//	"use strict"; 
//	return typeof item === "string";	
//});
//window.console.log(myFaveMovies);
//





//STEP 17.
//
//var employees = ["Zak", "JESSICA", "MARK", "FRED", "SALLY"];
//var showEmployees = function(showEmployees){
//    "use strict";
////    var i = 1;
//    employees.forEach(function (employees) {
//        window.console.log(employees);
////        i += 1;
//    });
//}
//showEmployees();




//STEP 18.

//var items = [58, '', 'abcd', true, null, false, 0];
//var filterValues = items.filter(function(items){
//	"use strict";
//	return typeof items  === "number" || items  === "abcd" || items  === "true";
//});
//window.console.log(filterValues);
//



//STEP 19.	

//function random_item(items) {
//  return items[Math.floor(Math.random()*items.length)];   
//}
//
//var items = [289, 90, 412, 369, 783, 374, 45, 219, 125, 8943];
//console.log(random_item(items));




//STEP 20.

//var myArray = [289, 90, 412, 369, 783, 374, 45, 219, 125, 8943];
//console.log(Math.max(...myArray));
//




