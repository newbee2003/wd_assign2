const cartCount = q(".header__navbar__link--order__cart");
const cartCost = q(".main--order__cart__cost");
const cartList = q(".main--order__cart__inner");

/**
 * Setting up the localstorage for the cart
 */
let cart = JSON.parse(localStorage.getItem("cart"));
let price = Number(localStorage.getItem("price"));
if (!cart) cart = { count: 0 };
if (!price) price = 0;
localStorage.setItem("cart", JSON.stringify(cart));
localStorage.setItem("price", price);
cartCount.innerHTML = cart.count;
cartCost.innerHTML = `<strong>Cost</strong>: $${price}`;

// Init the cart navList
for (let item in cart) {
  if (item !== "count") {
    const tmpElm = cartListItemTemplate(item, cart[item].count);
    // setting event click for inc, dec btns
    const tmpElmName = tmpElm.children[0].textContent;
    // del btn
    tmpElm.children[1].children[0].addEventListener("click", () => {
      if (cart[tmpElmName].count > 0) {
        --cart.count;
        tmpElm.children[1].children[1].innerHTML = --cart[tmpElmName].count;
        price -= cart[tmpElmName].price;
      }
      if (cart[tmpElmName].count === 0)
        tmpElm.children[1].children[0].classList.add("btn--disable");
      else tmpElm.children[1].children[0].classList.remove("btn--disable");
      cartCount.innerHTML = cart.count;
      cartCost.innerHTML = `<strong>Cost</strong>: $${price}`;
      localStorage.setItem("cart", JSON.stringify(cart));
      localStorage.setItem("price", price);
    });
    // inc btn
    tmpElm.children[1].children[2].addEventListener("click", () => {
      ++cart.count;
      tmpElm.children[1].children[1].innerHTML = ++cart[tmpElmName].count;
      price += cart[tmpElmName].price;
      if (cart[tmpElmName].count > 0)
        tmpElm.children[1].children[0].classList.remove("btn--disable");
      cartCount.innerHTML = cart.count;
      cartCost.innerHTML = `<strong>Cost</strong>: $${price}`;
      localStorage.setItem("cart", JSON.stringify(cart));
      localStorage.setItem("price", price);
    });
    cartList.appendChild(tmpElm);
  }
}
