const data = new Date();
const day = ('0' + data.getDate()).slice(-2);
const month = ('0' + data.getMonth() + 1).slice(-2);
const year = data.getFullYear();

const $CURRENT_DATA = document.querySelector('.current__data');
$CURRENT_DATA.textContent = `${day}.${month}.${year}`;

let password = '1234';

const $HEADER = document.querySelector('#header');
const $LOGO = $HEADER.querySelector('.logo');
const $USER_PASSWORD = $HEADER.querySelector('.userPassword');
const $LOGIN_BTN = $HEADER.querySelector('.login-btn');
const $ADMIN_PANEL = document.querySelector('.admin');

const showAdmin = () =>{
if($USER_PASSWORD.value === password){
  $ADMIN_PANEL.classList.toggle('active');
  $LOGIN_BTN.textContent = "Log out";
  $USER_PASSWORD.style.display = "none";
  $LOGO.textContent = "Administration Panel";
  $HEADER.style.backgroundColor = '#d8d7d7';
} else if(!$ADMIN_PANEL.classList.contains('active')){
  $ADMIN_PANEL.classList.toggle('active');
  $LOGIN_BTN.textContent = "Log in";
  $USER_PASSWORD.style.display = "block";
  $LOGO.textContent = "Gas Station";
  $HEADER.style.backgroundColor = 'transparent'; 
} else if($USER_PASSWORD.value.length >= 1 && $USER_PASSWORD.value.length < 4){
  alert("Не достаточно символов");
} else if($USER_PASSWORD.value.length == ""){
  alert("Введите пароль");
} else if($USER_PASSWORD.value.length !== password){
  alert("Не верный пароль")
}
$USER_PASSWORD.value = "";
};

const $ADMIN_BTN = document.querySelectorAll('.adminBtn');
const $GAS_CARD_INPUT = document.querySelectorAll('.gas-card__input');
const $ADMIN_ITEM_INPUT = document.querySelectorAll('.adminItemInput');


let admin = [...$ADMIN_ITEM_INPUT];
let gasInput = [...$GAS_CARD_INPUT];
let input = admin.concat(gasInput);



$ADMIN_BTN.forEach((elem) =>{
  elem.addEventListener('click', (e) =>{
    e.target.classList.toggle('yellow');
    input.forEach((item) =>{
      if(e.target.dataset.btn == item.dataset.admin){
        for(let i = 0; i < $GAS_CARD_INPUT.length; i++){
          if($GAS_CARD_INPUT[i].dataset.gas == item.dataset.admin){
            $GAS_CARD_INPUT[i].setAttribute('data-cost', item.value);
          }
        }
      }
    })
  });
});

const $CARD_BTN = document.querySelectorAll('.card-btn');
const $COST_OUT = document.querySelector('.cost-out');
const $COST_NAME = document.querySelector('.cost-name');

$CARD_BTN.forEach((elem) =>{
  elem.addEventListener('click', (e) =>{
    for(let i = 0; i < $GAS_CARD_INPUT.length; i++){
      if(e.target.dataset.result == $GAS_CARD_INPUT[i].dataset.gas){
        let result = $GAS_CARD_INPUT[i].value * $GAS_CARD_INPUT[i].dataset.cost;
        $COST_OUT.textContent = result.toFixed(2);
        $COST_NAME.textContent = $GAS_CARD_INPUT[i].dataset.id;
      }
    }
  })
})

$LOGIN_BTN.addEventListener('click', showAdmin);

