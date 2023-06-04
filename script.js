const toggleBtn = document.querySelector(".toggle-btn");
const darkToggle = document.querySelector(".dark");
const lightToggle = document.querySelector(".light");
const body = document.querySelector(".body");
const navLink = document.querySelectorAll(".link");
const heading = document.querySelectorAll(".heading");
const paragraph = document.querySelectorAll(".paragraph");
const active = document.querySelector("#active");
const headerTop = document.querySelector(".header-top");
const planBtn = document.querySelectorAll(".steps__title");
const plansWrapper = document.querySelectorAll(".plan-option-container");
const plansOption = document.querySelectorAll(".product__plan");
const arrowIcon = document.querySelectorAll(".arrow-icon");
const indicator = document.querySelectorAll(".indicator");
const createPlanBtn=document.querySelector(".create-plan")
const summaryModal=document.querySelector(".modal-container")
const orderSummary=document.querySelector(".order-summary")
const finalOrderSummary=document.querySelector(".final-order-summary")
let total=document.querySelector(".total")
let planCards = document.getElementsByClassName("product__plan");
let brewedTypes = document.getElementsByClassName("brewed-type");
let coffeeTypes = document.querySelectorAll(".coffee-type");
let coffeeQuantity = document.querySelectorAll(".coffee-quantity");
let coffeeProcess = document.getElementsByClassName("coffee-process");
let coffeeDelivery = document.getElementsByClassName("coffee-delivery");
const twoFiftygram = [7.20, 9.60, 12.00];
const fiveHundredGram = [13.00, 17.50, 22.0];
const thousandGram = [22.00, 32.00, 42.00];
let grams=document.querySelectorAll(".grams")
let weeklyPrice=document.querySelector(".weekly-price")
let biWeeklyPrice=document.querySelector(".bi-weekly-price")
let monthlyPrice=document.querySelector(".monthly-price")

//FONT COLOR CHANGES WHEN THE LIGHTS ARE TOGGLED
function navLinkColor() {
  for (let i = 0; i < navLink.length; i++) {
    if (lightToggle.style.display == "block") {
      navLink[i].style.color = "rgb(254,252,247)";
      navLink[i].addEventListener("mouseover", () => {
        navLink[i].style.color = "rgb(14,135,132)";
      });
      navLink[i].addEventListener("mouseout", () => {
        navLink[i].style.color = "rgb(254,252,247)";
      });
    } else {
      navLink[i].style.color = "rgb(135,147,174)";
      navLink[i].addEventListener("mouseover", () => {
        navLink[i].style.color = "#000000";
      });
      navLink[i].addEventListener("mouseout", () => {
        navLink[i].style.color = "rgb(135,147,174)";
      });
    }
  }
}

//Change Paragraph color to a complementing color when light/dark mode us toggled
function paragraphColor() {
  for (let i = 0; i < paragraph.length; i++) {
    if (lightToggle.style.display == "block") {
      heading[i].style.color = "rgb(254,252,247)";
      paragraph[i].style.color = "rgb(254,252,247)";
    } else {
      heading[i].style.color = "rgb(51,61,75)";
      paragraph[i].style.color = "rgb(51,61,75)";
      
    }
  }
}
// header Background
function headerBg() {
  if (lightToggle.style.display == "block") {
    active.style.background = "rgb(14,135,132)";
  } else {
    active.style.background = "#ffffff";
  }
}

//TOGGLE FUNCTION
toggleBtn.addEventListener("click", () => {
  if (lightToggle.style.display == "block") {
    darkToggle.style.display = "block";
    lightToggle.style.display = "none";
    body.style.background = "rgb(254,252,247)";
    
  } else {
    darkToggle.style.display = "none";
    lightToggle.style.display = "block";
    body.style.background = "rgb(51,61,75)";
   
  }
  navLinkColor();
  paragraphColor();
});

//WINDOW ON SCROLL FOR THE TOP NAV MENU CONTAINER

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 300 ||
    document.documentElement.scrollTop > 300
  ) {
    active.style.top = "0";
    active.style.left = "0";
    active.style.padding = "3em 5em";
    active.style.width = "100%";
    active.style.position = "fixed";
    headerBg();
  } else {
    active.style.top = "initial";
    active.style.left = "initial";
    active.style.padding = "2em 0";
    active.style.width = "initial";
    headerTop.style.background = "initial";
    active.style.position = "initial";
  }
}

//PLANS

