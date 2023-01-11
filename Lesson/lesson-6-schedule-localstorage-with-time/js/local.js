function updateLocal(currentDay) {
  let data = JSON.stringify(currentDay);
  localStorage.setItem("key", data);
}
export {updateLocal}