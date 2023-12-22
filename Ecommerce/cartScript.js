const cartItemsList = document.getElementById('cartItems');

function displayCartItems() {
  let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
  cartItemsList.innerHTML = ''; // Clear previous content
  cartItems.forEach(product => {
    const cartItem = document.createElement('li');
    cartItem.classList.add('list-group-item');
    cartItem.innerHTML = `
      ${product.title} - $${product.price}
      <button class="btn btn-danger btn-sm float-right remove-from-cart" data-id="${product.id}">Remove</button>
    `;
    cartItemsList.appendChild(cartItem);

    // Add event listener to 'Remove' button
    const removeFromCartBtn = cartItem.querySelector('.remove-from-cart');
    removeFromCartBtn.addEventListener('click', () => removeFromCart(product));
  });
}

function removeFromCart(product) {
  let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
  const index = cartItems.findIndex(item => item.id === product.id);
  if (index !== -1) {
    cartItems.splice(index, 1);
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    displayCartItems();
  }
}

displayCartItems();
