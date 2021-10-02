/////Открытие и закрытие списка с тарифами в форме

const selectSingle = document.querySelector('.form__select');
const selectSingle_title = selectSingle.querySelector('.form__select-title');
const selectSingle_labels = selectSingle.querySelectorAll('.form__select-label');

selectSingle_title.addEventListener('click', () => {
  if ('active' === selectSingle.getAttribute('data-state')) {
    selectSingle.setAttribute('data-state', '');
  } else {
    selectSingle.setAttribute('data-state', 'active');
  }
});

for (let i = 0; i < selectSingle_labels.length; i++) {
  selectSingle_labels[i].addEventListener('click', (evt) => {
    selectSingle_title.textContent = evt.target.textContent;
    selectSingle.setAttribute('data-state', '');
  });
}

/////Открытие и закрытие списка с клубами в форме

const selectSingleClub = document.querySelector('.form__select--club');
const selectSingle_titleClub = selectSingleClub.querySelector('.form__select-title--club');
const selectSingle_labelsClub = selectSingleClub.querySelectorAll('.form__select-label--club');

selectSingle_titleClub.addEventListener('click', () => {
  if ('active' === selectSingleClub.getAttribute('data-state')) {
    selectSingleClub.setAttribute('data-state', '');
  } else {
    selectSingleClub.setAttribute('data-state', 'active');
  }
});

for (let i = 0; i < selectSingle_labelsClub.length; i++) {
  selectSingle_labelsClub[i].addEventListener('click', (evt) => {
    selectSingle_titleClub.textContent = evt.target.textContent;
    selectSingleClub.setAttribute('data-state', '');
  });
}

//////Маска для ввода номера телефона

$.fn.setCursorPosition = function(pos) {
  if ($(this).get(0).setSelectionRange) {
    $(this).get(0).setSelectionRange(pos, pos);
  } else if ($(this).get(0).createTextRange) {
    var range = $(this).get(0).createTextRange();
    range.collapse(true);
    range.moveEnd('character', pos);
    range.moveStart('character', pos);
    range.select();
  }
};

$("#tel").click(function(){
  $(this).setCursorPosition(3);
}).mask("+7(999) 999-9999");
$("#tel").mask("+7(999) 999-99-99");

//////Маска для ввода даты рождения

$("#date-birth").click(function(){
  $(this).setCursorPosition(0);
}).mask("99.99.9999");
$("#date-birth").mask("99.99.9999");


////валидация формы

const form = document.querySelector('.form');
const validateBtn = form.querySelector('.button');
const input = form.querySelectorAll('input');


form.addEventListener('submit', function () {
  event.preventDefault()
  const errors = form.querySelectorAll('.error--active')
  for (var i = 0; i < errors.length; i++) {
    errors[i].remove();
  }
  const errorsRadio = form.querySelectorAll('.errorRadio--active')
  for (var i = 0; i < errorsRadio.length; i++) {
    errorsRadio[i].remove();
  }
  
for (var i = 0; i < input.length; i++) {
  if (!input[i].value)
  {
    const error = document.createElement('div');
    error.className='error--active';
    error.innerHTML = 'Заполните форму';
    form[i].parentElement.insertBefore(error, input[i]);

  } 
}
 
   if (form.elements.tariff.value == "Тариф")
 {
   const errorRadio = document.createElement('div');
   const contentTariffRadio = form.querySelector('#tariff-validate');
    errorRadio.className='errorRadio--active';
    errorRadio.innerHTML = 'Заполните форму';
    contentTariffRadio.insertAdjacentElement('beforeBegin', errorRadio);

 } 
 
  if (form.elements.club.value == "Клуб")
  {  console.log(form.elements.club.value);
   const errorClubRadio = document.createElement('div');
    const contentClubRadio = form.querySelector('#club-validate');
    errorClubRadio.className='errorRadio--active';
    errorClubRadio.innerHTML = 'Заполните форму';
    contentClubRadio.insertAdjacentElement('beforeBegin', errorClubRadio);

  } 
}
)

form.addEventListener('submit', function () {
  for (var i = 0; i < input.length; i++) {
    if (input[i].checkValidity
      && form.elements.tariff.value != "Тариф" 
      && form.elements.club.value != "Клуб") {
        console.log("Ок");
        document.location.href = "payment/index.html";
      }
    } });

