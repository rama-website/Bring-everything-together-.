let subBtn = document.querySelector('#sub');
let qty = document.querySelector('#qtyBox');
let addBtn = document.querySelector('#add')

addBtn.addEventListener('click', ()=> {
    qty.value = parseInt(qty.value) +1;
})

subBtn.addEventListener('click', ()=> {
    qty.value = parseInt(qty.value) -1;
    if(qty.value >= 0){
        qty.value = parseInt(qty.value);
    }
    else {
        qty.value = 0;
    }
});