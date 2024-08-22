let proudcsInCart = localStorage.getItem("proudcsInCart");
let allproducts = document.querySelector(".products");
let link = document.querySelector("#link");
let link_a = document.querySelector(".link-a")

if (proudcsInCart) {
  let items = JSON.parse(proudcsInCart);
  drawCartProducts(items);
  link.style.display = "none"
  link_a.style.display = "flex";
}

function drawCartProducts(items) {
  let y = items.map((item) => {
    return `
          <div class="product_item">
           <img class="product_item_img" src="${item.imageUrl}" alt="">
      <div class="product_item_desc">
           <h2>${item.title}</h2>
          <p>the new car in 19 300km in hour</p>
          <span>${item.color}</span>
          </div>
          <div class="product_item_action">
          <button style={ background-color: green;} class="add_to_cart" onClick="removeFromCart(${item.id})">Remove from Cart</button>
          
          </div>
      </div>
      `;
  });
  allproducts.innerHTML = y;
}

function removeFromCart(id) {
  let items = JSON.parse(localStorage.getItem("proudcsInCart"));
  const index = items.findIndex((item) => item.id === id);
  if (index !== -1) {
    items.splice(index, 1);
  }
  localStorage.setItem("proudcsInCart", JSON.stringify(items));

  drawCartProducts(items);
}
