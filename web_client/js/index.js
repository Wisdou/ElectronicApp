document.addEventListener("DOMContentLoaded", async () => {
    const urlParams = new URLSearchParams(window.location.search);

    document.getElementById("sales-report-lnk").href = `${apiBaseUrl}/products/report?reportType=0`;
    document.getElementById("balance-report-lnk").href = `${apiBaseUrl}/products/report?reportType=1`;

    currentUser = await isAuthenticated();

    document.getElementById("search-input").value = urlParams.get("searchText") || "";
    const cat = urlParams.get("category") || "";
    const sel = document.getElementById("categories-select");
    const catExists = Array.from(sel.options).some(option => option.value === cat);
    sel.value = catExists ? cat : sel.options[0].value;

    await loadProducts(urlParams.get("category"), urlParams.get("searchText"));

    document.getElementById("add-product-form").addEventListener("submit", async function (e) {
        e.preventDefault();
        await onAddProduct(this);
    });

    document.getElementById("update-product-form").addEventListener("submit", async function (e) {
        e.preventDefault();
        await onUpdateProduct(this);
    });

    document.getElementById("add-to-basket-form").addEventListener("submit", async function (e) {
        e.preventDefault();

        try {
            const item = localStorage.getItem('JWT_TOKEN');
            const jwtToken = '';
            if (item != null) {
                let userData = JSON.parse(item);
                jwtToken = userData?.access_token;
            }

            const response = await fetch(`${apiBaseUrl}/basket/${document.getElementById("add-to-basket-productId").value}?quantity=${parseInt(document.getElementById("add-to-basket-quantity").value)}`, {
                method: "POST",
                credentials: "include",
                headers: {
                    'Authorization': `Bearer ${jwtToken}`
                }
            });

            if (response.status === 200) {
                window.location.reload();
            }
            else if (response.status === 400) {
                document.getElementById("add-to-basket-error").value = await response.text();
            }
            else if (response.status === 401) {
                alert("Необходимо войти в аккаунт.");
            }
            else {
                alert(await response.text());
            }
        }
        catch (e) {
            console.error(e);
        }
    });

    document.getElementById("buy-product-form").addEventListener("submit", async function (e) {
        e.preventDefault();

        try {
            const item = localStorage.getItem('JWT_TOKEN');
            const jwtToken = '';
            if (item != null) {
                let userData = JSON.parse(item);
                jwtToken = userData?.access_token;
            }

            const response = await fetch(`${apiBaseUrl}/products/${document.getElementById("buy-product-productId").value}/purchase?quantity=${parseInt(document.getElementById("buy-product-quantity").value)}`, {
                method: "POST",
                credentials: "include",
                headers: {
                    'Authorization': `Bearer ${jwtToken}`
                }
            });

            if (response.status === 200) {
                window.location.reload();
            }
            else if (response.status === 400) {
                document.getElementById("buy-product-error").value = await response.text();
            }
            else if (response.status === 401) {
                alert("Необходимо войти в аккаунт.");
            }
            else {
                alert(await response.text());
            }
        }
        catch (e) {
            console.error(e);
        }
    });

    document.getElementById("excel-input").addEventListener("change", async function (e) {
        e.preventDefault();

        if (this.files.length > 0) {
            const formData = new FormData();
            formData.append("sheet", this.files[0]);

            try {
                const item = localStorage.getItem('JWT_TOKEN');
                const jwtToken = '';
                if (item != null) {
                    let userData = JSON.parse(item);
                    jwtToken = userData?.access_token;
                }

                const response = await fetch(`${apiBaseUrl}/products/from-excel`, {
                    method: "POST",
                    credentials: "include",
                    body: formData,
                    headers: {
                        'Authorization': `Bearer ${jwtToken}`
                    }
                });

                if (response.ok) {
                    window.location.reload();
                } else {
                    alert("Ошибка при импорте: " + await response.text());
                }

            } catch (err) {
                console.error(err);
            }
        }
    });

    document.getElementById("categories-select").addEventListener("change", (e) => {
        const selectedValue = e.target.value;

        const url = new URL(window.location);
        if (selectedValue === "") {
            url.searchParams.delete("category");
        } else {
            url.searchParams.set("category", selectedValue);
        }

        window.location = url;
    });

    document.getElementById("search-button").addEventListener("click", (e) => {
        const searchText = document.getElementById("search-input").value;

        const url = new URL(window.location);
        if (searchText === "") {
            url.searchParams.delete("searchText");
        } else {
            url.searchParams.set("searchText", searchText);
        }

        window.location = url;
    });

    showIfAdmin();
});

