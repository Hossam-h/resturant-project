let mynav=document.querySelector('.navbar'),
myupper=document.querySelector('.upper-bar'),
wow =document.querySelectorAll('.wow'),
myNve_link=document.querySelectorAll('.nav-link'),
pizz_bt=document.getElementById('pizaa_bt'),
passti_bt=document.getElementById('pasti_bt'),
myAllfood=document.getElementById('all_bt'),
myallchoose=document.querySelectorAll('.choose ul li'),
myAntipsti_Pizza=document.querySelectorAll('.Lightbox div'),
scrollto=document.querySelector('.scroll-to');
let myshowPizza=document.querySelectorAll('.pizzashow');
let myshowAntipasti=document.querySelectorAll('.pastiShow');

scrollto.classList.add('display_non');


//to show all food
myAllfood.onclick=function(){
  removeAllactive();
  myAllfood.classList.add('activfood');

  myAntipsti_Pizza.forEach(allFood=>{
    allFood.classList.remove('display_non')
  })

  
}



//to show antipati food
passti_bt.onclick=function(){
  removeAllactive();
  passti_bt.classList.add('activfood');
  myshowPizza.forEach(pizzaItem=>{
    pizzaItem.classList.add('display_non')
  })

  myshowAntipasti.forEach(pastiItem=>{
    pastiItem.classList.remove('display_non')
  })

}

//to show pizza food
pizz_bt.onclick=function(){
  removeAllactive();
  pizz_bt.classList.add('activfood');  
  myshowAntipasti.forEach(pastiItem=>{
    pastiItem.classList.add('display_non')
  })
  myshowPizza.forEach(pizzaItem=>{
    pizzaItem.classList.remove('display_non')
  })

}

scrollto.onclick=function(){
  window.scrollTo(0, 0);

}
//to remove all active class 
function removeAllactive(){
  myAllfood.classList.remove('activfood');
  pizz_bt.classList.remove('activfood');
  passti_bt.classList.remove('activfood');

}


//add active_link
myNve_link.forEach(links=>{
   
  links.addEventListener('click',()=>{
    removeAll();
    links.classList.add('active');
        const el=document.getElementById(links.getAttribute("data-link"));
        el.scrollIntoView({behavior:"smooth",block:"center"})
       //console.log(links.getAttribute('data-link'))
  })

})

// remveall active_link
function removeAll(){
  myNve_link.forEach(links1=>{
    links1.classList.remove('active')
})}


//function to make navbar fixed
document.onscroll=function(){
    if(pageYOffset>2){
      scrollto.classList.remove('display_non')
        mynav.classList.add('fixed')
        myupper.classList.add('top')
    }else{
      scrollto.classList.add('display_non')
        mynav.classList.remove('fixed')
        myupper.classList.remove('top')
    }
}

// to remove animate with resize <1000 
window.addEventListener("resize", function(){
if(document.body.clientWidth<1000){

        wow.forEach(items=>{
            items.classList.remove("animate__animated");
        })
        
        
    }
})
// to remove animate with onload if size X <1000 
if(window.innerWidth<1000){
    
    wow.forEach(items=>{
        items.classList.remove("animate__animated");
    })
}

//-------------------------
// Open the Modal
function openModal() {
    document.getElementById("myModal").style.display = "block";
  }
  
  // Close the Modal
  function closeModal() {
    document.getElementById("myModal").style.display = "none";
  }
  
  var slideIndex = 1;
  showSlides(slideIndex);
  
  // Next/previous controls
  function plusSlides(n) {
    showSlides(slideIndex += n);
  }
  
  // Thumbnail image controls
  function currentSlide(n) {
    showSlides(slideIndex = n);
  }
  
  function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("demo");
    var captionText = document.getElementById("caption");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    //dots[slideIndex-1].className += " active";
    //captionText.innerHTML = dots[slideIndex-1].alt;
  }