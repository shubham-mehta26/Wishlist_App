const wishlistInputElement = document.querySelector(".input");
const form = document.querySelector(".form");

const parentWishlistContainerEle = document.querySelector(".wishlist-container");

let wishlistValue = "";
let wishList =[];

wishlistInputElement.addEventListener('input' , (event)=>{ //input or keyup
    wishlistValue = event.target.value;
    // console.log(wishlistValue);
})

form.addEventListener('submit' , (event)=>{
    event.preventDefault();
    // console.log('Clicked');
    // wishList.push(wishlistValue);
    wishList = [...wishList , wishlistValue];
    wishlistInputElement.value="";
    parentWishlistContainerEle.innerHTML = '';
    showWishlist(wishList);
    // console.log(wishList);
})

const showWishlist = (wishList)=>{
    for(let wish of wishList){
        const containerEle = document.createElement('div');

        const checkBoxEle = document.createElement('input');
        checkBoxEle.setAttribute('type','checkbox');
        containerEle.appendChild(checkBoxEle);

        const wishlistTextEle = document.createElement('span');
        wishlistTextEle.innerText = wish;
        containerEle.appendChild(wishlistTextEle);

        const deleteBtnEle = document.createElement('button');
        deleteBtnEle.innerText = "Delete";
        deleteBtnEle.setAttribute('name', wish);
        containerEle.appendChild(deleteBtnEle);

        parentWishlistContainerEle.appendChild(containerEle);
        
    }
}

parentWishlistContainerEle.addEventListener('click' , (event)=>{
    const target = event.target;
  
  // Check if the clicked element is a checkbox
  if (target.tagName === 'INPUT' && target.type === 'checkbox') {
    // Handle checkbox state change here (e.g., update a checked property)
    const isChecked = target.checked;
    // ...
  }

  // Check if the clicked element is a delete button
  if (target.tagName === 'BUTTON' && target.name) {
    const itemToDelete = target.name;
    wishList = wishList.filter(item => item !== itemToDelete);
    parentWishlistContainerEle.innerHTML = '';
    showWishlist(wishList);
  }
})