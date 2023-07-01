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
    // console.log(event.target);
    const itemToDelete = event.target.name;
    
    wishList = wishList.filter(item => item !== itemToDelete);
    parentWishlistContainerEle.innerHTML = '';
    showWishlist(wishList);
    
    
})