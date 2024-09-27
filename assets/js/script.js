const btnCart = document.getElementById('btn-cart');
const sideCart = document.getElementById('side-cart');
const closeCart = document.getElementById('side-cart-close');

btnCart.addEventListener('click', () => {
    if (sideCart.classList.contains('show')) {
        sideCart.classList.remove('show');
    } else {
        sideCart.classList.add('show');
    }
})

closeCart.addEventListener('click', () => {
    sideCart.classList.remove('show');
})


// Inisialisasi array untuk menyimpan item dalam keranjang
let cartItems = [];

// Fungsi untuk menghitung total harga
function calculateTotalPrice() {
    let total = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);
    document.getElementById('total-price').textContent = 'Rp ' + total.toLocaleString();
}

// Fungsi untuk memperbarui keranjang di UI
// Fungsi untuk memperbarui badge jumlah item
function updateCartBadge() {
    const badge = document.getElementById('cart-badge');
    const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);
    badge.textContent = totalItems;
}

// Fungsi untuk memperbarui keranjang di UI
function updateCartUI() {
    const cartItemsContainer = document.getElementById('cart-items');
    cartItemsContainer.innerHTML = ''; // Kosongkan konten sebelumnya

    // Tambahkan item ke dalam keranjang
    cartItems.forEach(item => {
        const itemDiv = document.createElement('div');
        itemDiv.classList.add('d-flex', 'justify-content-between', 'align-items-center', 'mb-2');
        itemDiv.innerHTML = `
            <div>
                <img src="${item.image}" alt="${item.name}" width="100">
                <span>${item.name} (x${item.quantity})</span>
            </div>
            <div>Rp ${item.price.toLocaleString()}</div>
        `;
        cartItemsContainer.appendChild(itemDiv);
    });

    // Hitung total harga
    calculateTotalPrice();

    // Perbarui badge jumlah item
    updateCartBadge();
}


// Fungsi untuk menambah produk ke keranjang
function addToCart(productId, productName, productPrice, productImage) {
    // Cari apakah produk sudah ada di keranjang
    const existingItem = cartItems.find(item => item.id === productId);

    if (existingItem) {
        // Jika produk sudah ada, tambahkan jumlahnya
        existingItem.quantity++;
    } else {
        // Jika produk belum ada, tambahkan ke array cartItems
        cartItems.push({
            id: productId,
            name: productName,
            price: parseInt(productPrice),
            image: productImage,
            quantity: 1
        });
    }

    // Perbarui UI keranjang
    updateCartUI();
}

// Event listener untuk tombol Add to Cart
document.querySelectorAll('.add-to-cart-btn').forEach(button => {
    button.addEventListener('click', function () {
        const productElement = this.closest('.col-md-4');
        const productId = productElement.getAttribute('data-product-id');
        const productName = productElement.getAttribute('data-product-name');
        const productPrice = productElement.getAttribute('data-product-price');
        const productImage = productElement.getAttribute('data-product-image');

        // Tambahkan produk ke keranjang
        addToCart(productId, productName, productPrice, productImage);
    });
});