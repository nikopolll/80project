 (function() {
  let buton = document.getElementById('buton');
  buton.addEventListener('click', print);

  function print() {
   console.log("Kliknięty guzik!")
   window.print();
  }
 })();
