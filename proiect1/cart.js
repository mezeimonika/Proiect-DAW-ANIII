const cart = JSON.parse(localStorage.getItem("cart")) || [];
const cartContainer = document.getElementById("cartContainer");
const totalElement = document.getElementById("total");

function displayCartItems() {
    cartContainer.innerHTML = "";

    if (cart.length === 0) {
        cartContainer.innerHTML = "<p>Cosul e gol.</p>";
        totalElement.textContent = "";
        return;
    }

    let total = 0;

    cart.forEach(item => {
        const div = document.createElement("div");
        div.classList.add("cart-item");

        let itemTotal = item.price * (item.quantity || 1);
        total += itemTotal;

        div.innerHTML = `
            <h3>${item.title}</h3>

            ${
                item.type === "combo"
                ? `<ul>
                    ${item.products.map(p => `<li>${p.title} - ${p.price} ${item.currency}</li>`).join("")}
                   </ul>`
                : `<p>Durata: ${item.duration}</p>`
            }

            <p>Pret: ${item.price} ${item.currency}</p>
            <p>Cantitate: ${item.quantity || 1}</p>
            <strong>Total: ${itemTotal.toFixed(2)} ${item.currency}</strong>
            <hr>
        `;

        cartContainer.appendChild(div);
    });

    totalElement.textContent = `Total cos: ${total.toFixed(2)} RON`;
}

displayCartItems();
