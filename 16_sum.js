(function() {
 let num1 = document.querySelector(".num1");
 let num2 = document.querySelector(".num2");
 let wynik = document.querySelector(".wynik");

 let sum = function() {
  let suma = parseInt(num1.value) + parseInt(num2.value);
  if (num1.value === num2.value) {
   return suma * 3;
  } else {
   return suma;
  }
 };
 num2.addEventListener('input', function() {
  wynik.innerHTML = sum();
 })
})();
