(function() {
 let butt = document.getElementById('buton');
 let chceck = document.getElementById('chk');

 function makeVar() {
  let innput = document.getElementById('inn');
  console.log(window[innput.value] = 120);
  
 }
 butt.addEventListener('click', makeVar);

})();
