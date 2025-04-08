import { useFetch, addUIData } from "./utils/request.js";
const counter = document.querySelector(".counter");
const counter_like = document.querySelector(".counter_like");
const cards = document.querySelector(".cards");
const request = useFetch();

let cart = JSON.parse(localStorage.getItem("cards")) || [];
let likes = JSON.parse(localStorage.getItem("likes")) || [];
updateCounter();
likeCounter();

request({ url: "foodzy" }).then((data) => getData(data));

function getData(data) {
  data.forEach((value) => {
    addUIData(value, cards);
  });
  const buttons = document.querySelectorAll(".btn_shop");
  buttons.forEach((value, index) => {
    value.addEventListener("click", (e) => {
      addToCart(data[index]);
    });
  });
  const like_btn = document.querySelectorAll(".like_btn");
  like_btn.forEach((value, indx) => {
    value.addEventListener("click", (e) => {
      addLike(data[indx]);
    });
  });
}
function addLike(data) {
  if (!likes.find((value) => value.id === data.id)) {
    likes = [...likes, data];
    localStorage.setItem("likes", JSON.stringify(likes));
    likeCounter();
  }
}

function addToCart(data) {
  if (cart.find((value) => value.id === data.id)) {
    cart = cart.map((value) => {
      if (value.id === data.id) {
        return { ...value, count: (value.count += 1) };
      }
      return value;
    });
    localStorage.setItem("cards", JSON.stringify(cart));
    return;
  }

  cart = [...cart, { ...data, count: 1 }];
  localStorage.setItem("cards", JSON.stringify(cart));
  updateCounter();
  likeCounter()
}

function updateCounter() {
  counter.innerHTML = cart.length;
}

function likeCounter() {
  counter_like.innerHTML = likes.length;
}
