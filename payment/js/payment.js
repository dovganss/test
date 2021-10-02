/////Маска для даты начала занятий

$("#date").click(function(){
  $(this).setCursorPosition(0);
}).mask("99.99.9999");
$("#date").mask("99.99.2099");

//////

const buttonBack = document.querySelector(".button--back")
    
buttonBack.addEventListener('click', () => { 
  event.preventDefault()
  document.location.href = "/index.html";

});