const categoryBtn = document.querySelector(".category-child");
const subcategories = document.querySelector(".subcategories");
const labels = document.querySelectorAll('.category-list div:not(:first-child)');
const title = document.querySelector('.category-title');
const children = document.querySelector('.category-child');

labels.forEach(label => {
    label.addEventListener('mouseenter', () => {
        title.classList.remove("d-none");
        children.classList.remove("d-none");
    });

});