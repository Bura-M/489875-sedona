 var button = document.querySelector(".search__btn");
 var popup = document.querySelector(".modal-login");
 var close = popup.querySelector(".catalog__btn");
 var form = popup.querySelector("form");
 var arrival = popup.querySelector("[name=arrival]");
 var departure = popup.querySelector("[name=departure]");
 var adults = popup.querySelector("[name=adults]");
 var adultsStored = localStorage.getItem("adults");
 var childrenStored = localStorage.getItem("children");

 button.addEventListener("click", function(evt) {
   evt.preventDefault()
   popup.classList.add("modal-show");
   login.focus();
 });

 close.addEventListener("click", function(evt) {
   evt.preventDefault();
   popup.classList.remove("modal-show");
   popup.classList.remove("modal-error");
 });

 form.addEventListener("submit", function(evt) {
   if (!arrival.value || !departure.value || !adults.value) {
     evt.preventDefault();
     popup.classList.remove("modal-error");
     popup.offsetWidth = popup.offsetWidth;
     popup.classList.add("modal-error");
     console.log("Нужно ввести логин и пароль");
   } else {
     localStorage.setItem("adults", adults.value);
     localStorage.setItem("children", children.value);
   }
 });

 window.addEventListener("keydown", function(evt) {
   if (evt.keyCode === 27) {
     if (popup.classList.contains("modal-show")) {
       popup.classList.remove("modal-show");
       popup.classList.remove("modal-error");
     }
   }
 });
