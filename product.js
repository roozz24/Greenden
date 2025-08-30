const searchInput = document.getElementById('Search');
const productGrid = document.getElementById('productGrid');

searchInput.addEventListener('input', function() {
    const searchTerm = searchInput.value.toLowerCase();
    const products = productGrid.querySelectorAll('.productCard');
    const productNotFound = document.getElementById('productNotFound');

    Array.from(products).forEach(function(product) {
        const productName = product.getElementsByTagName('h1')[0].textContent.toLowerCase();
        const productDescription = product.getElementsByTagName('p')[0].textContent.toLowerCase();

        if (productName.includes(searchTerm) || productDescription.includes(searchTerm)) {
            product.style.display = 'block';
            productNotFound.classList.add('hidden');
        } else {
            product.style.display = 'none';
            productNotFound.classList.remove('hidden');
        }
    });
});