//LOGIC BUILDING 
let n = 10;
let string = "";
for (var i = 1; i<=n; i++) {
    document.write(i + "<br>");
    for (var j =1; j <=i;j++){
        string+= "i";
    }
    string += "\n" + "<br>";
}

document.write(string);

