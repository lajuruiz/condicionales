
// ejercicio 1
var numero1=prompt("introducir numero");
if (numero1 % 2 ===0){
    document.write("es divisible por dos" + ("<br>"));
}
else {
    document.write("No es divisible por dos" + ("<br>"));
}
// ejercicio 2 
var num=prompt("introducir numero");
if (num % 5 ===0){
    document.write("es divisible por cinco" + ("<br>"));
}
else {
    document.write("No es divisible por cinco" + ("<br>"));
}

// ejercicio 3

var n=prompt("introducir numero");
if (n % 11 ===0 && n%5 ===0){
    document.write("es divisible por 5 y 11" + ("<br>"))
}
else {
    document.write("No es divisible por 11 y 5"  + ("<br>"))
}

// ejercicio 4 

var n1=prompt("introducir numero");
var n2=prompt("introducir numero");
if (parseInt(n1) > parseInt(n2)){
    document.write("n1"  + ("<br>"))
}
else {
    document.write("n2" + "<br>")
}

// ejercicio 5
var x1=prompt("introducir numero");
var x2=prompt("introducir numero");
(parseInt(x1)>parseInt(x2))? document.write("n1"  + ("<br>")) : document.write("n2" + "<br>")

// ejercicio 6
var str=prompt("introducir un string");
if (!isNaN (+(str[0]))) {
    document.write(" str empieza con un numero "  + ("<br>"))
}
else {
    document.write("str empieza con una letra"+ ("<br>") )
    }

// ejercicio 7

var x,y,z;
x=(+(prompt("introducir valor del angulo")));
y=(+(prompt("introducir valor del angulo")));
z=(+(prompt("introducir valor del angulo")));

if (x===y && y===z) {
    console.log ("si es un triangulo")
}

else {
    console.log("No es un triangulo")
}

// ejercicio 8

var str=prompt("introducir palabra")
var codigoletra=str.charCodeAt[0];
if (65<codigoletra<90) {
    console.log("es mayuscula")
}

else if (97<codigoletra<122){
    console.log(" es minuscula")
}

// ejercicio 9

var ano=prompt("introducir ano");
if (ano % 4 ===0){
    document.write("es biciesto" + ("<br>"));
}
else {
    document.write("No es biciesto" + ("<br>"));
}

//ejercicio 10


min= (+(prompt("introducir numero")));
max= (+(prompt("introducir numero")));
function random(min, max){
    return Math.floor((Math.random() * (max - min + 1)) + min);}

