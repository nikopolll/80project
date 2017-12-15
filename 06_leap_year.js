(function() {
 let button = document.getElementById('buton');
 let sprawdzony = document.getElementById('sprawdzony');
 button.addEventListener('click', test);

 function test() {
  let rok = parseInt(document.getElementById('rok').value);
  if (isNaN(rok)) {
   sprawdzony.innerHTML = "No, ale który rok mam sprawdzić?";
  } else if ((rok % 4 == 0) && (rok % 100 !== 0) || (rok % 400 == 0)) {
   sprawdzony.innerHTML = "Rok " + rok + " jest przestępny";
  } else {
   sprawdzony.innerHTML = "Rok " + rok + " nie jest przestępny";
  }
 };
})();
