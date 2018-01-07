(function() {
 let num1 = document.querySelector(".num1");
 let num2 = document.querySelector(".num2");
 let wynik = document.querySelector(".wynik");


 let equal = function() {
  let n1 = parseInt(num1.value);
  let n2 = parseInt(num2.value);
  if((n1 > 0 && n2 < 0)||(n1 < 0 && n2 > 0)){
   return "Jedna liczba jest ujemna druga dodatnia";
  } else if(n1 > 0 && n2 > 0){
   return "Obie liczby są dodatnie";
  } else {
   return "Obie liczby są ujemne";
  }
 };

 num2.addEventListener('input', function() {
  wynik.innerHTML = equal();
 });
})();
