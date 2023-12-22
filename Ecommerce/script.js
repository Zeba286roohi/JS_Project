const productsContainer = document.getElementById('products');

// Fetch products from the API
fetch('https://fakestoreapi.com/products')
  .then(response => response.json())
  .then(products => {
    products.forEach(product => {
      // Create product card
      const productCard = document.createElement('div');
      productCard.classList.add('col-md-4', 'mb-3');
      productCard.innerHTML = `
        <div class="card">
          <img src="${product.image}" class="card-img-top" alt="${product.title}">
          <div class="card-body">
            <h5 class="card-title">${product.title}</h5>
            <p class="card-text">${product.description}</p>
            <p class="card-text">Price: $${product.price}</p>
            <button class="btn btn-primary btn-sm add-to-cart" data-id="${product.id}">Add to Cart</button>
          </div>
        </div>
      `;
      productsContainer.appendChild(productCard);

      // Add event listener to 'Add to Cart' button
      const addToCartBtn = productCard.querySelector('.add-to-cart');
      addToCartBtn.addEventListener('click', () => addToCart(product));
    });
  })
  .catch(error => console.error('Error fetching products:', error));

function addToCart(product) {
  let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
  cartItems.push(product);
  localStorage.setItem('cartItems', JSON.stringify(cartItems));
}
