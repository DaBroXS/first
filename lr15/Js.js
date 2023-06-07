function ab(number) {
    for (let i = 2; i <= 10; i++) {

        if (number == i)
            continue;

        if (number % i == 0) {
            return false;
        }
    }

    return true;
}

for (let i = 1; i <= 100; i++) {

    if (ab(i)) {
        console.log(i)
    }
}
// task 2
let a = 0
do {
    if(a == 0)
    console.log(a + " - цe нуль") 
    else if(a % 2 == 1){
        console.log(a + " - не парне число");
    }
    else if(a % 2 == 0)
    console.log(a + " - парне число")
    
    a++
}while(a <= 10)
// task 3 
let numb = 10000
let result = numb
let counter = 0
while (result > 50){
   result = result / 2 
   counter++
}
console.log(result);
console.log(counter);
// task 4
let x = prompt('Введіть число')
if(x == 5){
    alert("Травень")
}
else if(x == 1){
    alert("Січень");
}
else if(x == 2){
    alert("Лютий");
}
else if(x == 3){
    alert("Березень");
}
else if(x == 6){
    alert("Червень");
}
else if(x == 7){
    alert("Липень");
}
else if(x == 8){
    alert("Серпень");
}
else if(x == 9){
    alert("Вересень");
}
else if(x == 10){
    alert("Жовтень");
}
else if(x == 11){
    alert("Листопад");
}
else if(x == 12){
    alert("Грудень");
}
// task 5

let tempC = 3
let tempF = ( 9 / 5 ) * tempC + 32
alert(tempF)
 // task 6

 let n = prompt('Введіть число')
if(x == 1){
    alert("Понеділок")
}
else if(n == 2){
    alert("Вівторок");
}
else if(n == 3){
    alert("Середа");
}
else if(n == 4){
    alert("Четверг");
}
else if(n == 5){
    alert("П'ятниця");
}
else if(n == 6){
    alert("Субота");
}
else if(n == 7){
    alert("Неділя");
}


