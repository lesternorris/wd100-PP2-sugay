let itemContainer = document.querySelector("#item-container");
    let cartContainer = document.querySelector("#cart-container");

    const addToCart = (image, name, price, desc) => {
        const quantity = parseInt(prompt("Enter quantity:"));
        const remarks = prompt("Enter remarks/add-ons (optional):");
        
        if (!isNaN(quantity) && quantity > 0) {
            for (let i = 0; i < quantity; i++) {
                cartItems.push({ cart_image: image, cart_name: name, cart_price: price, cart_desc: desc, quantity: quantity, remarks: remarks });
            }
            localStorage.setItem("shopping_cart", JSON.stringify(cartItems));
            showCart();
        } else {
            alert("Invalid quantity!");
        }
    }

    const removeFromCart = (index) => {
        cartItems.splice(index, 1); // Remove item from cart
        localStorage.setItem("shopping_cart", JSON.stringify(cartItems));
        showCart();
    }

    const showCart = () => {
        cartContainer.innerHTML = "";
        cartItems.forEach((cart, index) => {
            cartContainer.innerHTML += `
                <tr>
                    <td>
                        <img src="${cart.cart_image}" alt="" width="200">
                    </td>
                    <td>${cart.cart_name}</td>
                    <td>${cart.cart_price}</td>
                    <td>${cart.cart_desc}</td>
                    <td>
                        <button class="btn btn-danger" onclick="removeFromCart(${index})">Remove</button>
                    </td>
                </tr>
            `;
        });
    }

    const showProducts = () => {
        itemContainer.innerHTML = ""; // Clear previous content
        items.forEach((item) => {
            itemContainer.innerHTML += `
                <div class="col-md-4 mb-4">
                    <div class="card">
                        <img src="${item.product_image}" alt="">
                        <div class="card-body">
                            <h5 class="card-title">${item.product_name}</h5>
                            <h6>${item.product_price}</h6>
                            <p class="card-text">${item.product_desc}</p>
                            <button class="btn btn-primary" onclick="addToCart('${item.product_image}', '${item.product_name}', '${item.product_price}', '${item.product_desc}')">Add to cart</button>
                        </div>
                    </div>
                </div>
            `;
        });
    }

    const searchItems = () => {
        const searchInput = document.getElementById("searchInput").value.toLowerCase();
        const filteredItems = items.filter(item => item.product_name.toLowerCase().includes(searchInput));
        itemContainer.innerHTML = ""; // Clear previous content
        filteredItems.forEach((item) => {
            itemContainer.innerHTML += `
                <div class="col-md-3">
                    <div class="card">
                        <img src="${item.product_image}" alt="">
                        <div class="card-body">
                            <h5 class="card-title">${item.product_name}</h5>
                            <h6>${item.product_price}</h6>
                            <p class="card-text">${item.product_desc}</p>
                            <button class="btn btn-primary" onclick="addToCart('${item.product_image}', '${item.product_name}', '${item.product_price}', '${item.product_desc}')">Add to cart</button>
                        </div>
                    </div>
                </div>
            `;
        });
    }

    showCart();
    showProducts();