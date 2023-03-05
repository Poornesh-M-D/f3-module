let myDiv = document.getElementById("flex-container");
const cartData = (product) => {
  const cartValue = localStorage.getItem("cart");
  console.log("inside carts", product, cartValue);

  if (cartValue) {
    localStorage.setItem(
      "cart",
      JSON.stringify([...JSON.parse(cartValue), product])
    );
  } else {
    localStorage.setItem("cart", JSON.stringify([product]));
  }
};

myDiv.classList.add("items");
fetch("https://fakestoreapi.com/products")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    const mens = data.filter((item) => item.category === "men's clothing");
    mens.forEach((product) => {
      const productElement = document.createElement("div");
      productElement.classList.add("item");
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
              <button id="menAddBtn${product.id}">Add to Cart</button>
            `;
      myDiv.appendChild(productElement);
      const menAddButton = productElement.querySelector(
        `#menAddBtn${product.id}`
      );
      menAddButton.addEventListener("click", () => {
        cartData(product);
        // Do something else here, such as adding the product to the cart, updating the UI, etc.
      });
    });
    let myDiv1 = document.getElementById("flex-items");
    myDiv1.classList.add("items");
    const womens = data.filter((item) => item.category === "women's clothing");
    womens.forEach((product) => {
      const productElement = document.createElement("div");
      productElement.classList.add("item");
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
              <button id="womenAddBtn${product.id}">Add to Cart</button>
            `;
      myDiv1.appendChild(productElement);
       const womenAddButton = productElement.querySelector(
         `#womenAddBtn${product.id}`
       );
       womenAddButton.addEventListener("click", () => {
         cartData(product);
         // Do something else here, such as adding the product to the cart, updating the UI, etc.
       });
    });
    let myDiv2 = document.getElementById("flex-data");
    myDiv2.classList.add("items");
    const jewelery = data.filter((item) => item.category === "jewelery");
    jewelery.forEach((product) => {
      const productElement = document.createElement("div");
      productElement.classList.add("item");
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
              <button id="jewelleryAddBtn${product.id}">Add to Cart</button>
            `;
      myDiv2.appendChild(productElement);
      const jeweleryAddButton = productElement.querySelector(
        `#jewelleryAddBtn${product.id}`
      );
      jeweleryAddButton.addEventListener("click", () => {
        cartData(product);
        // Do something else here, such as adding the product to the cart, updating the UI, etc.
      });
    });
    let myDiv3 = document.getElementById("flex-display");
    myDiv3.classList.add("items");
    const electronics = data.filter((item) => item.category === "electronics");
    electronics.forEach((product) => {
      const productElement = document.createElement("div");
      productElement.classList.add("item");
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
              <button id="addbtn${product.id}">Add to Cart</button>
            `;
      myDiv3.appendChild(productElement);
      const addButton = productElement.querySelector(`#addbtn${product.id}`);
      addButton.addEventListener("click", () => {
        cartData(product);
        // Do something else here, such as adding the product to the cart, updating the UI, etc.
      });
    });
  });

let All = document.getElementById("All");
let MenClothing = document.getElementById("Men");
let WomenClothing = document.getElementById("Women");
let jewels = document.getElementById("Jewellery");
let Electronics = document.getElementById("Electronics");

let mendata = document.getElementById("men-section");
let womendata = document.getElementById("women-section");
let jeweldata = document.getElementById("jewel");
let electronicdata = document.getElementById("electro");

MenClothing.addEventListener("click", Mensearch);
WomenClothing.addEventListener("click", Womensearch);
jewels.addEventListener("click", jewelsearch);
Electronics.addEventListener("click", electronicsearch);

