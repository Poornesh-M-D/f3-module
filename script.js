console.log("hello world");

let searchInput = document.getElementById("search");
let searchBtn = document.getElementById("searchBtn");

searchBtn.addEventListener("click", search);

let myDiv = document.getElementById("flex-container");

function search() {
  let s = searchInput.value;
  let myDiv = document.getElementById("flex-container");
  myDiv.innerHTML = "";
  fetch(`https://www.googleapis.com/books/v1/volumes?q=${s ? s : "perry"}`)
    .then((response) => response.json())
    .then((data) => {
      localStorage.setItem(s, JSON.stringify({ data, date: new Date() }));
      console.log("data", data);
      data.items.forEach((product) => {
        const productElement = document.createElement("div");
        productElement.classList.add("product-container");
        productElement.innerHTML = `
            <img src=${product?.volumeInfo?.imageLinks?.thumbnail} />
            <p>TITLE: ${product?.volumeInfo?.title}</p>
            <p>AUTHOR: ${product?.volumeInfo?.authors}</p>
            <p>PAGE COUNT: ${product?.volumeInfo?.pageCount}</p>
            <p>PUBLISHER: ${product?.volumeInfo?.publisher}</p>
            
        `;
        myDiv.appendChild(productElement);
      });
    });
}
