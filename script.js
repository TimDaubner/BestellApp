// let cart = [];

function init() {
    createQuantityAndIDsForFood();
    renderAllItemsOnMenu();
}

function createQuantityAndIDsForFood() {
    for (let i = 0; i < food.length; i++) {
        food[i].id = i;
        food[i].quantity = 0;
    }
}

function getInputValue(id) {
    return document.getElementById(id).value;
}

function renderAllItemsOnMenu() {
    for (let i = 0; i < food.length; i++) {
        let foodItems = document.getElementById(`all_order_items_${food[i].type}`);
        foodItems.innerHTML = '';
    }
    for (let i = 0; i < food.length; i++) {
        let foodItems = document.getElementById(`all_order_items_${food[i].type}`);
        foodItems.innerHTML += getHTMLForMenuItem(i);
    }
}

function addFoodToCart(i) {
    if (food[i].quantity == 0) {
        food[i].quantity++;
    }
    else {
        food[i].quantity++;
    }
    renderCart();
}

function removeFoodFromCart(i) {
    if (food[i].quantity == 1) {
        food[i].quantity = 0;
    }
    else {
        food[i].quantity--;
    }
    renderCart();
}

function getFoodSinglePrice(i) {
    return (food[i].price[1] * food[i].quantity).toFixed(2);
}

let sum = 0;
function getFoodCompletePrice() {
    sum = 0;
    document.getElementById('food_sum').innerHTML = '';
    for (let i = 0; i < food.length; i++) {
        if (food[i].quantity > 0) {
            sum += Number(food[i].price[1] * food[i].quantity);
        }
    }
    return sum.toFixed(2);

}

function getCompletePriceWithDelivery() {
    sum += 5;
    return sum.toFixed(2);
}

function renderCart() {
    document.getElementById('order_list').innerHTML = '';
    for (let i = 0; i < food.length; i++) {
        if (food[i].quantity > 0) {
            document.getElementById('order_list').innerHTML += getHTMLForOrderListItem(i);
        }
    }

    document.getElementById('food_sum_between').innerHTML = `Gesamt ${getFoodCompletePrice()} €`;
    document.getElementById('food_sum').innerHTML = `Gesamt ${getCompletePriceWithDelivery()} €`;

}

function getHTMLForMenuItem(i) {
    return `
            <div class="item-frame">
                <li onclick="addFoodToCart(${food[i].id})" class="item-content">
                    ${food[i].name} ${food[i].price[1]} €
                </li>
                <img class="add-plus" src="./img/plus.svg" alt="add plus">
            </div>`
}

function getHTMLForOrderListItem(i) {
    return `
    <p class="ordered-item"><b class="ordered-number">${food[i].quantity} x</b> ${food[i].name} <b class="price-tag">${getFoodSinglePrice(i)} €</b> <img onclick="removeFoodFromCart(${i})" class="trashcan" src="./img/trashcan.svg" alt="trashcan"></b> <img class="plus-ordered-number" src="./img/plus.svg"></p>`
}

function toggleFoodType(_type) {
    let type = document.getElementById(`all_order_items_${_type}`);
    document.getElementById('all_order_items_pizza').classList.add('d_none');
    document.getElementById('pizza_tab').classList.remove('active');
    document.getElementById('all_order_items_salad').classList.add('d_none');
    document.getElementById('salad_tab').classList.remove('active');
    document.getElementById('all_order_items_dessert').classList.add('d_none');
    document.getElementById('dessert_tab').classList.remove('active');
    document.getElementById(`${_type}_tab`).classList.add('active');
    type.classList.remove('d_none');
}