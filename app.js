'use strict';

//-------------------------------------------------- task 2 ------------------------------------------------------------
for (let i = 0; i <= 10; i++) {
    if (i == 0) {
        console.log(`${i} - это ноль`);
    } else if (i % 2) {
        console.log(`${i} - нечетное число`);
    } else {
        console.log(`${i} - чётное число`);
    }
}


//-------------------------------------------------- task 3 ------------------------------------------------------------
const post = {
    author: "John", //вывести этот текст
    postId: 23,
    comments: [
        {
            userId: 10,
            userName: "Alex",
            text: "lorem ipsum",
            rating: {
                likes: 10,
                dislikes: 2, //вывести это число
            },
        },
        {
            userId: 5, //вывести это число
            userName: "Jane",
            text: "lorem ipsum 2", //вывести это число
            rating: {
                likes: 1,
                dislikes: 1, //вывести это число
            },
        },
    ]
};

console.log(post.author); // "John"
console.log(post.comments[0].rating.dislikes); // 2
console.log(post.comments[1].userId); // 5
console.log(post.comments[1].rating.dislikes); // 1


//-------------------------------------------------- task 4 ------------------------------------------------------------
const products = [
    {
        id: 3,
        price: 200,
    },
    {
        id: 4,
        price: 900,
    },
    {
        id: 1,
        price: 1000,
    },
];

products.forEach(function (product) {
    product.price = product.price - (product.price * 15/100);
});

console.log(products);


//-------------------------------------------------- task 5 ------------------------------------------------------------
const products2 = [
    {
        id: 3,
        price: 127,
        photos: [
            "1.jpg",
            "2.jpg",
        ]
    },
    {
        id: 5,
        price: 499,
        photos: [

        ]
    },
    {
        id: 10,
        price: 26,
        photos: [
            "3.jpg"
        ]
    },
    {
        id: 8,
        price: 78,
    },
];

function isIncludeImage(obj) {
   if(obj.hasOwnProperty('photos') && Array.isArray(obj.photos) && obj.photos.length > 0) {
       return true;
   }
}
let productListWithImg = products2.filter(isIncludeImage);
console.log(productListWithImg);


// Сортирую исходный массив products2
function sortByPriceASC(a, b) {
    if (a.price > b.price) {
        return 1;
    }
    if (a.price < b.price) {
        return -1;
    }
    // a должно быть равным b
    return 0;
}
products2.sort(sortByPriceASC);
console.log(products2);


//-------------------------------------------------- task 6 ------------------------------------------------------------
for (let i = 0; i < 10; console.log(i++)) {

}

//-------------------------------------------------- task 7 ------------------------------------------------------------
for (let i = 1; i <= 20; i++) {
    let printedString = '';
    while (printedString.length < i) {
        printedString += 'x';
    }
    console.log(printedString);
}