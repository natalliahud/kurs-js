import { addClass, removeClass } from "./changeClass.js";
import { clearValue } from "./clearValue.js";
import { ControlKeeper } from "./ControlKeeper.js";
import { textMessage } from "./textError.js";
import { isUsertitle, isUsername } from "./isValid.js";
import { render } from "./render.js";

function init(){
const data = new Date();
const day = ('0' + data.getDate()).slice(-2);
const month = ('0' + data.getMonth() + 1).slice(-2);
const year = data.getFullYear();

const $CURRENT_DATA = document.querySelector('.current-data');
$CURRENT_DATA.textContent = `${day}.${month}.${year}`;

let controlKeeper = [];
let check = [];

const $FORM = document.querySelector('.form');
const $USER_TITLE = $FORM.elements.usertitle;
const $DESCRIPTION = $FORM.elements.description;
const $USER_NAME = $FORM.elements.username;
const $SAVE_BTN = document.querySelector('#save-btn');

$FORM.addEventListener("submit", (event) => {
  event.preventDefault();

  checkControl();
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

function checkControl() {
  let usertitleValue = $USER_TITLE.value.trim();
  let descriptionValue = $DESCRIPTION.value.trim();
  let usernameValue = $USER_NAME.value.trim();

  let formControls = document.querySelectorAll('.form-control');
  formControls.forEach((el) => {
    el.addEventListener('input', () => {
      removeClass(el, 'error');
      addClass(el,'success');
    });
  });

  if(usertitleValue === ''){
    setErrorForm($USER_TITLE, textMessage.enterDate);
    check.push(false);
  } else if (isUsertitle(usertitleValue)){
    setErrorForm($USER_TITLE, textMessage.enterCorrectly);
    check.push(false);
  } else {
    setSucceessForm($USER_TITLE);
    check.push(true);
  }

  if(descriptionValue === ''){
    setErrorForm($DESCRIPTION, textMessage.enterDate);
    check.push(false);
  } else {
    setSucceessForm($DESCRIPTION);
    check.push(true);
  }

  if(usernameValue === ''){
    setErrorForm($USER_NAME, textMessage.enterDate);
    check.push(false);
  } else if (isUsername(usernameValue)){
    setErrorForm($USER_NAME, textMessage.enterCorrectly);
    check.push(false);
  } else {
    setSucceessForm($USER_NAME);
    check.push(true);
  }

  if (!check.includes(false, 0)){
    const userData = new ControlKeeper(
      usertitleValue,
      descriptionValue,
      usernameValue,
    );

    controlKeeper.push(userData);
    
    clearValue([$USER_TITLE, $DESCRIPTION, $USER_NAME]);

    let controls = document.querySelectorAll('.form-control');
    for(let el of controls) {
      removeClass(el, 'success');
    }
  } else {
    check.splice(0);
  }
  
}

function setSucceessForm(control){
  const formControl = control.parentElement;
  addClass(formControl, 'success');
}
function setErrorForm(control, message){
  const formControl = control.parentElement;
  const small = formControl.querySelector('small');
  addClass(formControl, 'error');
  small.innerText = message;
}



}
init();