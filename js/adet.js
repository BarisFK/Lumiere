const decrementButton = document.querySelector('.decrement');
const incrementButton = document.querySelector('.increment');
const quantityDisplay = document.querySelector('.quantity');

let quantity = 0;

decrementButton.addEventListener('click', () => {
    if (quantity > 0) {
        quantity--;
        quantityDisplay.textContent = quantity;
    }
});

incrementButton.addEventListener('click', () => {
    quantity++;
    quantityDisplay.textContent = quantity;
});
