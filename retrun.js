function add(number1, number2) {
    console.log(number1, number2)
    var sum = number1 + number2;
    // console.log(sum);
    return sum;
    // return 15;
//     return 'hello done'
//     return 'Iam going'
}

// add(45, 55);

var total = add(80, 20);
// console.log('total', total);

function bringSingera(money) {
    var singeraPrice = 10;
    var quantity = money / singeraPrice;
    return quantity;
}

var myTaka = 150
var singera = bringSingera(myTaka);
console.log('Eating singera', singera);




