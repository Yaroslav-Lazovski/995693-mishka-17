var nav = document.querySelector('.nav');
var navBurger = document.querySelector('.nav__burger');

nav.classList.remove('nav--nojs');

navBurger.addEventListener('click', function () {
  if (nav.classList.contains('nav--closed')) {
    nav.classList.remove('nav--closed');
    nav.classList.add('nav--opened');
  } else {
    nav.classList.add('nav--closed');
    nav.classList.remove('nav--opened');
  }
});

var linkBuy = document.querySelector(".popular__buy");
var popupCart = document.querySelector(".modal-cart");
var popupOverlay = document.querySelector(".modal-overlay");
var popupSize = document.querySelector(".modal-cart__size");
var popupProductCart = document.querySelector(".product-list__cart")

if (popupProductCart) {
  popupProductCart.addEventListener("click", function (evt) {
    evt.preventDefault();
    popupCart.classList.add("modal-cart-show");
    popupSize.focus();
    popupOverlay.classList.add("modal-overlay-show");
  });
}

if (linkBuy) {
  linkBuy.addEventListener("click", function (evt) {
    evt.preventDefault();
    popupCart.classList.add("modal-cart-show");
    popupSize.focus();
    popupOverlay.classList.add("modal-overlay-show");
  });

  popupOverlay.addEventListener("click", function (evt) {
    evt.preventDefault();
    if (popupCart.classList.contains("modal-cart-show")) {
      popupCart.classList.remove("modal-cart-show");
    }

    if (popupOverlay.classList.contains("modal-overlay-show")) {
      popupOverlay.classList.remove("modal-overlay-show");
    }
  });

    window.addEventListener("keydown", function (evt) {
      if (evt.keyCode === 27) {
        evt.preventDefault();
        if (popupCart.classList.contains("modal-cart-show")) {
          popupCart.classList.remove("modal-cart-show");
        }

        if (popupOverlay.classList.contains("modal-overlay-show")) {
          popupOverlay.classList.remove("modal-overlay-show");
        }
      }
    });
}

var linkCart = document.querySelectorAll(".product-list__cart");

if (linkCart) {
  for (var i = 0; i < linkCart.length; i++) {
    linkCart[i].onclick = function (evt) {
      evt.preventDefault();
      popupCart.classList.add("modal-cart-show");
      popupOverlay.classList.add("modal-overlay-show");
    };

    popupOverlay.addEventListener("click", function (evt) {
      evt.preventDefault();
      if (popupCart.classList.contains("modal-cart-show")) {
        popupCart.classList.remove("modal-cart-show");
      }

      if (popupOverlay.classList.contains("modal-overlay-show")) {
        popupOverlay.classList.remove("modal-overlay-show");
      }
    });

    window.addEventListener("keydown", function (evt) {
      if (evt.keyCode === 27) {
        evt.preventDefault();
        if (popupCart.classList.contains("modal-cart-show")) {
          popupCart.classList.remove("modal-cart-show");
        }

        if (popupOverlay.classList.contains("modal-overlay-show")) {
          popupOverlay.classList.remove("modal-overlay-show");
        }
      }
    });
  }
}
