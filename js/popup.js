const labels = document.querySelectorAll('.category-list a');
const title = document.querySelector('.category-title');
const children = document.querySelector('.category-child');

const button = document.getElementById('catalog');

function changeTarget() {
    if (window.innerWidth < 768) {
        button.dataset.target = '#modal-sm';
    } else {
        button.dataset.target = '#modal-lg';
    }
}

changeTarget();

window.addEventListener('resize', changeTarget);

labels.forEach(label => {
    label.addEventListener('mouseenter', () => {
        title.classList.remove("d-none");
        children.classList.remove("d-none");
    });

});