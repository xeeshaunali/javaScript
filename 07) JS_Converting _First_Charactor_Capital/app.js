var user = prompt("Enter Word").trim();
var firstChar = user.slice(0,1).toUpperCase();
console.log(firstChar); // check first Character is Working
var otherChar = user.slice(1).toLowerCase();
console.log(otherChar);
var finalName = firstChar + otherChar;

var names = ["Xee", "Shaun"];

for (var i = 0; i<=names.length; i++) {
    if (finalName == names[i]){
        console.log("Converted to Capital First Charactor");
        break;
    }
    else if (finalName !== names[i]) {
        console.log("Failed")
    }
}

