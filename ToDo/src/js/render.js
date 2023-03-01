export function render(el) {
return `
<div class="task">
<div class="wrap-item">
<div class="logo-item">ToDo</div>
<div class="current-data__item">11.01.2023</div>
</div>
<div class="item-title">${el.name}</div>
<div class="description-item"><p>${el.description}</p></div>
<div class="user-name__item">
  <div class="user">${el.user}</div>
  <div class="item-action">
    <button class="inprogress">In progress</button>
    <button class="delete">Delete</button>
  </div>
</div>
</div> 
`;
}

