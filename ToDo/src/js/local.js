function updateLocal(controlKeeper) {
  localStorage.setItem("makeToDo", JSON.stringify(controlKeeper));
}
function updateLocalInprogress(controlKeeper) {
  localStorage.setItem("progress", JSON.stringify(controlKeeper));
}
function updateLocalDone(controlKeeper) {
  localStorage.setItem("done", JSON.stringify(controlKeeper));
}

export { updateLocal, updateLocalInprogress, updateLocalDone };