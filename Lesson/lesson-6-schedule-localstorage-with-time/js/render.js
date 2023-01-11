function render(lesson, count) {
  return `
    <li class="day-item__lesson"><span>${count}</span> ${lesson[count]}</li>
  `;
}

function renderTime(el, key) {
  return `
  <div class="lesson">
  <span class="lesson__item"><span class="lesson__item-count">${key}</span> урок</span> <span
    class="lesson__start">Начало: <span class="lesson__start-number">${el[key]["start"]}</span></span> <span
    class="lesson__end">Конец: <span class="lesson__end-number">${el[key]["end"]}</span></span>
</div>
  `;
}

export {render, renderTime}