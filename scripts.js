document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id');

    if (productId) {
        document.querySelector('main').innerHTML = 
            <h2>محصول ${productId}</h2>
            <p>جزئیات محصول ${productId}</p>
        ;
    }
});