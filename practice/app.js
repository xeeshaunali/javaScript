// const
//let
//var

//var firstName = "Zeeshan";
//var lastName = "Ali";
//var fullName = firstName + " " + lastName;


//var num1 = +prompt("Enter");
//alert (num1);


// var names = ["a", "b", "c", "d"];

// console.log(names);

// names.pop();
// console.log(names);

// names.push("x");
// console.log(names);


// names.shift();
// console.log(names);

// names.unshift("first");
// console.log(names);

// var a = [1 ,"a","b","c"];
// console.log(a);

// var b = a.slice(0,4);
// console.log(b);


// a.splice(1,1,"z");
// console.log(a);

// a[20] = "Empty";
// console.log(a);

// a.splice(3,17);
// console.log(a);

// console.log(a.length);


// var foods = [];
// console.log(foods);

// foods[0] = "a";
// foods[1] = "b";
// foods[2] = "c";
// console.log(foods);


// var threeArr = [1, 4, 6];
// var oneDown = threeArr.pop();
// console.log(oneDown); // Returns 6

// var user = prompt("Enter NUmber");

// if (user % 2 == 0){
//  alert ("Even");
// } else if (user % 2 == 1 ) {
//     alert ("oDd");
// }


// for(var x = 1; x <=10; x++ ) {
//     document.write("Xee" + "<br>");
// }



// var user = prompt("Please Enter a to c");

// var arr = ["a", "b","c"];

// for (var x = 0; x<= arr.length; x++) {
//     if (user == arr[x]){
//         alert ("Working");
//         break;
//     } else {
//         alert ("Not Found");       
//     }
// }

// var firstName = ['xee','aaa'];
// var lastName  = ['aa','ddd'];

// for (var i = 0; i < firstName.length; i++ ) {
//     for(var j = 0; j< lastName.length; j++) {
//         console.log(firstName[i] + " " + lastName[i]);
//         document.write(firstName[i] + " " + lastName[i]);
//     }
// }


// var table = +prompt("Please Enter Table Number");
// for (var i = 0; i <=10; i++) {
//     document.write(table + "X" + i + "=" + table*i + "<br>" );
// }



// EVEN OFDD PROGRAM

// var arr = [1,2,3,4,5,6,7,8,9];
// var even = [];
// var odd  = [];

// for (var i = 0; i<=arr.length; i++) {
//     if (i % 2 == 0 ) {
//         even.push(i);
//     } else if (i %2 == 1) {
//         odd.push(i);
//     }
// }
// console.log(even);
// console.log(odd);

//CONVERT TO STRING

// var number = 999;
// var myNumber = number.toString();
// console.log(myNumber.length);
// var myNumber




// Cheking words in Array 

// var user = prompt("Enter Alpha from a to d");
// var user = user.toLowerCase();
// var alpha = ["a", "b", "c", "d"];
// for (var i = 0; i <=alpha.length; i++) {
//     if(user == alpha[i]){
//         alert("letter");
//         break;
//     } else if (user !== alpha[i]) {
//         alert ("Not Found");
//     }
//     break;
// }



// += adds 
// var str = "Hello, ";
// str += "world!";
// console.log(str);  // Outputs: "Hello, world!"

// var num = 10;
// num += 20;
// console.log(num);


// pelindrome word check

// var word = prompt("Please Enter Pelindrome Word").trim().toLowerCase();
// var check = "";

// for (var i = word.length-1; i>=0; i--) {
//     check += word[i];
// }

// if (check === word) {
//     console.log(word + " " + "Word is Pelindrome Word" );
// } else {
//     console.log(word +  " " + "Word is Not Pelindorme Word ");
// }



//LOGIC BUILDING 
// let n = 10;
// let string = "";
// for (var i = 1; i<=n; i++) {
//     document.write(i + "<br>");
//     for (var j =1; j <=i;j++){
//         string+= "i";
//     }
//     string += "\n" + "<br>";
// }

// document.write(string);

// var user = prompt("Enter Word").trim();
// var firstChar = user.slice(0,1).toUpperCase();
// console.log(firstChar); // check first Character is Working
// var otherChar = user.slice(1).toLowerCase();
// console.log(otherChar);
// var finalName = firstChar + otherChar;
// console.log(finalName);

// var names = ["Xee", "Shaun"];

// for (var i = 0; i<=names.length; i++) {
//     if (finalName == names[i]){
//         console.log("Converted to Capital First Charactor");
//         break;
//     }
//     else if (finalName !== names[i]) {
//         console.log("Failed")
//     }
// }


// // Head OR Tail Program

// var head = prompt("Head User Name");
// var tail = prompt("Tail User Name");

// var toss= Math.random() * 2;

// var floor = Math.floor(toss);

// if (floor === 0) {
//     console.log("Heads Win" + " " + head );
// } else {
//     console.log("Tails Wins" + " " + tail);
// }

// toFixed() method fixes to range from decimal
console.log(Math.random().toFixed(0));
console.log(Math.random().toFixed(1));
console.log(Math.random().toFixed(2));
console.log(Math.random().toFixed(3));