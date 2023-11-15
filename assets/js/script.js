const mobile = document.querySelector(".header__mobile");
const mobileTitle = mobile.querySelector(".title");
const desctop = document.querySelector(".header__desctop");
const desctopTitle = desctop.querySelector(".title");

let addTitlt = () => {
  const descr = mobileTitle.querySelector(".title__descr");
  const desctopDescr = desctopTitle.querySelector(".title__descr");
  let width = window.innerWidth;

  if (width < 1119) {
    if (!descr) {
      mobileTitle.insertAdjacentHTML(
        "afterbegin",
        '<h1 class="title__descr">Услуги и сервисы</h1>'
      );

      desctopTitle.insertAdjacentHTML("afterbegin", "");
    }
  } /* (width >= 1119) */ else {
    if (!desctopDescr) {
      desctopTitle.insertAdjacentHTML(
        "afterbegin",
        '<h1 class="title__descr">Услуги и сервисы</h1>'
      );
      mobileTitle.insertAdjacentHTML("afterbegin", "");
    }
  }
};
document.addEventListener("DOMContentLoaded", addTitlt);
window.addEventListener("resize", addTitlt);
