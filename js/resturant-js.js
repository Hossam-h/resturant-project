/* start Glopale variable */
let mySort=document.getElementById('sort'),
myMenue=document.getElementById('type-eats'),
myAntipasti=document.getElementById('my-antipasti'),
myPitza=document.getElementById('my-Pitza'),
myMeals=document.getElementById('type-meals'),
myall_order_antipasti=document.querySelectorAll('.contain_allorder_of_antipasti div'),
myall_order_Pizza=document.querySelectorAll('.contain_allorder_of_PIZZA div'),
mycontain_Pizza= document.querySelectorAll('.price-of-meals .contain-pitza div'),
parent=document.querySelector('.price-of-meals .contain-pitza'),
mycontain_Antipasti= document.querySelectorAll('.price-of-meals .contain-antipasti div'),
blure_all=document.querySelector('.blur-on-all'),
my_all_close=document.querySelectorAll('.fa-times'),
all_minus=document.querySelectorAll('.fa-minus'),
all_plus=document.querySelectorAll('.plus'),
my_quantity=document.querySelectorAll('.quantity'),
my_aadOrder=document.querySelectorAll('.add-order'),
myItems=document.getElementById('number-item'),
my_order_requsted=document.getElementById('order_requested'),
all_h4Order=document.querySelectorAll('.order'),
total=document.getElementById('total'),
user=document.getElementById('user'),
login=document.getElementById('login'),
log=document.getElementById('log'),
username=document.getElementById('user_name'),
password=document.getElementById('show-pass'),

close_order=document.querySelectorAll('p .fa-times');

let muarraystore=[];

/* end Glopale variable */

//console.log(my_aadOrder)

let i=1;
let number_item=0
let number_order=0;





log.onclick=function(){
    if(username.textContent==""){

        login.classList.add('animate')
        login.classList.remove('animate2')
        blure_all.classList.add('display')
    }else{
        login.classList.remove('animate')
        login.classList.add('animate2')
        blure_all.classList.remove('display')
    }

    

}

user.onclick=function(){

    login.classList.remove('animate2');
    login.classList.add('animate');
    blure_all.classList.add('display');
}

for(let i=0; i<my_quantity.length;i++){
    all_minus[i].setAttribute('data-count',i)
    my_quantity[i].textContent=1
    my_quantity[i].setAttribute('id',i)
}

for(let i=0; i<my_quantity.length;i++){
    all_plus[i].setAttribute('data-count',i)
}

for(let i=0; i<my_quantity.length;i++){
    all_plus[i].setAttribute('data-count',i)
}

for(let i=0; i<my_quantity.length;i++){
    my_all_close[i].setAttribute('data-count',i)
    my_aadOrder[i].setAttribute('data-count',i)
}

//to remove order when click on .fa-times






all_minus.forEach(all_minus_item=>{
    all_minus_item.onclick=function(){
       let el=document.getElementById(all_minus_item.getAttribute('data-count'))      
             
       if(i<=1){
       
            this.classList.add('non-click')
            
        }else{
            i=i-1;
            el.textContent=i;
        }       
    }
})


all_plus.forEach(all_plus_item=>{
    all_plus_item.onclick=function(){
       let el=document.getElementById(all_plus_item.getAttribute('data-count'))
       i=i+1
         el.textContent=i

         
       if(i>1){
       for(let x=0; x<all_plus.length; x++){
        all_minus[x].classList.remove('non-click')
       }

    }
       
    }
})

//close all
my_all_close.forEach(myClose_el=>{
    myClose_el.onclick=function(){
    removeAll_order()
 
        blure_all.classList.remove('display')
       
        let el=document.getElementById(myClose_el.getAttribute('data-count'))
             i=1
          el.textContent=i       
    }
})

//to remove all antipasti order
removeAll_order()
function removeAll_order(){
        myall_order_antipasti.forEach(antipasti_order=>{
        antipasti_order.classList.add('no_display')
        antipasti_order.classList.remove('display')

    })
        myall_order_Pizza.forEach(myPizza_ele=>{
        myPizza_ele.classList.add('no_display') 
        myPizza_ele.classList.remove('display')
    })

}

