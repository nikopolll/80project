(function() {
 let wynik = document.getElementById('day');
 let fragment = document.createDocumentFragment(); //tworzy fragment, czyli node-rodzic
 for (let year = 2014; year <= 2100; year++) {
  let dateNew = new Date(year, 0, 1);
  let day = dateNew.getDay();
  if (day === 0) {
   let p = document.createElement('p'); //tworzy element p
   p.textContent = "1 stycznia " + year + " to niedziela"; // w którym wstawia teskt
   fragment.appendChild(p); // dodaje podrzędne elementy do Fragment
   wynik.appendChild(fragment); //przekazuje zawartość fragmentu do diva "day"
  };
 };
})();
