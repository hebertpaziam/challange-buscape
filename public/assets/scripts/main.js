//============== INICIAR TODAS AS FUNÇÕES DOS PRODUTOS ==============
var products = document.querySelectorAll(".product-list .product");
for (var i = 0; i < products.length; i++) {
    var changeViewBtns = products[i].querySelectorAll(".change-view .action");
    var addFavoriteBtn = products[i].querySelector(".info > .name > .add-favorites");
    var addToCartBtn = products[i].querySelector(".info > .add-cart");

    changeViewsInit(changeViewBtns);
    addToFavorites(addFavoriteBtn);
    addToCart(addToCartBtn);
}

//============== INICIAR TODAS AS FUNÇÕES DO CARRINHO ==============
var cart = document.querySelector(".navbar .cart");
var cartProducts = cart.querySelectorAll(".cart-products .product")
var badge = document.querySelector("#menu .badge");
var menuBtn = document.querySelector("#menu .icon");


for (var i = 0; i < cartProducts.length; i++) {
    var removeFromCartBtn = cartProducts[i].querySelector(".remove-btn");
    removeFromCart(removeFromCartBtn);
}
menuBtn.addEventListener("click", function () {
    if (cart.className.indexOf(" -closed") != -1) {
        cart.className = cart.className.replace(/ -closed/g, "");
    } else {
        cart.className += " -closed";
    }
});

//CALCULA A QUANTIDADE DE PRODUTOS NO CARRINHO
function calcBadgeCount() {
    var badgeValue = cartProducts.length;
    if (badgeValue <= 0) {
        badge.style.display = "none";
    } else {
        badge.style.display = "block";
        badge.innerHTML = badgeValue;
    }
}
calcBadgeCount();
//=======================================================



//TROCAR IMAGEM PRINCIPAL
function changeViewsInit(changeViewButtons) {

    for (var i = 0; i < changeViewButtons.length; i++) {
        changeViewButtons[0].className += " -active";
        changeViewButtons[i].addEventListener("click", function (evt) {
            var buttonElem = evt.path[1];
            var mainImage = evt.path[3].querySelector(".main-view .main-image");


            for (var key in changeViewButtons) {
                if (changeViewButtons.hasOwnProperty(key)) {
                    changeViewButtons[key].className = "action";
                }
            }

            mainImage.setAttribute('src', evt.target.src);
            buttonElem.className += " -active";
        })
    }
}

//ADICIONAR PRODUTO AOS FAVORITOS
function addToFavorites(addFavoriteBtn) {
    addFavoriteBtn.addEventListener("click", function (evt) {

        var isFavorite = JSON.parse(evt.target.parentElement.getAttribute("data-fav"));
        var id = JSON.parse(evt.target.parentElement.getAttribute("data-id"));

        var xhr = new XMLHttpRequest()
        xhr.open("PUT", "http://localhost:3000/api/addToFav/");
        xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
        xhr.send(JSON.stringify({
            productId: id,
            favorite: !isFavorite
        }));
    })
}

//ADICIONAR PRODUTO AO CARRINHO
function addToCart(addToCartBtn) {
    addToCartBtn.addEventListener("click", function (evt) {
        var id = JSON.parse(evt.target.getAttribute("data-id"));
        var xhr = new XMLHttpRequest()
        xhr.open("PUT", "http://localhost:3000/api/addToCart/");
        xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
        xhr.send(JSON.stringify({
            productId: id
        }));
    })
}

//REMOVER PRODUTO DO CARRINHO
function removeFromCart(removeFromCartBtn) {
    removeFromCartBtn.addEventListener("click", function (evt) {
        var id = JSON.parse(evt.target.parentElement.getAttribute("data-id"));
        var xhr = new XMLHttpRequest()
        xhr.open("PUT", "http://localhost:3000/api/removeFromCart/");
        xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
        xhr.send(JSON.stringify({
            productId: id
        }));
    })
}