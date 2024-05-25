var numbers = [1,2,3,4,5,6,7,8,9];
var even    = [];
var odd     =[];

for (var i = 0; i <=numbers.length; i++) {

	if (i % 2 == 0) {
		even.push(i);
	}
	else if (i % 2 == 1) {
		odd.push(i);
	}			
}

console.log(even);
console.log(odd);