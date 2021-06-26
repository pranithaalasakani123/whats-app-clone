const drop_btn = document.querySelector(".drop-btn");
const menu_bar = document.querySelector(".wrapper");

drop_btn.onclick = (()=>{
   menu_bar.classList.toggle("show");
});

const drop_btn_1 = document.querySelector(".drop_btn_1");
const chat_menu = document.querySelector(".chat__menu");

drop_btn_1.onclick = (()=>{
  chat_menu.classList.toggle("togle");
});

function togglePopup(){
  document.getElementById("popup-1").classList.toggle("active");
}

function Popup(){
  document.getElementById("popup-2").classList.toggle("active-1");
}

function innerpopup(){
  document.getElementById("popup-3").classList.toggle("active-2");
}

function profilepopup(){
  document.getElementById("popup-4").classList.toggle("active-3");
}
function archievepopup(){
  document.getElementById("popup-5").classList.toggle("active-4");
}
function starredpopup(){
  document.getElementById("popup-6").classList.toggle("active-5");
}
function settingspopup(){
  document.getElementById("popup-7").classList.toggle("active-6");
}
function chatPopup(){
  document.getElementById("popup-8").classList.toggle("active-7");
}
