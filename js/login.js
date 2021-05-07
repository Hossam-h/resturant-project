let myCheckbox=document.getElementById('checkbox'),
myShow_pass=document.getElementById('show-pass'),
myInput_pass=document.getElementById('my-pass')

myCheckbox.onclick=function(){
    if(myShow_pass.textContent==='Show your password'){
       
    myInput_pass.setAttribute('type','text');
        myShow_pass.textContent='hidden your password';
        
   }
  else if(myShow_pass.textContent==='hidden your password'){
    myInput_pass.setAttribute('type','password');
      myShow_pass.textContent='Show your password';
  }

}