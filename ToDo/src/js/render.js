 function render(el, idx, $CURRENT_DATA) {
return `
<div class="task" data-taskId="${idx}">
  <div class="wrap-item">
    <div class="logo-item">ToDo</div>
    <div class="current-data__item">${$CURRENT_DATA.textContent}</div>
  </div>
  <div class="item-title">${el.name}</div>
  <div class="description-item"><p>${el.description}</p></div>
  <div class="user-name__item">
    <div class="user">${el.user}</div>
    <div class="item-action">
      <button type="button" class="change">In progress</button>
      <button type="button" class="delete">Delete</button>
    </div>
  </div>
</div> 
`;
}

 function renderInprogress (el, idx) {
  return
`<div class="task" data-taskId="${idx}">
  <div class="wrap-item">
  <div class="logo-item">ToDo</div>
  <div class="current-data__item">06.03.2013</div>
</div>
<div class="item-title">${el.name}</div>
<div class="description-item"><p>${el.description}</p></div>
<div class="user-name__item">
  <div class="user">${el.user}</div>
  <div class="item-action">
    <button type="button" class="change">Make to do</button>
    <button type="button" class="change">Done</button>
    <button type="button" class="delete">Delete</button>
  </div>
</div>
</div> 
`;
}

 function renderDone (el, idx) {
  return
  `<div class="task" data-taskId="${idx}">
  <div class="wrap-item">
  <div class="logo-item">ToDo</div>
  <div class="current-data__item">06.03.2013</div>
  </div>
  <div class="item-title">${el.name}</div>
  <div class="description-item"><p>${el.description}</p></div>
  <div class="user-name__item">
    <div class="user">${el.user}</div>
    <div class="item-action">
      <button type="button" class="inprogress">In progress</button>
      <button type="button" class="delete">Delete</button>
    </div>
  </div>
  </div> 
  `;
  }

export { render, renderInprogress, renderDone };