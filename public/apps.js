

async function loadProducts() {
  try {
    const response = await fetch('/foods');
    const products = await response.json();
    const tbody = document.getElementById('products-table-body');
    // clear existing rows
    tbody.innerHTML = ''; 

    products.forEach(product => {
      const row = document.createElement('tr');
      row.innerHTML = `${product.food} ${product.price}`;
      tbody.appendChild(row);
    });
  } catch (error) {
    console.error('Error loading products:', error);
  }
}

// Call the function when the page loads
window.addEventListener('DOMContentLoaded', loadProducts);