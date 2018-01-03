(function() {
 let num1 = document.querySelector(".num1");
 let num2 = document.querySelector(".num2");
 let wynik = document.querySelector(".wynik");


 let equal = function() {
  let n1 = parseInt(num1.value);
  let n2 = parseInt(num2.value);
  if (n1 === 50 || n2 === 50 || (n1 + n2) === 50) {
   return "Prawda! Jest 50";
  } else {
   return "Nie ma 50";
  }
 };

 num2.addEventListener('input', function() {
  wynik.innerHTML = equal();
 });
})();
