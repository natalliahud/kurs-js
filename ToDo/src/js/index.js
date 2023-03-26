import { addClass, removeClass } from "./changeClass.js";
import { clearValue } from "./clearValue.js";
import { ControlKeeper } from "./ControlKeeper.js";
import { textMessage } from "./textError.js";
import { isUsertitle, isUsername } from "./isValid.js";
import { render, renderInprogress, renderDone } from "./render.js";
import { updateLocal, updateLocalInprogress, updateLocalDone } from "./local.js";

function init(){
const data = new Date();
const day = ('0' + data.getDate()).slice(-2);
const month = ('0' + (data.getMonth() +1)).slice(-2);
const year = data.getFullYear();

const $CURRENT_DATA = document.querySelector('.current-data');
$CURRENT_DATA.textContent = `${day}.${month}.${year}`;

const $ADD_BTN = document.querySelector('.add-btn');
const $REM_BTN = document.querySelector('.rem-btn');
const $FORM_POPUP = document.querySelector('#popup');
const $POPUP_MAKE = document.querySelector('.popup-make');
const $BTN_CLOES = document.querySelector('.btn-cloes');

let controlKeeper = JSON.parse(localStorage.getItem("makeToDo")) || [];
let check = [];
let controlInpr = JSON.parse(localStorage.getItem("progress")) || [];
let controlDone = JSON.parse(localStorage.getItem("done")) || [];

$REM_BTN.addEventListener('click', () => {
  localStorage.removeItem("makeToDo");
  location.reload();
});


const $FORM = document.querySelector('.form');
const $USER_TITLE = $FORM.elements.usertitle;
const $DESCRIPTION = $FORM.elements.description;
const $USER_NAME = $FORM.elements.username;
const $SAVE_BTN = document.querySelector('#save-btn');
const $CANCEL_BTN = document.querySelector('#cancel-btn');


$FORM.addEventListener("submit", checkControl);

$ADD_BTN.addEventListener('click', () => {
addClass($FORM_POPUP, 'open');
addClass($POPUP_MAKE, 'popup-make_open');
document.querySelector('body').style.overflow = 'hidden';
});


$BTN_CLOES.addEventListener('click', () => {
  removeClass($FORM_POPUP, 'open');
  removeClass($POPUP_MAKE, 'popup-make_open');
  document.querySelector('body').style.overflow = 'scroll';
});

$CANCEL_BTN.addEventListener('click', () => {
  clearValue([$USER_TITLE, $DESCRIPTION, $USER_NAME]);
});


function checkControl(e) {
  e.preventDefault();
  
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
      false,
    );
    
    controlKeeper.push(userData);

    clearValue([$USER_TITLE, $DESCRIPTION, $USER_NAME]);

    removeClass($FORM_POPUP, 'open');
    removeClass($POPUP_MAKE, 'popup-make_open');
    

    let controls = document.querySelectorAll('.form-control');
    for(let el of controls) {
      removeClass(el, 'success');
    }
  } else {
    check.splice(0);
  }
   $SAVE_BTN.addEventListener('click', updateLocal(controlKeeper));

   createItem(controlKeeper);
}
createItem(controlKeeper);

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

function createItem(controlKeeper) {
  document.querySelector('.item').innerHTML = "";

  controlKeeper.forEach((element, idx) => {
      document.querySelector('.item').innerHTML += render(element, idx, $CURRENT_DATA);
  });
  let chBtns = document.querySelectorAll(".change");
  let delBtns = document.querySelectorAll(".delete");

  //moveItem(chBtns);
  removeMake(delBtns);
}
function createItemIn(controlInpr) {
  document.querySelector('#item-progress').innerHTML = "";

  controlInpr.forEach((element, idx) => {
      document.querySelector('#item-progress').innerHTML += renderInprogress(element, idx);
  });

}

// function moveItem(chBtns) {
//   chBtns.forEach((btn) => {
//     btn.addEventListener("click", (e) => {
//       controlKeeper.forEach((obj, idx) => {
//         if(e.target.parentElement.dataset.taskId == idx){
//           obj.status = true;
//           controlInpr.push(obj);
//           controlKeeper.splice(idx, 1);
//           e.target.parentElement.remove();
//           updateLocalInprogress(controlInpr);
//           //createItemIn(controlInpr);
//         }
//       })
//       console.log(controlKeeper);
//       console.log(controlInpr);
//     })
//   })
// }
function removeMake(delBtns) {
  delBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      controlKeeper.forEach((obj, idx) => {
        if(e.target.parentElement.dataset.taskId == idx){
          controlKeeper.splice(idx, 1);
          e.target.parentElement.remove();
          updateLocal(controlKeeper);
          
        }
      })
    })
  })
}

}
init();