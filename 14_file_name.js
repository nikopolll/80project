(function(){
 let rozsz = document.getElementById('rozsz');
 let nazwa = document.getElementById('nazwa');
 nazwa.addEventListener('input', function(){
  rozsz.innerHTML = this.value.split(".").pop();
 });
})();
/*
Data binding pozwala na natychmiastowe wyświetlenie wartości która jest wpisana
po separatorze "."
*/
