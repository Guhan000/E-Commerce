const wrapper = document.querySelector('.sliderWrapper');

const slideItems = document.querySelectorAll('.menuItem');



const products = [
    {
      id: 1,
      title: "Air Force",
      price: 119,
      colors: [
        {
          code: "black",
          img: "./img/air.png",
        },
        {
          code: "darkblue",
          img: "./img/air2.png",
        },
      ],
    },
    {
      id: 2,
      title: "Air Jordan",
      price: 149,
      colors: [
        {
          code: "lightgray",
          img: "./img/jordan.png",
        },
        {
          code: "green",
          img: "./img/jordan2.png",
        },
      ],
    },
    {
        id: 3,
        title: "Crater",
        price: 129,
        colors: [
          {
            code: "black",
            img: "./img/crater.png",
          },
          {
            code: "lightgray",
            img: "./img/crater2.png",
          },
        ],
      },
    {
      id: 4,
      title: "Blazer",
      price: 109,
      colors: [
        {
          code: "lightgray",
          img: "./img/blazer.png",
        },
        {
          code: "green",
          img: "./img/blazer2.png",
        },
      ],
    },
    
    {
      id: 5,
      title: "Hippie",
      price: 99,
      colors: [
        {
          code: "gray",
          img: "./img/hippie.png",
        },
        {
          code: "black",
          img: "./img/hippie2.png",
        },
      ],
    },
];

let choosenProduct = products[0];

const choosenProductTitle = document.querySelector('.productTitle');
const choosenProductPrice= document.querySelector('.productPrice');
const choosenProductImg = document.querySelector('.productImg');
const choosenProductColors = document.querySelectorAll('.color');
const choosenProductSizes = document.querySelectorAll('.size');


slideItems.forEach((item,index) => {
    item.addEventListener('click', ()=>{
        wrapper.style.transform = `translateX(${-100 * index}vw)`;
        wrapper.style.transition = `0.8s ease`

        // change title

        choosenProduct = products[index];

        choosenProductTitle.textContent = choosenProduct.title;
        choosenProductPrice.textContent = '$' + choosenProduct.price;

        choosenProductImg.src = choosenProduct.colors[0].img;

        choosenProductColors.forEach((color,index) => {
            color.style.backgroundColor = choosenProduct.colors[index].code;
            color.addEventListener('click', ()=> {
                choosenProductImg.src = choosenProduct.colors[index].img;
            })
        });        
    })
})

choosenProductSizes.forEach((sizes,index) => {
    sizes.addEventListener("click", ()=>{
        choosenProductSizes.forEach(size => {
            size.style.backgroundColor = 'white';
            size.style.color = 'black';
        })
        sizes.style.backgroundColor = 'black';
        sizes.style.color = 'white';
    })
});

const productBuyButton = document.querySelector('.productButton');
const paymentCard = document.querySelector('.payment');
const closePayment = document.querySelector('.close');

productBuyButton.addEventListener("click", ()=>{
    paymentCard.style.display = 'flex';
    
    // paymentCard.style.transitionDuration = '1s';
})

closePayment.addEventListener("click", ()=> {
    paymentCard.style.display = 'none';
    // paymentCard.style.transitionDuration = '1s'
})