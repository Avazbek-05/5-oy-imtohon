let BASE_URL = "https://67dbc1c61fd9e43fe475c093.mockapi.io/";

const useFetch = () => {
  const response = ({ url, method = "GET", data }) => {
    return fetch(`${BASE_URL}/${url}`, {
      method,
      headers: { "Content-Type": "application/json" },
      body: data,
    })
      .then((data) => data.json())
      .catch((error) => console.log(error));
  };
  return response;
};

function addUIData(value, cards) {
  cards.innerHTML += `
   

      <div
           class="card border relative shadow-[0_10px_30px_0_rgba(209,213,223,0.5)]  p-3 rounded-2xl transition-all duration-300 hover:shadow-[0_15px_40px_0_rgba(209,213,223,0.8)] hover:scale-105 hover:border hover:border-[#00BFaf] max-[535px]:max-w-full"
           >
           <button
             class="w-[60px] absolute top-0 left-0 bg-[#f74b81] hover:border hover:border-[#00BFaf] text-white h-[31px] rounded-[15px_0_20px_0]"
           >
           ${value.text}
           </button>
           <div class="flex items-center justify-center relative mt-5">
         
            <a href=".//product.html">
                <img src="${value.img}" alt="${value.title}" />
            </a>
              <i data-id="${
                value.id
              }" class="fa-regular fa-heart  like_btn absolute active:text-[red] top-0 right-0 cursor-pointer"></i>
           </div>
           <div class="pt-[5px]">
             <span class="text-[#adadad] text-[12px]">${value.category}</span>
             <h2
               class="text-charcoal-blue text-[16px] py-2.5 font-bold max-w-[269px]"
             >
            ${value.title}
             </h2>
             <div class="flex items-center gap-14 p-[7px_0_24px_0]">
               <i class="fa-solid text-fire-orange fa-star"></i>
               <p class="text-silver-gay text-[14px]">(${value.rating}.0)</p>
             </div>
             <h4 class="text-leafy-green text-[14px]">
               <span class="text-silver-gay">By </span>${value.brand}
             </h4>
           </div>
           <div class="flex items-center justify-between">
             <div class="flex items-center gap-2.5">
               <p class="text-leafy-green font-bold text-lg"> ${value.price.toLocaleString(
                 "ru-RU"
               )}</p>
               <p class="line-through text-[14px] font-bold text-[#adadad]">
                 ${value.oldPrice.toLocaleString("ru-RU")}
               </p>
             </div>
             <button id=${value.id}
               class="btn_shop flex text-white items-center gap-1 bg-[#b86a64] rounded p-[9px_20px] relative overflow-hidden transition-all duration-500 before:absolute before:top-0 before:right-full before:w-full before:h-full before:bg-[#ff4400] before:transition-all before:duration-200 before:z-0 hover:before:right-0"
             >
               <img src="./imgs/svg/korzinka.svg" alt="basket" class="z-10" />
               <p class="text-[14px] font-bold text-white z-10">Add</p>
             </button>
           </div>
         </div>
         
`;
}
export { useFetch, addUIData };
