document.addEventListener('DOMContentLoaded', async () => {
    await loadBasketItems();

    document.getElementById("buy-basket-btn").addEventListener("click", async () => {
        const checkboxes = document.querySelectorAll(".product-checkbox:checked");
        const selectedIds = Array.from(checkboxes).map(cb => cb.dataset.id);

        if (selectedIds.length === 0) {
            return;
        }

        try {
            const item = localStorage.getItem('JWT_TOKEN');
            const jwtToken = '';
            if (item != null) {
                let userData = JSON.parse(item);
                jwtToken = userData?.access_token;
            }

            const response = await fetch(`${apiBaseUrl}/basket`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    'Authorization': `Bearer ${jwtToken}`
                },
                credentials: "include",
                body: JSON.stringify(selectedIds)
            });

            if (response.ok) {
                alert("Покупка успешно оформлена!");
                window.location.reload();
            } else {
                const message = await response.text();
                alert("Ошибка: " + message);
            }
        } catch (err) {
            console.error(err);
        }
    });

});

async function loadBasketItems() {
    try {
        const item = localStorage.getItem('JWT_TOKEN');
        const jwtToken = '';
        if (item != null) {
            let userData = JSON.parse(item);
            jwtToken = userData?.access_token;
        }

        const response = await fetch(`${apiBaseUrl}/basket`, {
            method: "GET",
            credentials: "include",
            headers: {
                'Authorization': `Bearer ${jwtToken}`
            }
        });

        if (response.status === 200) {
            const ul = document.getElementById("product-list");
            const products = await response.json();

            ul.innerHTML = "";
            products.forEach(product => {
                const li = document.createElement("li");
                li.className = "product-card";

                li.innerHTML = `
    <input type="checkbox" class="product-checkbox" 
    data-id="${product.productId}" 
    data-price="${product.productPrice}" 
    data-quantity="${product.productQuantity}">
    <div>
        <img src="${product.productImageUrl}" alt="${product.productName}">
    </div>
    <div class="product-info">
        <h3>${product.productName}</h3>
        <p class="category">${product.productCategory}</p>
    </div>
    <div class="product-actions">
        <p class="stock">Цена за шт: <span>${product.productPrice.toLocaleString()}</span></p>
        <p class="stock">Кол-во: <span>${product.productQuantity}</span></p>
        <p class="price">Сумма покупки: 
            <span>${(product.productPrice * product.productQuantity).toLocaleString()}</span>
        </p>
        <button id="delete-btn${product.productId}" class="action-button danger">Удалить</button>
    </div>
`;

                ul.appendChild(li);

                document.getElementById(`delete-btn${product.productId}`).addEventListener("click", async function (e) {
                    try {
                        const response = await fetch(`${apiBaseUrl}/basket/${product.productId}`, {
                            method: "DELETE",
                            credentials: "include",
                        });

                        if (response.status === 200) {
                            window.location.reload();
                        }
                        else {
                            alert(await response.text());
                        }
                    }
                    catch (e) {
                        console.error(e);
                    }
                });

            });

            document.querySelectorAll('.product-checkbox').forEach(cb => {
                cb.addEventListener('change', updateTotal);

                cb.addEventListener('change', () => {
                    cb.closest('.product-card').classList.toggle('selected', cb.checked);
                    updateTotal();
                });

            });
        }
        else if (response.status === 401) {

        }
        else {
            alert(await response.text());
        }

    } catch (e) {
        console.error(e);
    }
}

function updateTotal() {
    const checkboxes = document.querySelectorAll('.product-checkbox:checked');

    let totalAmount = 0;
    let totalItems = 0;

    checkboxes.forEach(cb => {
        const price = parseFloat(cb.dataset.price);
        const quantity = parseInt(cb.dataset.quantity);
        totalAmount += price * quantity;
        totalItems += 1;
    });

    document.getElementById("products-count").textContent = totalItems;
    document.getElementById("full-amount").textContent = totalAmount.toLocaleString();
}