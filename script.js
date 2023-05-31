const toggleBtn=document.querySelector(".toggle-btn")
const darkToggle=document.querySelector(".dark")
const lightToggle=document.querySelector(".light")
const body=document.querySelector(".body")
const navLink=document.querySelectorAll(".link")
const heading=document.querySelectorAll(".heading")
const paragraph=document.querySelectorAll(".paragraph")
const active =document.querySelector("#active")
const headerTop=document.querySelector(".header-top")
const planBtn=document.querySelectorAll(".steps__title")
const plansWrapper=document.querySelectorAll(".plan-option-container")
const plansOption=document.querySelectorAll(".product__plan")
const arrowIcon=document.querySelectorAll(".arrow-icon")                    
const indicator=document.querySelectorAll(".indicator")
let planCards=document.getElementsByClassName("product__plan")
let brewedTypes=document.getElementsByClassName("brewed-type")
let coffeeTypes=document.querySelectorAll(".coffee-type")
let coffeeQuantity=document.getElementsByClassName("coffee-quantity")
let coffeeProcess=document.getElementsByClassName("coffee-process")
let coffeeDelivery=document.getElementsByClassName("coffee-delivery")



//FONT COLOR CHANGES WHEN THE LIGHTS ARE TOGGLED
function navLinkColor(){
    for(let i=0;i<navLink.length;i++){
        if(lightToggle.style.display=="block"){
            navLink[i].style.color="rgb(254,252,247)"
            navLink[i].addEventListener("mouseover",()=>{
                navLink[i].style.color="rgb(14,135,132)"
            })
            navLink[i].addEventListener("mouseout",()=>{
                navLink[i].style.color="rgb(254,252,247)"
            })
        }else{
            navLink[i].style.color="rgb(135,147,174)"
            navLink[i].addEventListener("mouseover",()=>{
                navLink[i].style.color="#000000"
            })
            navLink[i].addEventListener("mouseout",()=>{
                navLink[i].style.color="rgb(135,147,174)"
            })
            
        }
    }
  
   
}




//Change Paragraph color to a complementing color when light/dark mode us toggled
function paragraphColor(){
    for(let i=0;i<paragraph.length;i++){
        if(lightToggle.style.display=="block"){
            heading[i].style.color="rgb(254,252,247)"
            paragraph[i].style.color="rgb(254,252,247)"
            
        }else{
            heading[i].style.color="rgb(51,61,75)"
            paragraph[i].style.color="rgb(51,61,75)"
            
        }
    }
}
// header Background
function headerBg(){
    if(lightToggle.style.display=="block"){
        active.style.background="rgb(14,135,132)"
        
    }else{
       active.style.background="#ffffff"
        
    }
}


//TOGGLE FUNCTION
toggleBtn.addEventListener("click",()=>{
    if(lightToggle.style.display=="block"){
        darkToggle.style.display="block"
        lightToggle.style.display="none"
        body.style.background="rgb(254,252,247)"
      
    }else{
        darkToggle.style.display="none"
        lightToggle.style.display="block"
        body.style.background="rgb(51,61,75)"
    
    }
    navLinkColor()
    paragraphColor()    
})



//window on scroll for the top nav to chnage color and ne fixed

window.onscroll= function(){
    scrollFunction()
}

function scrollFunction(){
    if(document.body.scrollTop>300 || document.documentElement.scrollTop>300){
        active.style.top="0"
        active.style.left="0"
        active.style.padding="3em 5em"
        active.style.width="100%"
        active.style.position="fixed"
    headerBg()
    }else{
        active.style.top="initial"
        active.style.left="initial"
        active.style.padding="2em 0"
        active.style.width="initial"
        headerTop.style.background="initial"
        active.style.position="initial"
        
    }
    
}

//PLANS

for(let i=0;i<planBtn.length;i++){
   planBtn[i].addEventListener("click",()=>{
    if(plansWrapper[i].style.display=="block"){
        plansWrapper[i].style.display="none"
        arrowIcon[i].style.transform="rotate(0deg)"
        indicator[i].style.color="rgb(187,185,183)"
    }else{
        plansWrapper[i].style.display="block"
       arrowIcon[i].style.transform="rotate(180deg)"
        indicator[i].style.color="rgb(51,61,75)"
    }
   })
}


// Select a card for each choice
