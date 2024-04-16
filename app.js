// var students = [];

// students[0] = "Xee";
// students[1] = "Ali";
// students[2] = "Narejo";

// console.log(students);

// var copyStudents = students.slice(0,2);

// console.log(copyStudents);


// var arr = ["cats", "dog", "tiger", "lion"];


// var a;
// var b = +prompt("Enter Table" + "Value");

// for(a = 1; a<=10; a++){
//     document.write(b + " " + "X" + " " + a + " " + "=" + 2*a + "<br>")
// }


// var names = ["Zee", "shan", "Ali"]

// for(i = 0; i < names.length; i++){
//     document.write(names[i])
// }



// var cities = ["Lahore", "Islamabad", "Faisalabad", "Karachi"];

// for(i=0; i<cities.length; i++){
//     if(cities[i] === "Karachsdsdi"){
//         alert(cities[i] + "Working")
//     } else {
//         alert("NOOOOOOOOO")
//     }       break;
// }



// var cities = ["Kotri", "Hyderabad", "Karachi"];
// for (var i = 0; i < cities.length; i++){
//     document.write(cities[i] + "<br>")
// }




// for (var i = 1; i > 0; i++){
//     console.log("Infinite")
//     if(i === 200){
//         break
//     }
// }




// for (var i = 0; i < 5; i++){

//     for(var j = 0; j < 3; j++){
//         document.write(j + "Pakistan Zindabad" + "<br>");
//     }    

// }



// var firstName = ["Xee", "Umair", "Naveed"];
// var lastName   = ["Ali", "Aftab", "Bhatti"];

// for (var i = 0; i < firstName.length; i++){

//     for (var x = 0; x < lastName.length; x++)

//     {
//         document.write(firstName[i] + " " + lastName[x] + "<br>");
//     }

// }



// for(var i = 0; i < 10; i++ ){

//     for(var j =0; j<i; j++){
//         document.write("*")        
//     }
//     document.write("<br>")
// }



// var i = "zeeshan";

// var j = i.toUpperCase();
// document.write(j)


// var check;
// var word = promt("Enter Word");

// for (var i = word.lenght -1; i > 0;  i-- ){

// }



// var me = "Zeeshan Ali Narejo";

// me.indexOf(me);

// alert(me.indexOf("o"));



// var val1 = prompt("enter Your First Value");
// var sign = prompt("Enter Operator");
// var val2 = prompt("Enter Your Second value");

// console.log(val1 + sign + val2);

// console.log(eval(val1 + sign + val2))




// for(var a = 1; a < 100; a = a+10){

//     for(var b = a; b < a+10 ; b++){
//         document.write(b )
//     }
//    document.write("<br>")
// }


// var city = prompt("Please Enter Your City Name");
// city = city.toLowerCase();
// var array = ["karachi", "islamabad", "pishawar"];
// for (var i = 0; i < array.length; i++){
    
//     if(array[i] === city ){
//         console.log(city + " " + "is found:" );       
        
//     } 
// }




var city = prompt("Please Enter City Name");
var firstChar = city.slice(0,1);
var secondChar = city.slice(1);
firstChar = firstChar.toUpperCase();
secondChar = secondChar.toLocaleLowerCase()
city = firstChar + secondChar; 
alert(city);




