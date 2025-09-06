document.getElementById('burger').onclick = function () {
    document.getElementById('menu').classList.add('open');

}
document.querySelectorAll('#menu *').forEach((item) => {
    item.onclick = () => {
        document.getElementById('menu').classList.remove('open');
    }
});

document.getElementById('theme').onclick = function () {
    if (document.body.classList.contains('dark-mode')) {
        document.body.classList.remove('dark-mode');
    } else {
        document.body.classList.add('dark-mode');
    }
}


const getProducts = document.getElementById('products-items');

function createProductCard(product) {
    const card = document.createElement('div');
    card.classList.add('product');

    const productImage = document.createElement('div');
    productImage.classList.add('product-image');
    card.appendChild(productImage)
    const img = document.createElement('img');
    img.src = product.image;
    img.alt = product.title;
    productImage.appendChild(img);

    const productTitle = document.createElement('div');
    productTitle.classList.add('product-title');
    const title = document.createElement('h3');
    title.textContent = product.title;
    productTitle.appendChild(title);

    const productText = document.createElement('div');
    productText.classList.add('product-text');
    const description = document.createElement('p');
    description.textContent = product.description;
    productText.appendChild(description);

    const productAction = document.createElement('div');
    productAction.classList.add('product-action');
    const button = document.createElement('button');
    button.classList.add('btn')
    button.textContent = 'В корзину';
    productAction.appendChild(button);

    // card.appendChild(productImage);
    card.appendChild(productTitle);
    card.appendChild(productText);
    card.appendChild(productAction);
    return card;
}

//
// fetch("https://testologia.ru/pizzas")
//     .then(res => {
//         if (!res.ok) {
//             throw new Error('Error fetching pizzas');
//         }
//         return res.json();
//     })
//     .then(data => {
//         data.forEach(product => {
//             const card = createProductCard(product);
//             getProducts.appendChild(card);
//         });
//     })

$.ajax({
    url: "https://testologia.ru/pizzas",
    method: "GET",
    dataType: "json",
    success: function (data) {
        data.forEach(product => {
            const card = createProductCard(product)
            getProducts.append(card);
        });
    }
})