function Mensearch() {
  fetch("https://fakestoreapi.com/products")
    .then((response) => response.json())
    .then((data) => {
      let matchedItems = data?.filter(
        (item) => item.category === "men's clothing"
      );
      womendata.innerHTML = " ";
      jeweldata.innerHTML = " ";
      electronicdata.innerHTML = " ";

      All.classList.remove("active");
      MenClothing.classList.add("active");
      WomenClothing.classList.remove("active");
      jewels.classList.remove("active");
      Electronics.classList.remove("active");

      if (!!!document.getElementById("flex-container")) {
        const productTitle = document.createElement("title");
        productTitle.innerHTML = "Men's clothing";
        const productContainer = document.createElement("div");
        productContainer.id = "flex-container";
        productContainer.classList.add("items");
        mendata.appendChild(productTitle);
        mendata.appendChild(productContainer);

        let men = document.getElementById("flex-container");
        matchedItems?.forEach((product) => {
          const productElement = document.createElement("div");

          productElement.classList.add("item");
          console.log(matchedItems);
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
              <button id="addBtn">Add to Cart</button>
            `;
          men.appendChild(productElement);
        });
      }
    });
}

function Womensearch() {
  fetch("https://fakestoreapi.com/products")
    .then((response) => response.json())
    .then((data) => {
      let matchedItems = data?.filter(
        (item) => item.category === "women's clothing"
      );
      mendata.innerHTML = " ";
      jeweldata.innerHTML = " ";
      electronicdata.innerHTML = " ";

      All.classList.remove("active");
      MenClothing.classList.remove("active");
      WomenClothing.classList.add("active");
      jewels.classList.remove("active");
      Electronics.classList.remove("active");

      if (!!!document.getElementById("flex-items")) {
        const productTitle = document.createElement("title");
        productTitle.innerHTML = "Women's clothing";
        const productContainer = document.createElement("div");
        productContainer.id = "flex-items";
        productContainer.classList.add("items");
        womendata.appendChild(productTitle);
        womendata.appendChild(productContainer);

        let women = document.getElementById("flex-items");
        matchedItems?.forEach((product) => {
          const productElement = document.createElement("div");

          productElement.classList.add("item");
          console.log(matchedItems);
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
              <button id="addBtn">Add to Cart</button>
            `;
          women.appendChild(productElement);
        });
      }
    });
}

function jewelsearch() {
  fetch("https://fakestoreapi.com/products")
    .then((response) => response.json())
    .then((data) => {
      let matchedItems = data?.filter((item) => item.category === "jewelery");
      womendata.innerHTML = " ";
      mendata.innerHTML = " ";
      electronicdata.innerHTML = " ";

      All.classList.remove("active");
      MenClothing.classList.remove("active");
      WomenClothing.classList.remove("active");
      jewels.classList.add("active");
      Electronics.classList.remove("active");

      if (!!!document.getElementById("flex-data")) {
        const productTitle = document.createElement("title");
        productTitle.innerHTML = "Jewelery";
        const productContainer = document.createElement("div");
        productContainer.id = "flex-data";
        productContainer.classList.add("items");
        jeweldata.appendChild(productTitle);
        jeweldata.appendChild(productContainer);

        let jewel = document.getElementById("flex-data");
        matchedItems?.forEach((product) => {
          const productElement = document.createElement("div");

          productElement.classList.add("item");
          console.log(matchedItems);
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
              <button id="addBtn">Add to Cart</button>
            `;
          jewel.appendChild(productElement);
        });
      }
    });
}

function electronicsearch() {
  fetch("https://fakestoreapi.com/products")
    .then((response) => response.json())
    .then((data) => {
      let matchedItems = data?.filter(
        (item) => item.category === "electronics"
      );
      womendata.innerHTML = " ";
      jeweldata.innerHTML = " ";
      mendata.innerHTML = " ";

      All.classList.remove("active");
      MenClothing.classList.remove("active");
      WomenClothing.classList.remove("active");
      jewels.classList.remove("active");
      Electronics.classList.add("active");

      if (!!!document.getElementById("flex-display")) {
        const productTitle = document.createElement("title");
        productTitle.innerHTML = "Electronics";
        const productContainer = document.createElement("div");
        productContainer.id = "flex-display";
        electronicdata.appendChild(productTitle);
        productContainer.classList.add("items");
        electronicdata.appendChild(productContainer);

        let electronic = document.getElementById("flex-display");
        matchedItems?.forEach((product) => {
          const productElement = document.createElement("div");

          productElement.classList.add("item");
          console.log(matchedItems);
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
              <button id="addBtn">Add to Cart</button>
            `;
          electronic.appendChild(productElement);
        });
      }
    });
}
