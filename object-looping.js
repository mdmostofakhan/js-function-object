// array vs objects
var shoppingItems = ['pen', 'sunglass', 'books', 'keybord', 'mouse'];
var frinedsAge = [12, 23, 45, 23, 54, 34];
var friendsAge = {
    rahim: 12,
    korim: 23,
    anuar: 43,
    jamal: 34,
    robi : 34
}


var shopingCard = {
    pen: 23,
    sunglass: 2,
    books: 3,
    keyborad: 5,
    mouse: 11,
    shoes: 2,
}

const keys = Object.keys(shopingCard);
console.log(keys);

const values = Object.values(shopingCard);
console.log(values);

// var keys [ 'pen', 'sunglass', 'books', 'keyborad', 'mouse']
for (var i = 0; i < keys.length; i++){
    var propertyName = keys[i];
    var propertyValue = shopingCard[propertyName];
    // console.log(propertyName, propertyValue);
}

// for in loop
for (var propertyName in shopingCard) {
    const propertyValue = shopingCard[propertyName];
    console.log(propertyName, propertyValue);
} 