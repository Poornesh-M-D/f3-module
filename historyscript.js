let myDiv = document.getElementById("flex-container");
let dataDiv = document.getElementById("data-container");
myDiv.innerHTML = "";
for (let i = 0; i < localStorage.length; i++) {
  const key = localStorage.key(i);
  let value = localStorage.getItem(key);
  if (value) {
    value = JSON.parse(value);
  }
  const productElement = document.createElement("div");
  productElement.addEventListener("click", function () {
    // Your code here

    let dataDiv = document.getElementById("data-container");
    dataDiv.innerHTML = "";
    value?.data.items.forEach((product) => {
      const productElement = document.createElement("div");
      productElement.classList.add("product-container");
      productElement.innerHTML = `
            <img src=${product?.volumeInfo?.imageLinks?.thumbnail} />
            <p>TITLE: ${product?.volumeInfo?.title}</p>
            <p>AUTHOR: ${product?.volumeInfo?.authors}</p>
            <p>PAGE COUNT: ${product?.volumeInfo?.pageCount}</p>
            <p>PUBLISHER: ${product?.volumeInfo?.publisher}</p>
            
        `;
      dataDiv.appendChild(productElement);
    });
  });
  productElement.classList.add("product-container");
  productElement.innerHTML = `
            <p id="display"> ${key}</p>
            <p id="display"> searched on: ${value?.date}</p>
            
        `;
  myDiv.appendChild(productElement);
}

let clearBtn = document.getElementById("searchBtn");
clearBtn.addEventListener("click", search);

function search() {
  localStorage.clear();
  myDiv.innerHTML = "";
  dataDiv.innerHTML = "";
}
