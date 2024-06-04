// Head OR Tail Program

var head = prompt("Head User Name");
var tail = prompt("Tail User Name");

var toss= Math.random() * 2;

var floor = Math.floor(toss);

if (floor === 0) {
    console.log("Heads Win" + " " + head );
} else {
    console.log("Tails Wins" + " " + tail);
}
