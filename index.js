const wishlistInputElement = document.querySelector(".input");
const form = document.querySelector(".form");

const parentWishlistContainerEle = document.querySelector(".wishlist-container");

let wishlistValue = "";
let wishList =[];
let count = 0;

wishlistInputElement.addEventListener('input' , (event)=>{ //input or keyup
    wishlistValue = event.target.value;
})

form.addEventListener('submit' , (event)=>{
    event.preventDefault();
    count++;
    wishList = [...wishList , wishlistValue];
    wishlistInputElement.value="";
    parentWishlistContainerEle.innerHTML = '';
    showWishlist(wishList);
    console.log(count);
})

const showWishlist = (wishList)=>{
    for(let wish of wishList){
        const containerEle = document.createElement('div');
        containerEle.className="list-item";

        const checkBoxEle = document.createElement('input');
        checkBoxEle.setAttribute('type','checkbox');
        containerEle.appendChild(checkBoxEle);

        const wishlistTextEle = document.createElement('div');
        wishlistTextEle.style.width='400px';
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
    
    let wishListTextEle = target.nextElementSibling;
    wishListTextEle.style.textDecoration = isChecked ? 'line-through': 'none' ;
    
    
  }

  // Check if the clicked element is a delete button
  if (target.tagName === 'BUTTON' && target.name) {
    const itemToDelete = target.name;
    wishList = wishList.filter(item => item !== itemToDelete);
    parentWishlistContainerEle.innerHTML = '';
    showWishlist(wishList);
  }
})