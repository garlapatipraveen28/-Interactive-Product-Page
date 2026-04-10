// Global Cart counter
let globalCount = 0;
const globalCartDisplay = document.getElementById('globalCartCount');
const toast = document.getElementById('toast');
const products = document.querySelectorAll('.product-card');

products.forEach(card => {
    const mainImg = card.querySelector('.main-img');
    const thumbs = card.querySelectorAll('.thumbs img');
    const btnPlus = card.querySelector('.plus');
    const btnMinus = card.querySelector('.minus');
    const qtyText = card.querySelector('.qty');
    const totalText = card.querySelector('.total');
    const btnAdd = card.querySelector('.btn-add');
    const stars = card.querySelectorAll('.stars span');
    const basePrice = parseFloat(card.dataset.basePrice);
    let currentQty = 1;

    // 1. Image Gallery Logic
    thumbs.forEach(thumb => {
        thumb.addEventListener('click', () => {
            mainImg.src = thumb.src;
            thumbs.forEach(t => t.classList.remove('active'));
            thumb.classList.add('active');
        });
    });

    // 2. Quantity & Price Logic
    const updateDisplay = () => {
        qtyText.innerText = currentQty;
        totalText.innerText = (currentQty * basePrice).toFixed(2);
    };

    btnPlus.addEventListener('click', () => {
        currentQty++;
        updateDisplay();
    });

    btnMinus.addEventListener('click', () => {
        if (currentQty > 1) {
            currentQty--;
            updateDisplay();
        }
    });

    // 3. Rating System Logic
    stars.forEach(star => {
        star.addEventListener('click', () => {
            const val = parseInt(star.dataset.v);
            stars.forEach((s, index) => {
                index < val ? s.classList.add('gold') : s.classList.remove('gold');
            });
        });
    });

    // 4. Add to Cart Logic
    btnAdd.addEventListener('click', () => {
        globalCount += currentQty;
        globalCartDisplay.innerText = globalCount;
        
        // Bonus: Show Toast
        toast.classList.add('show');
        setTimeout(() => toast.classList.remove('show'), 3000);
    });
});
