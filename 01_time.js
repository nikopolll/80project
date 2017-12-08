setInterval(function() {
 let timerr = new Date();
 let day = document.getElementById('dzien');
 let hour = document.getElementById('godzina');
 let days = ["Niedziela", "Poniedziałek", "Wtorek", "Środa", "Czwartek", "Piątek", "Sobota"];

 let showDay = function() {
  let dDay = timerr.getDay();
  day.innerHTML = days[dDay];
 };
 showDay();

 let showHour = function() {
  hour.innerHTML = (timerr.getHours() + 1) + ":" + ((timerr.getMinutes() < 10 ? '0' :'')+timerr.getMinutes()) + ":" + ((timerr.getSeconds() < 10 ? '0' : '') + timerr.getSeconds());
 };
 showHour();
}, 1000)();