for (let i = 0; i < planBtn.length; i++) {
  planBtn[i].addEventListener("click", () => {
    if (plansWrapper[i].style.display == "block") {
      plansWrapper[i].style.display = "none";
      arrowIcon[i].style.transform = "rotate(0deg)";
      indicator[i].style.color = "rgb(187,185,183)";
    } else {
      plansWrapper[i].style.display = "block";
      arrowIcon[i].style.transform = "rotate(180deg)";
      indicator[i].style.color = "rgb(51,61,75)";
    }
  });
}


// SELECT A CARD FOR EACH OPTIONS

for (let i = 0; i < planCards.length; i++) {
  let title = planCards[i].querySelector(".product__plan--title").innerText;
  planCards[i].addEventListener("click", () => {
    planCards[i].style.background="rgb(14,135,132)"
    if (
      planCards[i]
        .querySelector(".product__plan--title")
        .classList.contains("brewed-type")
    ) {
      document.querySelector(".drink-style").innerText = title;
    } else if (
      planCards[i]
        .querySelector(".product__plan--title")
        .classList.contains("coffee-type")
    ) {
      document.querySelector(".type").innerText = title;
    } else if (
      planCards[i]
        .querySelector(".product__plan--title")
        .classList.contains("coffee-quantity")
    ) {
      document.querySelector(".quantity").innerText = title;
    }else if (
      planCards[i]
        .querySelector(".product__plan--title")
        .classList.contains("coffee-process")
    ) {
      document.querySelector(".grind").innerText = title;
    } else {
      document.querySelector(".delivery").innerText = title;
    }
    removeGrind();
  });
}


//INACVTIVATE "WANT US TO GRIND" IF CAPSULE IS CLICKED FOR TYPE OF COFFEE
function removeGrind() {
  if (document.querySelector(".drink-style").innerText == "Capsule") {
    document.querySelector(".ground").style.display = "none";
    document.querySelector(".grinding").style.cursor = "not-allowed";
    document.querySelector(".grinding").style.opacity = "0.8";
    document.querySelector(".grind-indicator").style.opacity = "0.8";
  } else {
    document.querySelector(".ground").style.display = "initial";
    document.querySelector(".grinding").style.cursor = "pointer";
    document.querySelector(".grinding").style.opacity = "1";
    document.querySelector(".grind-indicator").style.opacity = "1";
  }
}



//LOGIC FOR IF A PARTICULAR GRAM IS PICKED THE PRICES SHOULD REFLECT BASED ON THE GRAM


for(let i=0;i<grams.length;i++){
    grams[i].addEventListener("click",()=>{
        if(grams[i].querySelector(".coffee-quantity").innerText=="250g"){
            weeklyPrice.innerText=`$${twoFiftygram[0]}`
            biWeeklyPrice.innerText=`$${twoFiftygram[1]}`
            monthlyPrice.innerText=`$${twoFiftygram[2]}`
        }else if(grams[i].querySelector(".coffee-quantity").innerText=="500g"){
            weeklyPrice.innerText=`$${fiveHundredGram[0]}`
            biWeeklyPrice.innerText=`$${fiveHundredGram[1]}`
            monthlyPrice.innerText=`$${fiveHundredGram[2]}`
        }else{
            weeklyPrice.innerText=`$${thousandGram[0]}`
            biWeeklyPrice.innerText=`$${thousandGram[1]}`
            monthlyPrice.innerText=`$${thousandGram[2]}`
        }
    })
}


//CREATE PLAN
createPlanBtn.addEventListener("click",()=>{
  if(summaryModal.style.display=="block"){
    summaryModal.style.display="none"
  }else{
    summaryModal.style.display="block"
    finalOrderSummary.innerText=orderSummary.innerText
    finalOrderSummary.classList.add("style")
  }
priceTotal()
})


//ADJUST TOTAL PRICE ACCORDING TO THE PRICES IN THE PLAN PACKAGE
const price=document.getElementsByClassName("price")
function priceTotal(){
    for(let i=0;i<price.length;i++){
      if(document.querySelector(".delivery").innerText=="Every week"){
        let priceEl=price[0].innerText
        total.innerText=`$${parseInt(priceEl.replace("$",""))*4} / mo`
        
       
       }else if(document.querySelector(".delivery").innerText=="Every 2 week"){
        let priceEl=price[1].innerText
        total.innerText=`$${parseInt(priceEl.replace("$",""))*2} / mo`
        
         
       }else{
        let priceEl=price[2].innerText
        total.innerText=`$${parseInt(priceEl.replace("$",""))*1} / mo`
        
       }
    }
    
    
  
}
