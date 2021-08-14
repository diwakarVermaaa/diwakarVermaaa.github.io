const hamBtn = document.querySelector(".ham-btn");
const nav = document.querySelector(".nav");

hamBtn.addEventListener("click", () => {
  nav.classList.toggle("dis");
  document.body.classList.toggle("overflow");
});
const day = document.querySelector(".day");

day.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  day.style.display = "none";
  night.style.display = "block";
});
const night = document.querySelector(".night");

night.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  night.style.display = "none";
  day.style.display = "block";
});

const preloader = document.querySelector(".pre-loader");

window.addEventListener("load", () => (preloader.style.display = "none"));


const conbtn = document.querySelector(".conbtn");
const navBtn1 = document.querySelector(".nav-btn1");
const navBtn2 = document.querySelector(".nav-btn2");
const navBtn5 = document.querySelector(".nav-btn5");

const about = document.querySelector(".row");
const skills = document.querySelector(".skills");
const contact = document.querySelector(".contact");
navBtn2.addEventListener('click', () => {
  about.classList.remove("sec-dis")
  contact.classList.remove("sec-dis")
  navBtn5.classList.remove("active")
  navBtn1.classList.remove("active")
  navBtn2.classList.add("active")
  skills.classList.add("sec-dis")
  nav.classList.toggle("dis");
  document.body.classList.toggle("overflow");
})
navBtn1.addEventListener('click', () => {
  about.classList.add("sec-dis")
  navBtn1.classList.add("active")
  contact.classList.remove("sec-dis")
  navBtn5.classList.remove("active")
  navBtn2.classList.remove("active")
  skills.classList.remove("sec-dis")
  nav.classList.toggle("dis");
  document.body.classList.toggle("overflow");

})
navBtn5.addEventListener('click', () => {
  about.classList.remove("sec-dis")
  navBtn1.classList.remove("active")
  contact.classList.add("sec-dis")
  navBtn5.classList.add("active")
  navBtn2.classList.remove("active")
  skills.classList.remove("sec-dis")
  nav.classList.toggle("dis");
  document.body.classList.toggle("overflow");

})
conbtn.addEventListener('click', () => {
  about.classList.remove("sec-dis")
  navBtn1.classList.remove("active")
  contact.classList.add("sec-dis")
  navBtn5.classList.add("active")
})