// to appear my order of Antipasti
mycontain_Antipasti.forEach(Antipasti_ele=>{
    let result=Antipasti_ele;
   
    result.onclick=function(){
        removeAll_order()
     
        let el=document.getElementById(result.getAttribute("data-custom"))
         el.classList.add('display')
         blure_all.classList.add('display')
    }
})

mycontain_Pizza.forEach(Pizza_ele=>{

     Pizza_ele.onclick=function(){
        removeAll_order()
        let el=document.getElementById(Pizza_ele.getAttribute("data-custom"))
        el.classList.add('display')
        blure_all.classList.add('display')

    }
})


//function to add order 
/*
my_aadOrder.forEach(order_item=>{
    order_item.onclick=function(){
       
        
    }
})
*/


myPitza.classList.add('display-none')

myMenuechild=myMenue.children
/* */
myMenuechild[0].onclick=function(){
    this.style.borderLeft='2px solid black'
    this.style.backgroundColor='rgb(199, 199, 199)'
    myMenuechild[1].style.borderLeft='none'
    myMenuechild[1].style.backgroundColor='transparent'
    myPitza.classList.add('display-none')
    myPitza.classList.remove('display')
    myAntipasti.classList.add('display')
    myAntipasti.classList.remove('display-none')
    myMeals.textContent="ANTIPASTI"
    

}

myMenuechild[1].onclick=function(){
    this.style.borderLeft='2px solid black'
    this.style.backgroundColor='rgb(199, 199, 199)'
    myMenuechild[0].style.borderLeft='none'
    myMenuechild[0].style.backgroundColor='transparent'
    myAntipasti.classList.add('display-none')
    myAntipasti.classList.remove('display')
    myPitza.classList.add('display')
    myPitza.classList.remove('display-none')
    myMeals.textContent="PIZZA"
}

myMenue.style.display='none'
mySort.onclick= function(){
 if(mySort.classList.contains('rotate')){
     mySort.classList.remove('rotate')
     mySort.classList.add('rotate-up')
     $("#type-eats").slideUp();

 }else{
    mySort.classList.remove('rotate-up')
    mySort.classList.add('rotate')
    $("#type-eats").slideToggle();
 }
}
/*----------------------------------------------------------------------------*/

my_aadOrder[0].onclick=function(){
removeAll_order()
blure_all.classList.remove('display')
number_item++
myItems.value=number_item;

let myoredr_element0=document.createElement('p')

myoredr_element0.textContent=all_h4Order[0].textContent +" " +" "+i*9+"$" 
my_order_requsted.appendChild(myoredr_element0)





let close1 =document.createElement('i')
close1.classList.add('fa-times')
close1.classList.add('fas')
myoredr_element0.appendChild(close1)
close1.style.float='right'
close1.style.cursor='pointer'
close1.onclick=function(){
    myoredr_element0.remove();
    number_item--;
    myItems.value=number_item
}
my_aadOrder.forEach(add_Order=>{

        let el=document.getElementById(add_Order.getAttribute('data-count'))
          i=1
          el.textContent=i   
         
})


}

my_aadOrder[1].onclick=function(){
    removeAll_order()
    blure_all.classList.remove('display')
    number_item++
    myItems.value=number_item
   
    let myoredr_element1=document.createElement('p');
    myoredr_element1.textContent=all_h4Order[1].textContent +" " +" "+i*9+"$" 
    my_order_requsted.appendChild(myoredr_element1)

    
    total.value+=i*9;
    console.log(typeof(total.value));

    let close2 =document.createElement('i')
    close2.classList.add('fa-times')
    close2.classList.add('fas')
    myoredr_element1.appendChild(close2)
    close2.style.float='right'
    close2.style.cursor='pointer'
    close2.onclick=function(){
        myoredr_element1.remove()
        number_item--;
        myItems.value=number_item;
    }

    my_aadOrder.forEach(add_Order=>{   
    let el=document.getElementById(add_Order.getAttribute('data-count'))
    i=1
    el.textContent=i            
})

}

