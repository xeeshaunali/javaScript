var user = prompt("Please Enter Pelindrome Word Check").trim().toLowerCase();
var check = "";

for (var i = user.length-1; i>=0; i--) {
	check+=user[i];	
}

if (user == check) {
	console.log(check + " " + "Word is Pelindrom");
}
else if (user !== check){
	console.log(check + " " + "Word is not a Pelindrom")	
}

