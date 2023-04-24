let slideIndex = 0
showSlides()

function showSlides() {
  
  let i;
  let slides = document.getElementsByClassName("mySlides")
  let dots = document.getElementsByClassName("dot")
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none"
  }
  slideIndex++
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "")
  }
  slides[slideIndex-1].style.display = "block"; 
  dots[slideIndex-1].className += " active"
  setTimeout(showSlides, 2000);
}


const btnMenu = document.querySelector('#menu')
const submenu = document.querySelector('#submenu')
let flag = 0

btnMenu.addEventListener('click', function(){
  
  if(flag === 0){
    submenu.classList.add('visible')
    flag = 1
    btnMenu.innerHTML = `<img src="images/close.gif" alt="menu"  height="25px" width="32px">`
    
  }
  else{
    submenu.classList.remove('visible')
    flag = 0
    btnMenu.innerHTML = `<img src="images/menu.png" alt="menu">`
  }
  
})


const btn = document.querySelectorAll('.btnBuy')
const cart = document.querySelector('#cart')
const cartContent = document.querySelector('#add-cart')
const close_img = document.querySelector('.close')
const close_img1 = document.querySelector('.close1')
const close_img2 = document.querySelector('.close2')
const close_img3 = document.querySelector('.close3')

let count = 0

btn[0].addEventListener('click', ()=>{
  
  count++
  cart.classList.add('visible')
  cartContent.innerHTML = count
  btn[0].setAttribute('disabled', '')
  btn[0].textContent = 'Added to Cart'
  close_img.classList.add('visible')
})

btn[1].addEventListener('click', ()=>{
  count++
  cart.classList.add('visible')
  cartContent.textContent = count
  btn[1].setAttribute('disabled', '')
  btn[1].textContent = 'Added to Cart'
  close_img1.classList.add('visible')
})

btn[2].addEventListener('click', ()=>{
  
  count++
  cart.classList.add('visible')
  cartContent.textContent = count
  btn[2].setAttribute('disabled', '')
  btn[2].textContent = 'Added to Cart'
  close_img2.classList.add('visible')
})

btn[3].addEventListener('click', ()=>{
  
  count++
  cart.classList.add('visible')
  cartContent.textContent = count
  btn[3].setAttribute('disabled', '')
  btn[3].textContent = 'Added to Cart'
  close_img3.classList.add('visible')
})


close_img.addEventListener('click', ()=>{
  count--
  close_img.classList.remove('visible')
  btn[0].textContent = 'Add to Cart'
  btn[0].removeAttribute('disabled', '')

  if(count == 0){
    cart.classList.remove('visible')
  }else{
    cartContent.innerHTML = count
    
  }

})

close_img1.addEventListener('click', ()=>{
  count--
  close_img1.classList.remove('visible')
  btn[1].textContent = 'Add to Cart'
  btn[1].removeAttribute('disabled', '')

  if(count == 0){
    cart.classList.remove('visible')
  }else{
    cartContent.innerHTML = count
    
  }

})

close_img2.addEventListener('click', ()=>{
  count--
  close_img2.classList.remove('visible')
  btn[2].textContent = 'Add to Cart'
  btn[2].removeAttribute('disabled', '')

  if(count == 0){
    cart.classList.remove('visible')
  }else{
    cartContent.innerHTML = count
    
  }

})

close_img3.addEventListener('click', ()=>{
  count--
  close_img3.classList.remove('visible')
  btn[3].textContent = 'Add to Cart'
  btn[3].removeAttribute('disabled', '')

  if(count == 0){
    cart.classList.remove('visible')
  }else{
    cartContent.innerHTML = count
    
  }

})

