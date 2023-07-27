const subtractButtons = document.querySelectorAll('.subtract-btn');
const addButtons = document.querySelectorAll('.add-btn');
const countElements = document.querySelectorAll('.countElement');
const cartButtons = document.querySelectorAll('.add-to-cart-btn');
const counterCarts = document.querySelector('.counter-carts');
const arrayIndexCount = new Map();
subtractButtons.forEach(function (button, index) {
    button.addEventListener('click', function () {
        const countElement = countElements[index];
        let productCount = parseInt(countElement.value);
        if (productCount > 0) {
            productCount--;
            countElement.value = productCount;
            arrayIndexCount.set(index, productCount);
        }
    });
});
addButtons.forEach(function (button, index) {
    button.addEventListener('click', function () {
        const countElement = countElements[index];
        let productCount = parseInt(countElement.value);
        productCount++;
        countElement.value = productCount;
        arrayIndexCount.set(index, productCount);
    });
});
cartButtons.forEach(function (button) {
    button.addEventListener('click', function () {
        const countElement = button.parentElement.querySelector('.countElement');
        counterCarts.innerHTML = `<i class="i i-shopping-cart"></i> ${arrayIndexCount.size}`;
    });
});