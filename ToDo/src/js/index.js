import { addClass, removeClass } from "./changeClass.js";

const data = new Date();
const day = ('0' + data.getDate()).slice(-2);
const month = ('0' + data.getMonth() + 1).slice(-2);
const year = data.getFullYear();

const $CURRENT_DATA = document.querySelector('.current-data');
$CURRENT_DATA.textContent = `${day}.${month}.${year}`;

const $FORM = document.querySelector('.form');
const $USER_TITLE = $FORM.elements.usertitle;
const $DESCRIPTION = $FORM.elements.description;
const $USER_NAME = $FORM.elements.username;

$FORM.addEventListener("submit", (event) => {
  event.preventDefault();

});

const $ADD_BTN = document.querySelector('.add-btn');
const $FORM_POPUP = document.querySelector('#popup');
const $POPUP_MAKE = document.querySelector('.popup-make');
const $BTN_CLOES = document.querySelector('.btn-cloes');

$ADD_BTN.addEventListener('click', () => {
$FORM_POPUP.classList.add('open');
$POPUP_MAKE.classList.add('popup-make_open');
});


$BTN_CLOES.addEventListener('click', () => {
  $FORM_POPUP.classList.remove('open');
  $POPUP_MAKE.classList.remove('popup-make_open');
});

// function checkControl() {
//   let usertitleValue = $USER_TITLE.value.trim();
//   let descriptionValue = $DESCRIPTION.value.trim();
//   let usernameValue = $USER_NAME.value.trim();

//   let formControls = document.querySelector('.form-control');

// }
