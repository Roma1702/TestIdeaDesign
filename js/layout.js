const gridButton = document.getElementById("grid");
const parallelButton = document.getElementById("parallel");
gridButton.addEventListener('click', function () {
    let productList = document.querySelectorAll('.product');
    productList.forEach(function(product) {
        product.classList.remove("d-none");
    });

    let productHList = document.querySelectorAll('.product-h');
    productHList.forEach(function(productH) {
        productH.classList.add("d-none");
    });

    gridButton.classList.add("active");
    parallelButton.classList.remove("active");
})

parallelButton.addEventListener('click', function () {
    let productList = document.querySelectorAll('.product');
    productList.forEach(function(product) {
        product.classList.add("d-none");
    });

    let productHList = document.querySelectorAll('.product-h');
    productHList.forEach(function(productH) {
        productH.classList.remove("d-none");
    });

    parallelButton.classList.add("active");
    gridButton.classList.remove("active");
})