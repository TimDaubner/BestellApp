let shoppingCart = [];

function init() {
    createIDsForFood();
    renderAllItemsOnMenu();
}

function createIDsForFood() {
    for (let i = 0; i < food.length; i++) {
        food[i].id = i;
    }
}

function getInputValue(id) {
    return document.getElementById(id).value;
}

function getHTMLForFood(type) {
    // switch
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

function renderShoppingCart(item) {
    shoppingCart.push(food[item]);
    document.getElementById('order_list').innerHTML = '';
    for (let i = 0; i < shoppingCart.length; i++) {
        document.getElementById('order_list').innerHTML += getHTMLForOrderListItem(i);
    }
}

function getHTMLForMenuItem(i) {
    return `
            <div class="item-frame">
                <li onclick="renderShoppingCart(${food[i].id})" class="item-content">
                    ${food[i].name} ${food[i].price[1]} €
                </li>
                <img class="add-plus" src="./img/plus.svg" alt="add plus">
            </div>`
}

function getHTMLForOrderListItem(i) {
    return `
    <p class="ordered-item"><b class="ordered-number">1 x</b> ${shoppingCart[i].name} <b class="price-tag">${shoppingCart[i].price[1]} €</b> <img class="trashcan" src="./img/trashcan.svg" alt="trashcan"></b> <imgclass="plus-ordered-number" src="./img/plus.svg"></p>`
}

function toggleFoodType(_type) {
    let type = document.getElementById(`all_order_items_${_type}`);
    document.getElementById('all_order_items_pizza').classList.add('d_none');
    document.getElementById('all_order_items_salad').classList.add('d_none');
    document.getElementById('all_order_items_dessert').classList.add('d_none');
    type.classList.remove('d_none');
}