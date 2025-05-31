const products = [
    { id: 1, name: "Wired Earphones", category: "Electronics", price: 99.99, rating: 4.5 },
    { id: 2, name: "Kurtas", category: "Clothing", price: 29.99, rating: 3.8 },
    { id: 3, name: "Wireless Headphones", category: "Electronics", price: 79.99, rating: 4.2 },
    { id: 4, name: "Running Shoes", category: "Footwear", price: 89.99, rating: 4.7 },
    { id: 5, name: "Coffee Maker", category: "Home Appliances", price: 49.99, rating: 4.0 },
    { id: 6, name: "Smart Watch", category: "Electronics", price: 199.99, rating: 4.8 },
    { id: 7, name: "T-Shirt", category: "Clothing", price: 19.99, rating: 3.5 },
    { id: 8, name: "Backpack", category: "Accessories", price: 59.99, rating: 4.3 },
    { id: 9, name: "Desk Lamp", category: "Home Appliances", price: 34.99, rating: 3.9 },
    { id: 10, name: "Yoga Mat", category: "Fitness", price: 24.99, rating: 4.1 }
];

function displayProducts(productsToDisplay) {
    const container = document.getElementById('products');
    container.innerHTML = '';
    
    productsToDisplay.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.className = 'product';
        productDiv.innerHTML = `
            <h3>${product.name}</h3>
            <p><span class="label">Category:</span> ${product.category}</p>
            <p><span class="label">Price:</span> $${product.price.toFixed(2)}</p>
            <p><span class="label">Rating:</span> ${'&#9733;'.repeat(Math.round(product.rating))}${'&#9734;'.repeat(5-Math.round(product.rating))} (${product.rating}/5)</p>
        `;
        container.appendChild(productDiv);
    });
}

// Initialize filters and display
document.addEventListener('DOMContentLoaded', function() {
    // Set up category filter
    const categories = [...new Set(products.map(p => p.category))];
    const categorySelect = document.getElementById('categoryFilter');
    
    categories.forEach(category => {
        const option = document.createElement('option');
        option.value = category;
        option.textContent = category;
        categorySelect.appendChild(option);
    });
    
    // Set up event listeners
    categorySelect.addEventListener('change', filterProducts);
    document.getElementById('sortBy').addEventListener('change', filterProducts);
    
    // Initial display
    filterProducts();
});

function filterProducts() {
    const category = document.getElementById('categoryFilter').value;
    const sortBy = document.getElementById('sortBy').value;
    
    let filtered = [...products];
    
    // Filter by category
    if (category !== 'all') {
        filtered = filtered.filter(p => p.category === category);
    }
    
    // Sort products
    filtered.sort((a, b) => {
        if (sortBy === 'name') return a.name.localeCompare(b.name);
        if (sortBy === 'price') return a.price - b.price;
        if (sortBy === 'rating') return b.rating - a.rating;
        return 0;
    });
    
    displayProducts(filtered);
}