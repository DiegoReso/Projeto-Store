let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
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


btn[0].addEventListener('click', ()=> console.log('oin'))

