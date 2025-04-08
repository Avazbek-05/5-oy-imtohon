let cards = document.querySelector(".cards");
const counter = document.querySelector(".counter");
const counter_like = document.querySelector(".counter_like");
const total = document.getElementById("total");
const fullTotal = document.getElementById("fullTotal");
let cart = JSON.parse(localStorage.getItem("cards")) || [];
let likes = JSON.parse(localStorage.getItem("likes")) || [];
function cardsPr() {
  cards.innerHTML = "";
  cart.forEach((value) => {
    cards.innerHTML += `
    <div
           class="card border border-light-gray p-2 rounded-xl bg-[#f7f7f8] flex items-center justify-between max-[580px]:flex-col max-[580px]:gap-5"
         >
           <div class="flex items-center gap-6">
             <img
               class="w-[60px] h-[60px] border rounded-md border-light-gray"
               src="${value.img}"
               alt="${value.title}"
             />
             <p class="text-[#444] text-[14px]"> ${
               value.title.slice(0, 14) + "..."
             }</p>
           </div>
           <div class="flex flex-col items-center gap-2 max-[580px]:flex-row">
             <p class="text-[15px] font-semibold text-[#444]">price</p>
             <p class="text-[15px] text-[#444]">${value.price.toLocaleString(
               "ru-RU"
             )}</p>
           </div>
            <div class="flex items-center gap-6">
          <button class="border w-6 h-6 rounded-full flex items-center justify-center " data-id="${
            value.id
          }">
            <i class="fa-solid text-[12px] fa-minus"></i>
          </button>
          <span>${value.count}</span>
          <button class="border w-6 h-6 rounded-full flex items-center justify-center" data-id="${
            value.id
          }">
            <i class="fa-solid text-[12px] fa-plus"></i>
          </button>
        </div>
           <div class="flex flex-col items-center gap-2 max-[580px]:flex-row">
             <p class="text-[15px] font-semibold text-[#444]">Total</p>
             <p class="text-[15px] text-[#444]">${value.price.toLocaleString(
               "ru-RU"
             )}</p>
           </div>
           <div class="flex flex-col gap-2 items-center max-[580px]:flex-row">
             <p class="text-[15px] font-semibold text-[#444]">Action</p>
             <button id=${value.id}>
               <i id=${
                 value.id
               } class="fa-solid fa-trash-can active:text-[red]"></i>
             </button>
           </div>
         </div>
 `;
  });
  updateCounter();
  notData();
  likeCounter()
}
cardsPr();

cards.addEventListener("click", (e) => {
  const target = e.target;

  if (target.classList.contains("fa-trash-can")) {
    deleteCard(target.id);
  }

  if (target.classList.contains("fa-minus")) {
    const id = target.closest("button").dataset.id;
    updateCount(id, "minus");
  }

  if (target.classList.contains("fa-plus")) {
    const id = target.closest("button").dataset.id;
    updateCount(id, "plus");
  }
});

function updateCount(id, action) {
  cart = cart.map((item) => {
    if (item.id == id) {
      if (action === "plus") {
        item.count++;
      } else if (action === "minus" && item.count > 1) {
        item.count--;
      }
    }
    return item;
  });

  localStorage.setItem("cards", JSON.stringify(cart));
  cardsPr();
  subTotal();
  updateCounter();
  likeCounter()
}

function deleteCard(id) {
  cart = cart.filter((value) => value.id != id);
  localStorage.setItem("cards", JSON.stringify(cart));
  cardsPr();
  notData();
  subTotal();
  updateCounter();
  likeCounter()
}

function notData() {
  if (!cart.length) {
    cards.innerHTML = `<div class='flex flex-col items-center justify-center gap-4'>
       <img class='w-[250px] h-[250px]' src="./imgs/img/basket_no.png" alt="basket_no">
       <h2 class='text-2xl font-bold'>There are no items in your cart yet.</h2>
       <p class='text-[16px] font-medium'>Start with the basics or find a product using the search feature.</p>
         <button class="bg-[red] text-white text-2xl rounded-md p-2"><a href="../index.html">Main menu</a></button>
      
      </div>`;
  }
}
notData();

function updateCounter() {
  counter.innerText = cart.length;
}
function likeCounter() {
  counter_like.innerText = likes.length;
}
function subTotal() {
  let totalPrice = cart.reduce(
    (acc, value) => acc + value.price * value.count,
    0
  );
  total.textContent = `${totalPrice.toLocaleString("ru-RU")} so'm`;
  if (totalPrice) {
    let fullTotalPrice = totalPrice + 20000;
    fullTotal.textContent = `${fullTotalPrice.toLocaleString("ru-RU")} so'm`;
  } else {
    fullTotal.textContent = `0 so'm`;
  }
}
subTotal();
