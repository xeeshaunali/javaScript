// const
//let
//var

//var firstName = "Zeeshan";
//var lastName = "Ali";
//var fullName = firstName + " " + lastName;


//var num1 = +prompt("Enter");
//alert (num1);


var names = ["a", "b", "c", "d"];

console.log(names);

names.pop();
console.log(names);

names.push("x");
console.log(names);



names.shift();
console.log(names);

names.unshift("first");
console.log(names);

var a = [1 ,"a","b","c"];
console.log(a);

var b = a.slice(0,4);
console.log(b);


a.splice(1,1,"z");
console.log(a);

a[20] = "Empty";
console.log(a);

a.splice(3,17);
console.log(a);

console.log(a.length);


var foods = [];
console.log(foods);

foods[0] = "a";
foods[1] = "b";
foods[2] = "c";
console.log(foods);


var threeArr = [1, 4, 6];
var oneDown = threeArr.pop();
console.log(oneDown); // Returns 6

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

var firstName = ['xee','aaa'];
var lastName  = ['aa','ddd'];

for (var i = 0; i < firstName.length; i++ ) {
    for(var j = 0; j< lastName.length; j++) {
        console.log(firstName[i] + " " + lastName[i]);
        document.write(firstName[i] + " " + lastName[i]);
    }
}


// var table = +prompt("Please Enter Table Number");
// for (var i = 0; i <=10; i++) {
//     document.write(table + "X" + i + "=" + table*i + "<br>" );
// }


var arr = [1,2,3,4,5,6,7,8,9];
var even = [];
var odd  = [];

for (var i = 0; i<=arr.length; i++) {
    if (i % 2 == 0 ) {
        even.push(i);
    } else if (i %2 == 1) {
        odd.push(i);
    }
}
console.log(even);
console.log(odd);

var number = 999;
var myNumber = number.toString();
console.log(myNumber.length);
var index1 = myNumber.indexOf(-1);
console.log(index1);

