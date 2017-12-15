(function(){
  let anyString = document.getElementById("tekst").innerText;
  setInterval(function() {
   let disply = document.getElementById("disply");
   let anyString1 = anyString.substring(anyString.length - 1);
   let nowystring = anyString1 + anyString.substring(0, anyString.length - 1);
   anyString = nowystring;
   disply.innerHTML = anyString;
  }, 100);
})();
