const searchInput = document.getElementById('Search');
const productGrid = document.getElementById('productGrid');

searchInput.addEventListener('input', function () {
    const searchTerm = searchInput.value.toLowerCase();
    const products = productGrid.querySelectorAll('.productCard');
    const productNotFound = document.getElementById('productNotFound');
    let found = false;

    Array.from(products).forEach(function (product) {
        const productName = product.getElementsByTagName('h1')[0].textContent.toLowerCase();
        const productDescription = product.getElementsByTagName('p')[0].textContent.toLowerCase();

        if (productName.includes(searchTerm) || productDescription.includes(searchTerm)) {
            product.style.display = 'block';
            found = true;
        } else {
            product.style.display = 'none';
        }
    });

        if (found) {
            productNotFound.classList.add('hidden');
        } else {
            productNotFound.classList.remove('hidden');
        }
    });