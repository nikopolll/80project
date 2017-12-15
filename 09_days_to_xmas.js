(function() {
 let calendar = new Date();
 let xDate = new Date(calendar.getFullYear(), 11, 25);
 let present = new Date (calendar.getFullYear(), calendar.getMonth(), calendar.getDate());
 let howMuch = document.getElementById("data");
 let diff = Math.ceil( Math.abs(xDate - present) / (1000 * 3600 * 24));
 howMuch.innerHTML =  "<p >" + "Dzisiaj jest: " + present.toLocaleDateString() + "</p> <p class=\"dni\"> Do świąt zostało: " + diff + " dni!";
})();
// jak zmniejszyć iloś zmiennych, doi przemyślenia przed wysłaniem
