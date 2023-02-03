var shopingCard = {
    pen: 23,
    sunglass: 2,
    books: 3,
    keyborad: 5,
    mouse: 11
}

// when you know the specific property name. use dot notation to get the property valu
var pencunte = shopingCard.pen;
// alternative System
// when you know the specific Property name. use dot notation to get the property value
var pencunte2 = shopingCard['pen'];

var propertyName = 'books';
var propertyValue = shopingCard[propertyName];
// console.log(propertyName, propertyValue)

var properties = Object.keys(shopingCard);
var propertiesValue = Object.values(shopingCard);
// console.log(propertiesValue);
// console.log(properties);

console.log(shopingCard);

// set property values
shopingCard.mouse = 15;
console.log(shopingCard);

shopingCard['mouse'] = 32;
console.log(shopingCard);

shopingCard[propertyName] = 88;
console.log(shopingCard);



// var mycycle = {
//     price = 7000,
//     hon = 56,
//     brand = 'phonix',
//     break = 566
// }