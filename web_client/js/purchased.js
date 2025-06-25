document.addEventListener("DOMContentLoaded", async () => {
    await loadPurchasedProducts();
});

async function loadPurchasedProducts() {
    try {
        const item = localStorage.getItem('JWT_TOKEN');
        let jwtToken = '';
        if (item != null) {
            let userData = JSON.parse(item);
            jwtToken = userData?.access_token;
        }

        const response = await fetch(`${ apiBaseUrl }/products/purchased`, {
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
        <div>
            <img src="${ product.imageUrl }" alt="${ product.productName }">
        </div>
        <div class="product-info">
            <h3>${ product.productName }</h3>
            <p class="category">${ product.productCategory }</p>
        </div>
        <div class="product-actions">
    <p class="stock">Цена за шт: <span>${ product.price.toLocaleString() }</span></p>
<p class="stock">Кол-во: <span>${ product.quantity }</span></p>
<p class="stock">Дата: 
  <span>${ new Date(product.purchasedDateTime).toLocaleString() }</span>
</p>
<p class="price">Сумма покупки: 
  <span>${ (product.price * product.quantity).toLocaleString() }</span>
</p>

</div>
    `;
                ul.appendChild(li);
            });
        } else if (response.status === 401) {

        } else {
            alert(await response.text());
        }

    } catch (e) {
        console.error(e);
    }
}