const adminForm = document.getElementById("adminForm");
adminForm.addEventListener("click", (e) => {
  e.preventDefault();
  let title = adminForm.title.value.trim();
  let img = adminForm.img.value.trim();
  let rating = adminForm.rating.value.trim();
  let brand = adminForm.brand.value.trim();
  let price = adminForm.price.value.trim();
  let oldPrice = adminForm.oldPrice.value.trim();
  let category = adminForm.category.value.trim();
  let text = adminForm.text.value.trim();

  if (
    !title ||
    !img ||
    !rating ||
    !brand ||
    !price ||
    !oldPrice ||
    !category ||
    !text
  ) {
    
    return;
  }

  let newData = {
    title,
    img,
    rating,
    brand,
    price,
    oldPrice,
    category,
    text,
  };
  fetch("https://67dbc1c61fd9e43fe475c093.mockapi.io/foodzy", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newData),
  })
    .then((res) => res.json())
    .then((data) => {
      alert(`Malumot yuborildi`);
      adminForm.reset();
    })
    .catch((error) => console.log(error));
});
