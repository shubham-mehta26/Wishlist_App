const wishlistInputElement = document.querySelector(".input");
const form = document.querySelector(".form");
const bodyFullEle = document.querySelector('.edit-button');
const parentWishlistContainerEle = document.querySelector(".wishlist-container");
const scoreEle = document.querySelector('.score');

let wishlistValue = "";
let wishList =[];
let count = 0;

wishlistInputElement.addEventListener('input' , (event)=>{ //input or keyup
    wishlistValue = event.target.value;
})

const updateScore =()=>{
  
  scoreEle.innerHTML=`<span>Total items in wishlist <span/> : ${count}`;
}


const updateCount =()=>{
  if(wishList){
    count = wishList.length;
    console.log(count);
  }
  if(count === 0){
    const emptyMessage = document.createElement('p');
    emptyMessage.innerHTML = '<p>The Wishlist is empty...<p/><p>Add activities to your bucket List...<p/>';
    emptyMessage.classList.add('empty-wishlist');
    parentWishlistContainerEle.appendChild(emptyMessage);
  }
}
// for the time when page reloads
updateCount();

form.addEventListener('submit' , (event)=>{
    event.preventDefault();
    wishList = [...wishList , wishlistValue];
    wishlistInputElement.value="";
    parentWishlistContainerEle.innerHTML = '';
    updateCount();
    updateScore();
    showWishlist(wishList);
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
        deleteBtnEle.className="delete-button";
        // deleteBtnEle.innerText = "Delete";
        deleteBtnEle.setAttribute('name', wish);
        containerEle.appendChild(deleteBtnEle);

        const deleteIconImg = document.createElement('img');
        deleteIconImg.setAttribute('src', './delete.png');
        deleteIconImg.setAttribute('alt', 'Delete');
        deleteBtnEle.appendChild(deleteIconImg);

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
  if ((target.tagName === 'BUTTON' || target.tagName=== 'IMG') && target.name) {
    const itemToDelete = target.name;
    wishList = wishList.filter(item => item !== itemToDelete);
    parentWishlistContainerEle.innerHTML = '';
    showWishlist(wishList);
    updateCount();
    updateScore();
  }

  // Check if the clicked element is a delete image
  if (target.tagName === 'IMG' && target.parentNode.classList.contains('delete-button')) {
    const deleteBtnEle = target.parentNode;
    const itemToDelete = deleteBtnEle.getAttribute('name');
    wishList = wishList.filter((item) => item !== itemToDelete);
    parentWishlistContainerEle.innerHTML = '';
    showWishlist(wishList);
    updateCount();
    updateScore();
  }

})

bodyFullEle.addEventListener('click' , (event)=>{
  // console.log(event);
  let name = prompt("What is your name?");
  const namechange = document.querySelector('.message');
  if(name===null || name.length==0){
    namechange.innerHTML = `Welcome Guest!`;
  }
  else{
    namechange.innerHTML = `Welcome <i>${name}<i/>`;
  }
})