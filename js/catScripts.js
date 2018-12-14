var table = document.querySelector('.pushed-basket');
table.addEventListener('mouseover', function (e) {
    e.preventDefault();
    document.querySelector('.basket-catalog-popup').classList.add('tabl-vis');
});

table.addEventListener('mouseout', function (e) {
    e.preventDefault();
    document.querySelector('.basket-catalog-popup').classList.remove('tabl-vis');
})
