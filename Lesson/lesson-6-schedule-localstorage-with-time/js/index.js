let btn = document.querySelectorAll(".btn");
let saveBtn = document.querySelector("#nav__save");
let removeBtn = document.querySelector("#nav__delete");
let lessonOut = document.querySelector(".lesson__out");

import { lessonsTime } from "./days.js";

import { monday } from "./days.js";
import { tuesday } from "./days.js";
import { wednesday } from "./days.js";
import { thursday } from "./days.js";
import { friday } from "./days.js";

let lessons = [];
let currentDay = JSON.parse(localStorage.getItem("key")) || [];

removeBtn.addEventListener("click", () => {
  localStorage.removeItem("key");
  location.reload();
});

btn.forEach((btn) => {
  btn.addEventListener("click", function (e) {
    let currentBtn = e.target.getAttribute("id");
    this.classList.add("active");
    outLesson(currentBtn);
  }); 
});

lessons.push(monday, tuesday, wednesday, thursday, friday);

function getLesson(obj, out) {
  document.querySelector(out).innerHTML = "";

  obj.status = true;
  currentDay.push(obj);
  saveBtn.addEventListener("click", () => {
    alert("Успешно сохранено!");
    updateLocal(currentDay);
  });

  for (let key in obj) {
    if (typeof obj[key] == "string")
      document.querySelector(out).innerHTML += render(obj, key);
  }
}

let flag = false;
currentDay.forEach((obj) => {
  for (let key in obj) {
    if (typeof obj[key] == "string") {
      flag = true;
    }
  }
  if (flag == true) {
    outLessonLast(obj);
  }
});

function getLessonHistory(obj, out) {
  document.querySelector(out).innerHTML += "";

  let flag = false;
  for (let key in obj) {
    if (typeof obj[key] == "string")
      document.querySelector(out).innerHTML += render(obj, key);
  }
  if (flag == true) {
    outLessonLast(obj);
  }
}

function outLessonLast(obj) {
  switch (obj.day) {
    case 1:
      getLessonHistory(obj, '#monday');
      break;
    case 2:
      getLessonHistory(obj, '#tuesday');
      break;
    case 3:
      getLessonHistory(obj, '#wednesday');
      break;
    case 4:
      getLessonHistory(obj, '#thursday');
      break;
    case 5:
      getLessonHistory(obj, '#friday');
      break;  
  }
  // if (obj.day == 1) {
  //   getLessonHistory(obj, "#monday");
  // } else if (obj.day == 2) {
  //   getLessonHistory(obj, "#tuesday");
  // } else if (obj.day == 3) {
  //   getLessonHistory(obj, "#wednesday");
  // } else if (obj.day == 4) {
  //   getLessonHistory(obj, "#thursday");
  // } else if (obj.day == 5) {
  //   getLessonHistory(obj, "#friday");
  // }
}

function outLesson(btn) {
  switch (btn) {
    case "first":
      getLesson(lessons[0], "#monday");

      break;
    case "second":
      getLesson(lessons[1], "#tuesday");

      break;
    case "third":
      getLesson(lessons[2], "#wednesday");

      break;
    case "fourth":
      getLesson(lessons[3], "#thursday");

      break;
    case "fives":
      getLesson(lessons[4], "#friday");

      break;
  }
}

function showTimeLine(lessonsTime) {
  lessonsTime.forEach((el) => {
    for (let key in el) {
      lessonOut.innerHTML += renderTime(el, key);
      // console.log(key);
      // console.log(el[key]["start"]);
      // console.log(el[key]["end"]);
    }
  });
}
showTimeLine(lessonsTime);

import { render, renderTime } from "./render.js";

import { updateLocal } from "./local.js";
