
// 1
// اولین عملیات برای اینه که بیاد به صورت حلقه وار محصول هارو نمایش بده

var city = ['', 'Mashhad', 'Tehran', 'Hamedan'];

function add_to_cart(e) {


    document.querySelector('.cart_items').innerHTML = `
    <div class="cart_item">
    <div class="col-md-4">
    <button class="btn btn-danger" onclick="removeForCard('${products.name}')">X</button>
    </div>

            <div class="col-md-4 p-8">
                <div class="qty">${products.price}</div>
            </div>
            
            <div class="col-md-4">
                <h3 class="cart_item_title">${products.name}</h3>
                </div>
                </div>
                `

    document.querySelector('.dont_do').innerHTML = `اضافه شد به سبد خرید`
    console.log(e.target);
}

function removeForCard() {

}