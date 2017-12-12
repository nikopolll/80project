(function() {
 let numA = document.getElementById('a');
 let numB = document.getElementById('b');
 let numC = document.getElementById('c');
 let obliczone = document.getElementById('obliczone');
 let buton = document.getElementById('buton');
 buton.addEventListener('click', policz);
 console.log(parseInt(numA.value) + parseInt(numB.value) + parseInt(numC.value));

 function policz () {
  let a = parseInt(numA.value);
  let b = parseInt(numB.value);
  let c = parseInt(numC.value);
  let p = (a + b + c) / 2;
  let bigP = Math.sqrt(p *((p - a) * (p - b) * (p - c)));
  obliczone.innerHTML = bigP;
 }
})();
