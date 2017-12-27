(function() {
 let inputt = document.querySelector('.numer').value;
 let wynik = document.querySelector('.wynik');
 let buton = document.querySelector('.buton');

 let sprawdz = function() {
  if (parseInt(inputt) >= 13) {
   wynik.innerHTML = Math.abs(inputt - 13) * 2;
  } else {
   wynik.innerHTML = 13 - inputt;
  }
 };

 buton.addEventListener('click', sprawdz);
})();