my_aadOrder[2].onclick=function(){
    removeAll_order()
    blure_all.classList.remove('display')
    number_item++
    myItems.value=number_item
    
    let myoredr_element2=document.createElement('p')
    myoredr_element2.textContent=all_h4Order[2].textContent +" " +" "+i*9+"$" 
    my_order_requsted.appendChild(myoredr_element2)
   
    let close2 =document.createElement('i')
    close2.classList.add('fa-times')
    close2.classList.add('fas')
    myoredr_element2.appendChild(close2)
    close2.style.float='right'
    close2.style.cursor='pointer'
    close2.onclick=function(){
        myoredr_element2.remove()
        number_item--;
        myItems.value=number_item;
    }

    my_aadOrder.forEach(add_Order=>{

        let el = document.getElementById(add_Order.getAttribute('data-count'))
        i=1
          el.textContent=i   
         
          
})
}

my_aadOrder[3].onclick=function(){
    removeAll_order()
    blure_all.classList.remove('display')
    number_item++
    myItems.value=number_item
    
    let myoredr_element3=document.createElement('p')
    myoredr_element3.textContent=all_h4Order[3].textContent +" " +" "+i*9+"$" 
    my_order_requsted.appendChild(myoredr_element3)
   
    let close2 =document.createElement('i')
    close2.classList.add('fa-times')
    close2.classList.add('fas')
    myoredr_element3.appendChild(close2)
    close2.style.float='right'
    close2.style.cursor='pointer'
    close2.onclick=function(){
        myoredr_element3.remove()
        number_item--;
        myItems.value=number_item;
    }

    my_aadOrder.forEach(add_Order=>{

   
        let el=document.getElementById(add_Order.getAttribute('data-count'))
        i=1
          el.textContent=i   
         
          
})
}

my_aadOrder[4].onclick=function(){
    removeAll_order()
    blure_all.classList.remove('display')
    number_item++
    myItems.value=number_item
   
    let myoredr_element4=document.createElement('p');
    myoredr_element4.textContent=all_h4Order[4].textContent +" " +" "+i*9+"$" 
    my_order_requsted.appendChild(myoredr_element4)
  
    let close2 =document.createElement('i')
    close2.classList.add('fa-times')
    close2.classList.add('fas')
    myoredr_element4.appendChild(close2)
    close2.style.float='right'
    close2.style.cursor='pointer'
    close2.onclick=function(){
        myoredr_element4.remove()
        number_item--;
        myItems.value=number_item;
    }

    my_aadOrder.forEach(add_Order=>{

   
        let el=document.getElementById(add_Order.getAttribute('data-count'))
        i=1
          el.textContent=i   
          
          
})
}
my_aadOrder[5].onclick=function(){
    removeAll_order()
    blure_all.classList.remove('display')
    number_item++
    myItems.value=number_item
    
    let  myoredr_element5=document.createElement('p')
    myoredr_element5.textContent=all_h4Order[5].textContent +" " +" "+i*9+"$" 
    my_order_requsted.appendChild(myoredr_element5)

    let close2 =document.createElement('i')
    close2.classList.add('fa-times')
    close2.classList.add('fas')
    myoredr_element5.appendChild(close2)
    close2.style.float='right'
    close2.style.cursor='pointer'
    close2.onclick=function(){
        myoredr_element5.remove()
        number_item--;
        myItems.value=number_item;
    }

    my_aadOrder.forEach(add_Order=>{  
        let el=document.getElementById(add_Order.getAttribute('data-count'))
        i=1
          el.textContent=i   
                  
})
}

