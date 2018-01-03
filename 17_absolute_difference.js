(function() {
 let num = document.querySelector(".num");
 let wynik = document.querySelector(".wynik");


 let roz = function() {
  let podana = parseInt(num.value);
  if (podana <= 19) {
   return (19 - podana);
  } else {
   return (podana - 19) * 3;
  }
 };

 num.addEventListener('input', function() {
  wynik.innerHTML = roz();
 });
})();
