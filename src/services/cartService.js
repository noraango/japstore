import http from "../http-common";
class CartService {
  getCart(userId) {
    return http.get("/cart/get/" + userId);
  }
  getCartDetail(userId) {
    return http.get("/cart/getCart/" + userId);
  }
  getListCart(userId) {
    return http.get("/cart/getList/" + userId);
  }
  updateCartItem(productId, userId, quantity) {
    return http.post(
      "/cart/update/" + productId + "/" + userId + "/" + quantity
    );
  }
  updateLocalCartItem(cartItem, quantity) {
    let cart = this.getLocalCart(cartItem);
    console.log(cartItem)
    let newCart = [];
    cart.forEach((element) => {
      if (element.id === cartItem.id) {
        element.quantity = quantity;
      }
      newCart.push(element);
    });
    localStorage.setItem("cart"+cartItem.shopId, JSON.stringify(newCart));
  }
  onLogin(userId) {
    let order = localStorage.getItem("order");
    if (order) {
      let has = false;
      var data = JSON.parse(order).slice();
      data.forEach((element) => {
        let cart = JSON.parse(localStorage.getItem("cart" + element));
        cart.forEach((e) => {
          http.post("/cart/add/" + e.id + "/" + userId + "/" + e.quantity);
          this.updateCartAmount(e.quantity)
        });
        localStorage.removeItem("cart" + element);
      });
    }
    localStorage.removeItem("order");
    
    window.location.reload();
  }
  getCount(userId) {
    return http.get("/cart/countNumber?userId=" + userId);
  }
  addCart(productId, userId, quantity) {
    return http.post("/cart/add/" + productId + "/" + userId + "/" + quantity);
  }
  deleteCartItem(productId, cart, userId) {
    return http.delete("/cart/delete/" + productId + "/" + cart + "/" + userId);
  }
  deleteLocalCartItem(cartItem) {
    let cart = this.getLocalCart(cartItem);
    let newCart = [];
    cart.forEach((element) => {
      if (element.id != cartItem.id) {
        newCart.push(element);
      }
    });
    if (newCart.length == 0) {
      var order = JSON.parse(localStorage.getItem("order")).slice();
      let newOrder = [];
      order.forEach((element) => {
        if (element !== cartItem.shopId) {
          console.log(element + "--" + cartItem.shopId);
          newOrder.push(element);
        }
      });
      localStorage.setItem("order", JSON.stringify(newOrder));
      window.location.reload();
    }
    localStorage.setItem("cart" + cartItem.shopId, JSON.stringify(newCart));
  }
  getLocalCart(item) {
    let order = localStorage.getItem("order");
    if (order) {
      let has = false;
      var data = JSON.parse(order).slice();
      data.forEach((element) => {
        if (element === item.shopId) {
          has = true;
        }
      });
      if (has) {
        let cart = localStorage.getItem("cart" + item.shopId);
        console.log(data);
        if (cart) {
          return JSON.parse(cart);
        } else {
          let newCart = [];
          localStorage.setItem("cart" + item.shopId, JSON.stringify(newCart));
        }
      } else {
        var newOrder = JSON.parse(order).slice();
        newOrder.push(item.shopId);
        localStorage.setItem("order", JSON.stringify(newOrder));
        let newCart = [];
        localStorage.setItem("cart" + item.shopId, JSON.stringify(newCart));
      }
    } else {
      let newOrder = [item.shopId];
      localStorage.setItem("order", JSON.stringify(newOrder));
      let newCart = [];
      localStorage.setItem("cart" + item.shopId, JSON.stringify(newCart));
      localStorage.setItem("cartAmount", 0);
    }
    return [];
    // let cart = localStorage.getItem("cart");
    // if (cart) {
    //   return JSON.parse(cart);
    // } else {
    //   let newCart = [];
    //   localStorage.setItem("cart", JSON.stringify(newCart));
    // }
  }
  updateCartAmount(quantity) {
    let cartAmount = localStorage.getItem("cartAmount");
    cartAmount = parseInt(cartAmount) + quantity;
    console.log(quantity)
    localStorage.setItem("cartAmount", cartAmount);
    return cartAmount;
  }
  addItemToLocalCart(item) {
    console.log(item);
    let cart = this.getLocalCart(item);
    let cartAmount = localStorage.getItem("cartAmount");
    let increase = false;
    let newCart = [];
    if (cart.length > 0) {
      cart.forEach((element) => {
        if (element.id === item.id) {
          element.quantity += item.quantity;
          increase = true;
        }
        newCart.push(element);
      });
    }
    if (!increase) {
      newCart.push(item);
    }
    localStorage.setItem("cartAmount", item.quantity + parseInt(cartAmount));
    localStorage.setItem("cart" + item.shopId, JSON.stringify(newCart));
  }
}
export default new CartService();
