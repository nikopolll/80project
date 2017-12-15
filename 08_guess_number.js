(function() {
  let draw = Math.floor(Math.random() * (10 - 1 + 1) + 1);
  let button = document.getElementById('buton');
  let result = document.getElementById('wylos');
  let int = document.getElementById('int');
  console.log(draw);

  let comp = function() {
   if (parseInt(int.value) === draw) {
    result.innerHTML = "Zgadłeś. Dobra robota!";
    drawNew();
   }
    else if (parseInt(int.value) > 10 || parseInt(int.value) < 1) {
     result.innerHTML = "No nie. Czytaj zasady. Mają być liczby od 1 do 10";
     drawNew();
    } else {
     result.innerHTML = "To nie ten numer";
    }
   };
   button.addEventListener('click', comp);

   let drawNew = function() {
    button.innerHTML = "Losuj nową liczbę";
    button.addEventListener('click', function() {
     window.location.reload(true);
    });
   };
  })();
