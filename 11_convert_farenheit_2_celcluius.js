(function() {
 let cel = document.getElementById('cel');
 let far = document.getElementById('far');
 let kel = document.getElementById('kel')

 cel.addEventListener('input', function() { //celcius
  far.value = (this.value * 9 / 5) + 32;
  kel.value = parseInt(this.value) + 273.15;
 });

 far.addEventListener('input', function() { // farenheit
  cel.value = (this.value - 32) * 5 / 9;
  kel.value = (parseInt(this.value) + 459.67) * 5 / 9;
 });

 kel.addEventListener('input', function() { //kelvin
  cel.value = parseInt(this.value) - 273.15;
  far.value = parseInt(this.value) * 9 / 5 - 459.67;
 });

})();