my_aadOrder[6].onclick=function(){
    removeAll_order()
    blure_all.classList.remove('display')
    number_item++
    myItems.value=number_item
  
    let myoredr_element6=document.createElement('p')
    myoredr_element6.textContent=all_h4Order[6].textContent +" " +" "+i*9+"$" 
    my_order_requsted.appendChild(myoredr_element6)

    let close2 =document.createElement('i')
    close2.classList.add('fa-times')
    close2.classList.add('fas')
    myoredr_element6.appendChild(close2)
    close2.style.float='right'
    close2.style.cursor='pointer'
    close2.onclick=function(){
        myoredr_element6.remove()
        number_item--;
        myItems.value=number_item;
    }

    my_aadOrder.forEach(add_Order=>{

          let el=document.getElementById(add_Order.getAttribute('data-count'))
        i=1
          el.textContent=i   
          
          
})
}

my_aadOrder[7].onclick=function(){
    removeAll_order()
    blure_all.classList.remove('display')
    number_item++
    myItems.value=number_item
    
    let myoredr_element7=document.createElement('p')
    myoredr_element7.textContent=all_h4Order[7].textContent +" " +" "+i*9+"$" 
    my_order_requsted.appendChild(myoredr_element7)

    let close2 =document.createElement('i')
    close2.classList.add('fa-times')
    close2.classList.add('fas')
    myoredr_element7.appendChild(close2)
    close2.style.float='right'
    close2.style.cursor='pointer'
    close2.onclick=function(){
        myoredr_element7.remove()
        number_item--;
        myItems.value=number_item;
    }

    my_aadOrder.forEach(add_Order=>{
  
        let el=document.getElementById(add_Order.getAttribute('data-count'))
        i=1
          el.textContent=i            
          
})
}

my_aadOrder[8].onclick=function(){
    removeAll_order()
    blure_all.classList.remove('display')
    number_item++
    myItems.value=number_item
   
    let myoredr_element8=document.createElement('p')
    myoredr_element8.textContent=all_h4Order[8].textContent +" " +" "+i*9+"$" 
    my_order_requsted.appendChild(myoredr_element8)

    let close2 =document.createElement('i')
    close2.classList.add('fa-times')
    close2.classList.add('fas')
    myoredr_element8.appendChild(close2)
    close2.style.float='right'
    close2.style.cursor='pointer'
    close2.onclick=function(){
        myoredr_element8.remove()
        number_item--;
        myItems.value=number_item;
    }

    my_aadOrder.forEach(add_Order=>{
   
        let el=document.getElementById(add_Order.getAttribute('data-count'))
        i=1
        el.textContent=i                     
})
}

my_aadOrder[9].onclick=function(){
    removeAll_order()
    blure_all.classList.remove('display')
    number_item++
    myItems.value=number_item
   
    let myoredr_element9=document.createElement('p')
    myoredr_element9.textContent=all_h4Order[9].textContent +" " +" "+i*9+"$" 
    my_order_requsted.appendChild(myoredr_element9)

    let close2 =document.createElement('i')
    close2.classList.add('fa-times')
    close2.classList.add('fas')
    myoredr_element9.appendChild(close2)
    close2.style.float='right'
    close2.style.cursor='pointer'
    close2.onclick=function(){
        myoredr_element9.remove()
        number_item--;
        myItems.value=number_item;
    }

    my_aadOrder.forEach(add_Order=>{

        let el=document.getElementById(add_Order.getAttribute('data-count'))
        i=1
          el.textContent=i           
          
})
}

my_aadOrder[10].onclick=function(){
    removeAll_order()
    blure_all.classList.remove('display')
    number_item++
    myItems.value=number_item
    
    let myoredr_element10=document.createElement('p');
    myoredr_element10.textContent=all_h4Order[10].textContent +" " +" "+i*9+"$" 
    my_order_requsted.appendChild(myoredr_element10)

    
    let close2 =document.createElement('i')
    close2.classList.add('fa-times')
    close2.classList.add('fas')
    myoredr_element10.appendChild(close2)
    close2.style.float='right'
    close2.style.cursor='pointer'
    close2.onclick=function(){
        myoredr_element10.remove()
        number_item--;
        myItems.value=number_item;
    }

    my_aadOrder.forEach(add_Order=>{
   
        let el=document.getElementById(add_Order.getAttribute('data-count'))
        i=1
          el.textContent=i   
    })
}
//----------------------------------------------------------------------


