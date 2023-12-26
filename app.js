document.addEventListener("DOMContentLoaded", function () {
    const productTitleElem = document.getElementById('product-title');
    const productImageElem = document.getElementById('product-image');
    const productDescriptionElem = document.getElementById('product-description');
    const loadProductBtn = document.getElementById('load-product-btn');

    loadProductBtn.addEventListener('click', () => {
        // Simulate fetching data from an API
        const fakeData = {
            title: 'iPhone 13 Pro',
            image: 'OIP.jpeg',
            description: 'The latest iPhone with amazing features.'
        };

        // Apply fadeIn animation class
        productTitleElem.classList.add('animate__fadeIn');
        productDescriptionElem.classList.add('animate__fadeIn');

        // Update the page content with dynamic data after animation starts
        setTimeout(() => {
            productTitleElem.innerText = fakeData.title;
            productImageElem.style.backgroundImage = `url(${fakeData.image})`;
            productDescriptionElem.innerText = fakeData.description;
        }, 500);
    });
});
