(function() {
 let wyn = document.getElementById('wyn');
 let num1 = document.getElementById('num1');
 let num2 = document.getElementById('num2');
 let divide = document.getElementById('r1');
 let multiply = document.getElementById('r2');
 let button= document.getElementById('buton');
 button.addEventListener('click',  function() {
  if (divide.checked) {
   wyn.innerHTML = num1.value / num2.value;
  } else if (multiply.checked) {
   wyn.innerHTML = num1.value * num2.value;
  }
 });
})();
