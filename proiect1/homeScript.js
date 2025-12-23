
const box = [
    {
        id: "combo1",
        title: "Combo Box 1",
        products: [
            { title: "EFFACLAR Duo (+) M", price: 35.00 },
            { title: "LIPIKAR BAUME AP+M", price: 49.99 }
        ],
        total_price: 70.00,
        currency: "RON"
    },
    {
        id: "combo2",
        title: "Combo Box 2",
        products: [
            { title: "EFFACLAR Duo (+) M", price: 35.00 },
            { title: "HYALU B5 SERUM", price: 70.00 }
        ],
        total_price: 95.00,
        currency: "RON"
    },
    {
        id: "combo3",
        title: "Combo Box 3",
        products: [
            { title: "ANTHELIOS DERMOPEDIATRICS SPF 50+", price: 52.00 },
            { title: "EFFACLAR A.Z. GEL-CREME", price: 25.00 }
        ],
        total_price: 50.00,
        currency: "RON"
    }
];

let cart = JSON.parse(localStorage.getItem("cart")) || [];
function addComboToCart(box) {
    const existingItem = cart.find(
        item => item.id === box.id
    );
    if (existingItem) {
        existingItem.quantity += 1;
        localStorage.setItem("cart", JSON.stringify(cart));
        alert("Cantitatea a fost actualizata.");
        return;
    } 
        cart.push({
            id: box.id,
            quantity: box.quantity || 1,
            type: "combo",
            title: box.title,
            products: box.products,
            price: box.total_price,
            currency: box.currency
        });
    localStorage.setItem("cart", JSON.stringify(cart));
    alert("Combo-ul a fost adaugat in cos.");

    let totalPrice = calculateTotalPrice(box);
    localStorage.setItem("totalPrice", totalPrice);
    // updateCartPage();
}

document.getElementById("combo1Btn").addEventListener("click", function () {
    addComboToCart(box[0]);
});

document.getElementById("combo2Btn").addEventListener("click", function () {
    addComboToCart(box[1]);
});
document.getElementById("combo3Btn").addEventListener("click", function () {
    addComboToCart(box[2]);
});

function calculateTotalPrice(item) {
    cart.reduce((total, item) => total + getItemTotalPrice(item), 0);
}
function getItemTotalPrice(item) {  
    if(item.quantity) {
        return item.price * item.quantity;
    }
    else {
        return item.price;
    }
}