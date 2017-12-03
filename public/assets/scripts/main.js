var products = document.querySelectorAll(".product-list .product");

//init functions to products elements
for (var i = 0; i < products.length; i++) {
    var mainImage = products[i].querySelector(".main-view .main-image");
    var changeViewBtns = products[i].querySelectorAll(".change-view .action");
    var addFavoriteBtn = products[i].querySelector(".info > .name > .add-favorites");

    changeViewsInit(changeViewBtns);
    addToFavoritesInit(addFavoriteBtn);

}


//UTIL FUNCTIONS
function changeViewsInit(changeViewButtons) {
    for (var j = 0; j < changeViewButtons.length; j++) {
        changeViewButtons[j].addEventListener("click", function (evt) {
            mainImage.setAttribute('src', evt.target.src);
        })
    }
}

function addToFavoritesInit(addFavoriteBtn) {
    addFavoriteBtn.addEventListener("click", function (evt) {
        var spanHeart = evt.target;

        if (spanHeart.className.indexOf("fa fa-heart-o") != -1) {
            spanHeart.className = "fa fa-heart";
        } else {
            spanHeart.className = "fa fa-heart-o";
        }
    })
}