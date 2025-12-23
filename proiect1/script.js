const inventory = [
    {
        product: {
            title: "EFFACLAR Duo (+) M",
            filename: "images/3337875863377_1.jpg",
            price: 35.00,
            currency: "RON"
        }
    },
    {
        product: {
            title: "LIPIKAR BAUME AP+M",
            filename: "3337875863377_2.jpg",
            price: 49.99,
            currency: "RON"
        }
    },
    {
        product: {
            title: "CICAPLAST BAUME B5",
            filename: "3337875863377_3.jpg",
            price: 40.00,
            currency: "RON"
        }
    },
    {
        product: {
            title: "ANTHELIOS UVMUNE 400 FLUID",
            filename: "3337875863377_4.jpg",
            price: 60.00,
            currency: "RON"
        }
    },
    {
        product: {
            title: "HYALU B5 SERUM",
            filename: "3337875863377_5.jpg",
            price: 70.00,
            currency: "RON"
        }
    },
    {
        product: {
            title: "THERMAL SPRING WATER",
            filename: "3337875863377_6.jpg",
            price: 25.00,
            currency: "RON"
        }
    },
    {
        product: {
            title: "ANTHELIOS UVMUNE 400 LOTION",
            filename: "3337875863377_7.jpg",
            price: 55.00,
            currency: "RON"
        }
    },
    {
        product: {
            title: "ANTHELIOS XL SPF 50+ GEL",
            filename: "3337875863377_8.jpg",
            price: 60.00,
            currency: "RON"
        }
    },
    {
        product: {
            title: "ANTHELIOS 30 INVISIBLE SPRAY",
            filename: "3337875863377_9.jpg",
            price: 58.00,
            currency: "RON"
        }
    },
    {
        product: {
            title: "ANTHELIOS DERMOPEDIATRICS SPF 50+",
            filename: "3337875863377_10.jpg",
            price: 52.00,
            currency: "RON"
        }
    },
    {
        product: {
            title: "MELA B3 GEL MICRO PEELING",
            filename: "3337875863377_11.jpg",
            price: 45.00,
            currency: "RON"
        }
    },
    {
        product: {
            title: "EFFACLAR A.Z. GEL-CREME",
            filename: "3337875863377_11.jpg",
            price: 25.00,
            currency: "RON"
        }
    }
];

const abonament = [
    {
        id: "calmant",
        title: "Pachet calmant",
        price_lunar: 55.00,
        price_anual: 42.00,
        currency: "RON"
    },
    {
        id: "acnee",
        title: "Pachet Anti-Acnee",
        price_lunar: 75.00,
        price_anual: 67.00,
        currency: "RON"
    },
    {
        id: "hyaluronic",
        title: "Pachet Hyaluronic",
        price_lunar: 99.00,
        price_anual: 83.00,
        currency: "RON"
    }

];

let cart = JSON.parse(localStorage.getItem("cart")) || [];

function addAbonamentToCart(abonament, duration) {
    cart = cart.filter(item => item.id !== abonament.id);

    cart.push({
        type: "abonament",
        id: abonament.id,
        title: abonament.title,
        price: duration === "lunar" ? abonament.price_lunar : abonament.price_anual,
        currency: abonament.currency,
        duration: duration
    });
    localStorage.setItem("cart", JSON.stringify(cart));
    alert("Abonamentul a fost adaugat in cos.");
    // updateCartPage();
}

document.getElementById("buttonCalmant").addEventListener("click", function () {
    addAbonamentToCart(abonament[0], getDuration());
});

document.getElementById("buttonAcnee").addEventListener("click", function () {
    addAbonamentToCart(abonament[1], getDuration());
});

document.getElementById("buttonHyaluronic").addEventListener("click", function () {
    addAbonamentToCart(abonament[2], getDuration());
});

function getDuration() {
    return document.getElementById("lunar").classList.contains("active") ? "lunar" : "anual";
}

const buttonLunar = document.getElementById("lunar");
const buttonAnual = document.getElementById("anual");

buttonLunar.addEventListener("click", function () {
    buttonLunar.classList.add("active");
    buttonAnual.classList.remove("active");
    updatePrices();
});

buttonAnual.addEventListener("click", function () {
    buttonAnual.classList.add("active");
    buttonLunar.classList.remove("active");
    updatePrices();
});

function updatePrices() {
    const duration = getDuration();
    document.getElementById("pretCalmant").innerHTML =
        duration === "lunar" ? `${abonament[0].price_lunar}RON<span> /luna</span>` : `${abonament[0].price_anual}RON<span> /luna</span>`;
    document.getElementById("pretAcnee").innerHTML =
        duration === "lunar" ? `${abonament[1].price_lunar}RON<span> /luna</span>` : `${abonament[1].price_anual}RON<span> /luna</span>`;
    document.getElementById("pretHyaluronic").innerHTML =
        duration === "lunar" ? `${abonament[2].price_lunar}RON<span> /luna</span>` : `${abonament[2].price_anual}RON<span> /luna</span>`;
}

// function updateCartPage() {
//     if (window.location.pathname.endsWith("cart.html")) {
//         displayCartItems();
//     }
// }