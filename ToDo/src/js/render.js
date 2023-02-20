export function render(el, key) {
return `
<div class="item">
   <span class='item-make'><span class='data'>${$CURRENT_DATA}</span>ToDo</span></ br>
   <span class='item-title'>${el[key]}</span></ br>    
</div>
`;
}
