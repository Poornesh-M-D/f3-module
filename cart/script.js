// if you want to store array or object use method JSON.stringify([]) or JSON.stringify({})
// if you want to convert string to its data structure json.parse(string_value)
const displayCartData = () => {
  const cartData = JSON.parse(localStorage.getItem("cart"));
  myDiv.innerHTML = "";
  cartData.forEach((product) => {
    const productElement = document.createElement("div");
    productElement.classList.add("item");
    console.log(cartData);
    productElement.innerHTML = `
              <img src=${product.image} />
              <div class="info">
                <div class="row">
                  <div class="price"><p> ${product.price}</p></div>
                  <div class="sized">S,M,L</div>
                </div>
                <div class="colors">
                  Colors:
                  <div class="row">
                    <div class="circle" style="background-color: #000"></div>
                    <div class="circle" style="background-color: #4938af"></div>
                    <div class="circle" style="background-color: #203d3e"></div>
                  </div>
                </div>
                <div class="row"><p>${product.rating}</p></div>
              </div>
              <button id="removeCartBtn${product.id}">REMOVE FROM CART</button>
            `;
    myDiv.appendChild(productElement);
    const removeCartButton = productElement.querySelector(
      `#removeCartBtn${product.id}`
    );
    removeCartButton.addEventListener("click", () => {
      removeCartData(product.id);
      // Do something else here, such as adding the product to the cart, updating the UI, etc.
    });
  });
};
let myDiv = document.getElementById("flex-container");
const removeCartData = async (producId) => {
  console.log("inside data", producId);
  await localStorage.setItem(
    "cart",
    JSON.stringify(
      JSON.parse(localStorage.getItem("cart")).filter(
        (product) => product.id !== producId
      )
    )
  );
  displayCartData();
};

displayCartData();

// const a = json.parse("[{}]")
// json.parse("[{}]")
//a
