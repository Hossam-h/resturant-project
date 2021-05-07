let allImage=document.querySelectorAll('.container_images img'),
moreImage=document.getElementById('more');


for(let i=10; i<allImage.length; i++){
    allImage[i].classList.add('non-display')
}
moreImage.onclick=function(){
    for(let i=10; i<allImage.length; i++){
        allImage[i].classList.toggle('non-display')
    }
}