
// 1
// اولین عملیات برای اینه که بیاد به صورت حلقه وار محصول هارو نمایش بده
var products = [
    { id: 1, name: 'سلام', price: 1, image: './img/4.jpg' },
    { id: 2, name: 'خدافظ', price: 2, image: './img/3.jpg' },
];
console.log(products);


//  *** توضیح درمورد فراخوانی تابع درون یک متغیر ***

// تعریف تابع در درون متغیر
// ما میتونیم در جاوااسکریپت تابع رو در درون یک متغیر نیز تعریف کنیم، یعنی در واقع مثه اینه که تابع رو بریزیم تو یه متغیر و بعد دیگه میتونیم همون متغیر رو فراخوانی و در خروجی نشونش بدیم.
// مثال شماره ۱ : تعریف یک تابع بدون نام ( چون میخوایم بریزیمش تو متغیر پس میتونه نام نداشته باشه )

// <script>
// var Jame = function ( Number_1 , Number_2 ){
//  var Result = Number_1 + Number_2;
//  document.write(Result);
// }

// بیرون بلاک تابع باید صداش کنیم
// Jame(5,5); // 10
// </script>


var renderProducts = () => {
    var producDiv = document.querySelector('.products');
    producDiv.innerHTML = ''; // اولش هیجی نداشته باشه

    // مثل جلسه دهم در کلاس
    products.forEach((item, index) => {
        producDiv.innerHTML += `
        <div class="product card">
            <div class="producr_img">
                <img src=${item.image}>
            </div>
            <h2 class="product_title">${item.name}</h2>
            <h3 class="product_price">${item.price} تومن</h3>
            <button class="btn btn-success" onclick="addToCart(${index})">اکنون سفارش دهید</button>
        </div>
        `
    })
}
renderProducts();





// 2
// حالا میخاییم که  محصول هارو و در سبد نشون بدیم
var cart = {
    items: [],
    total: 0,
}
var renderCartItems = () => {
    var cartDiv = document.querySelector('.cart_items');
    cartDiv.innerHTML = '';

    var totalPriceElement = document.querySelector('.cart_total-price');

    var totalPrice = 0;

    if (cart.items.length === 0) {
        cartDiv.innerHTML = ' هیچی نداری داداش '
    }

    cart.items.forEach((item) => {
        totalPrice += item.total
        cartDiv.innerHTML += `
        <div class="cart_item">
            <div class="col-md-4">
                <button class="btn btn-danger" onclick="removeForCard('${item.name}')">X</button>
            </div>

            <div class="col-md-4 p-8">
                <div class="qty">${item.qty}</div>
            </div>

            <div class="col-md-4">
                <h3 class="cart_item_title">${item.name}</h3>
            </div>
        </div>
        `
    })
    totalPriceElement.innerHTML = `مجموع : ${totalPrice} تومان`
}
renderCartItems();





// 3
// add to cart
var addToCart = (productIndex) => {
    var product = products[productIndex];

    var existringProduct = false;

    // https://ditty.ir/posts/javascript-reduce-method/XolQJ   درباره این تابع زیر
    // state : وضیعتش
    // item : شمارنده و میچرخه
    var newCartItems = cart.items.reduce((state, item) => {
        if (item.name === product.name) {
            existringProduct = true;
            var newItem = {
                ...item,
                qty: item.qty + 1,
                total: (item.qty + 1) * item.price
            }

            return [...state, newItem]
        }

        return [...state, item]
    }, [])

    if (!existringProduct) {
        newCartItems.push({
            ...product,
            qty: 1,
            total: product.price,
        })
    }
    cart = {
        ...cart,
        items: newCartItems,
    }
    renderCartItems();
}




// 4
// close add to cart
var removeForCard = (productName) => {
    var newCardItems = cart.items.reduce((state, item) => {
        if (item.name === productName) {
            var newItem = {
                ...item,
                qty: item - 1,
                // IF   QTY = 2 => 2-1 : 1
                total: (item.qty - 1) * item.price
                // OR IF    TOTAL = 2 * 2 = 4 //// AFTER THAT //// 2-1 = 1 * 2 = 2
            }

            if(newItem.qty > 0 ){
                return[...state, newItem]
            }else{
                return state
            }

        }

        return [...state, item]
    },[])

    cart = {
        ...cart,
        items: newCardItems
    }
    renderCartItems();
}