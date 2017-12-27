(function () {
 let buton = document.getElementById('buton');
 let urlH = document.querySelector(".wynik h1");
 buton.addEventListener('click', function(){
  urlH.innerHTML = document.URL;
 });

})();
