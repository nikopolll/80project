(function() {
 let num = document.querySelector(".num");
 let wynik = document.querySelector(".wynik");
 console.log("100: " + (Math.abs(100 - num.value)));
 console.log("400: " + (Math.abs(400 - num.value)));


 let roz = function(number) {
  if((Math.abs(100 - number) <= 20) || (Math.abs(400 - number) <= 20)){
    return "100-twoja liczba to: " + (Math.abs (100-num.value))+"<br> 400-twoja liczba to: "+ (Math.abs (400-num.value)) + "<br>Jedna z różnic jest mniejsza albo równa 20";
  } else{
   return "100-twoja liczba to: " + (Math.abs (100-num.value))+"<br> 400-twoja liczba to: "+ (Math.abs (400-num.value)) + "<br>Ani jedna ani  druga różnica nie miesci się w 20";
  }
 };

 num.addEventListener('input', function() {
  wynik.innerHTML = roz(num.value);
 });
})();
