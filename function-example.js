
// function functionName(parameters) {
//     function body
//         return;
// }

// var returnValue = functionName(parameters)

// function getAverage(assimgment1, assimgment2, assimgment3) {
//     const total = assimgment1 + assimgment2 + assimgment3;
//     const average = total / 3;
//     return average;
// }

// const assimgment1Marks = 60;
// const assimgment2Marks = 58;
// const assimgment3Marks = 59;
// var myAverage = getAverage(assimgment1Marks, assimgment2Marks, assimgment3Marks)
// console.log('average so for', myAverage);

function market(business1, business2, business3){
    var totla = business1 + business2 + business3;
    var quantity = totla / 3;
    return quantity;
}

var marketMany1 = 90;
var marketMany2 = 88;
var marketMany3 = 89;
var fullMany = market(marketMany1, marketMany2, marketMany3);
console.log('all business monay', fullMany);