async function loadProducts(category = null, searchText = null) {
    try {
        const params = new URLSearchParams();

        if (category) {
            params.append("category", category);
        }

        if (searchText) {
            params.append("searchText", searchText);
        }

        const paramsStr = params.toString();
        const url = `${ apiBaseUrl }/products${ paramsStr ? `?${ paramsStr }` : "" }`;

        const item = localStorage.getItem('JWT_TOKEN');
        const jwtToken = '';
        if (item != null) {
            let userData = JSON.parse(item);
            jwtToken = userData?.access_token;
        }

        const response = await fetch(url, {
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
            <img src="${ product.imageUrl }" alt="${ product.name }">
        </div>
        <div class="product-info">
            <h3>${ product.name }</h3>
            <p class="description">${ product.description }</p>
            <p class="category">${ product.category }</p>
        </div>
        <div class="product-actions">
    <p class="price">Цена: <span>${ product.price.toLocaleString() }</span></p>
    <p class="stock">${ product.quantity > 0 ? `В наличии: ${ product.quantity }` : `<span class="out-of-stock">Нет в наличии</span>` }</p>
    ${ product.quantity > 0 ? `<button id="buy-product-btn${product.id}" class="action-button">Купить</button><button id="add-to-basket-btn${product.id}" class="action-button">Добавить в корзину</button>` : "" }
    <button id="update-btn${product.id}" class="action-button secondary admin-item">Редактировать</button>
    <button id="delete-btn${product.id}" class="action-button danger admin-item">Удалить</button>
</div>
    `;
                ul.appendChild(li);

                document.getElementById(`delete-btn${product.id}`).addEventListener("click", async function (e) {
                    try {
                        const item = localStorage.getItem('JWT_TOKEN');
                        const jwtToken = '';
                        if (item != null) {
                            let userData = JSON.parse(item);
                            jwtToken = userData?.access_token;
                        }

                        const response = await fetch(`${apiBaseUrl}/products/${product.id}`, {
                            method: "DELETE",
                            credentials: "include",
                            headers: {
                                'Authorization': `Bearer ${jwtToken}`
                            }
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

                document.getElementById(`update-btn${product.id}`).addEventListener("click", async function (e) {
                    try {
                        const item = localStorage.getItem('JWT_TOKEN');
                        const jwtToken = '';
                        if (item != null) {
                            let userData = JSON.parse(item);
                            jwtToken = userData?.access_token;
                        }

                        const response = await fetch(`${apiBaseUrl}/products/${product.id}`, {
                            method: "GET",
                            credentials: "include",
                            headers: {
                                'Authorization': `Bearer ${jwtToken}`
                            }
                        });

                        if (response.status === 200) {
                            const p = await response.json();

                            document.getElementById("update-productId").value = p.id;
                            document.getElementById("update-name").value = p.name;
                            document.getElementById("update-description").value = p.description;
                            document.getElementById("update-price").value = p.price;
                            document.getElementById("update-modal-categories-select").value = p.category;
                            document.getElementById("update-quantity").value = p.quantity;
                        }
                        else {
                            alert(await response.text());
                        }

                        onOpenModalWindow("update-product-modal");
                    }
                    catch (e) {
                        console.error(e);
                    }


                });

                document.getElementById(`add-to-basket-btn${product.id}`).addEventListener("click",  function (e) {
                    document.getElementById("add-to-basket-productId").value = product.id;
                    onOpenModalWindow("add-to-basket-modal");
                });

                document.getElementById(`buy-product-btn${product.id}`).addEventListener("click",  function (e) {
                    document.getElementById("buy-product-productId").value = product.id;
                    onOpenModalWindow("buy-product-modal");
                });

            });

            showIfAdmin();

        }
        else {
            alert(await response.text());
        }

    } catch (e) {
        console.error(e);
    }
}

async function onUpdateProduct(form) {
    try {
        const jsonPart = JSON.stringify({
            name: document.getElementById("update-name").value,
            description: document.getElementById("update-description").value,
            category: document.getElementById("update-modal-categories-select").value,
            price: parseFloat(document.getElementById("update-price").value),
            quantity: parseInt(document.getElementById("update-quantity").value),
        });

        const formData = new FormData(form);
        formData.append("JsonPart", jsonPart);

        const item = localStorage.getItem('JWT_TOKEN');
        const jwtToken = '';
        if (item != null) {
            let userData = JSON.parse(item);
            jwtToken = userData?.access_token;
        }

        const response = await fetch(`${ apiBaseUrl }/products/${document.getElementById("update-productId").value}`, {
            method: "PUT",
            credentials: "include",
            body: formData,
            headers: {
                'Authorization': `Bearer ${jwtToken}`
            }
        });

        if (response.status === 200) {
            window.location.reload();
        }
        else if (response.status === 400) {
            document.getElementById("update-product-error").value = await response.text();
        }
        else {
            alert(await response.text());
        }
    }
    catch (e) {
        console.error(e);
    }
}

async function onAddProduct(form) {
    try {
        const jsonPart = JSON.stringify({
            name: document.getElementById("name-input").value,
            description: document.getElementById("description-input").value,
            category: document.getElementById("modal-categories-select").value,
            price: parseFloat(document.getElementById("price-input").value),
            quantity: parseInt(document.getElementById("quantity-input").value),
        });

        const formData = new FormData(form);
        formData.append("JsonPart", jsonPart);

        const item = localStorage.getItem('JWT_TOKEN');
        const jwtToken = '';
        if (item != null) {
            let userData = JSON.parse(item);
            jwtToken = userData?.access_token;
        }

        const response = await fetch(`${ apiBaseUrl }/products`, {
            method: "POST",
            credentials: "include",
            body: formData,
            headers: {
                'Authorization': `Bearer ${jwtToken}`
            }
        });

        if (response.status === 201) {
            window.location.reload();
        }
        else if (response.status === 400) {
            document.getElementById("add-product-error").value = await response.text();
        }
        else {
            alert(await response.text());
        }
    }
    catch (e) {
        console.error(e);
    }
}