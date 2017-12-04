//VARIAVEIS GLOBAIS
var products = document.querySelectorAll(".product-list .product");
var menuBtn = document.querySelector("#menu .icon");
var cart = document.querySelector(".navbar .cart");
var badge = document.querySelector("#menu .badge");

//============== INICIAR TODAS AS FUNÇÕES ==============
for (var i = 0; i < products.length; i++) {
    var changeViewBtns = products[i].querySelectorAll(".change-view .action");
    var addFavoriteBtn = products[i].querySelector(".info > .name > .add-favorites");
    var addToCartBtn = products[i].querySelector(".info > .add-cart");

    changeViewsInit(changeViewBtns);
    addToFavoritesInit(addFavoriteBtn);
    // addToCartInit(addToCartBtn);

}
menuBtn.addEventListener("click", function () {
    if (cart.className.indexOf(" -closed") != -1) {
        cart.className = cart.className.replace(/ -closed/g, "");
    } else {
        cart.className += " -closed";
    }
});
calcBadgeCount();
//=======================================================

//CALCULA A QUANTIDADE DE PRODUTOS NO CARRINHO
function calcBadgeCount() {
    var badgeValue = cart.querySelectorAll(".cart-products .product").length;
    if (badgeValue <= 0) {
        badge.style.display = "none";
    } else {
        badge.style.display = "block";
        badge.innerHTML = badgeValue;
    }
}

//TROCAR IMAGEM PRINCIPAL
function changeViewsInit(changeViewButtons) {

    for (var i = 0; i < changeViewButtons.length; i++) {
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
function addToFavoritesInit(addFavoriteBtn) {
    addFavoriteBtn.addEventListener("click", function (evt) {
        // var spanHeart = evt.target;

        // if (spanHeart.className.indexOf("fa fa-heart-o") != -1) {
        //     spanHeart.className = "fa fa-heart";
        // } else {
        //     spanHeart.className = "fa fa-heart-o";
        // }

        var xhr = new XMLHttpRequest()
        xhr.open("PUT", "http://localhost:3000/api/addToFav/");
        xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
        xhr.responseType = "document";
        xhr.send(JSON.stringify({ productId: 6717132}));
    })
}

//ADICIONAR PRODUTO AO CARRINHO
function addToCartInit(addToCartBtn) {
    var cartProducts = cart.querySelector(".cart-products");
    addToCartBtn.addEventListener("click", function (evt) {
        var productElem = (evt.target.className.indexOf("fa-chevron") == -1) ? productElem = evt.path[2] : evt.path[3];
        cartProducts.insertAdjacentElement("afterBegin", productElem.cloneNode(true));
        calcBadgeCount();
    })
}