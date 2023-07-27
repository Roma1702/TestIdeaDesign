var parallelButton = document.getElementById("parallel");
var gridButton = document.getElementById("grid");

parallelButton.addEventListener('click', function () {
    var productList = document.querySelectorAll('.product');
    productList.forEach(function(product) {
        product.style.display = "none";
    });

    var productHList = document.querySelectorAll('.product-h');
    productHList.forEach(function(productH) {
        productH.style.display = "block";
    });
})

gridButton.addEventListener('click', function () {
    var productList = document.querySelectorAll('.product');
    productList.forEach(function(product) {
        product.style.display = "block";
    });

    var productHList = document.querySelectorAll('.product-h');
    productHList.forEach(function(productH) {
        productH.style.display = "none";
    });
})