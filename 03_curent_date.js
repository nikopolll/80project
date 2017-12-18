(function(){
let show = document.getElementById('data');
let calendar = new Date();
let data = {
 spacer: function() { //losowo wyświetla / albo - między cyframi korzystając z właściwości rand (wiersz:89)
   if ( this.rand === 0) {
    return "/";
   } else {
    return "-";
   }
 },
 rand: Math.floor(Math.random() * 100 / 10) % 2,
 day: calendar.getDate(),
 month: calendar.getMonth() + 1,
 year: calendar.getFullYear()

};

show.innerHTML = "Dzisiaj jest: " + data.day + data.spacer() + data.month + data.spacer() + data.year;
})();
