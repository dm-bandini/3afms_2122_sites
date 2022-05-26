function calcola_eta() {
  
  var birthYear = document.getElementById("anno_nascita").value; // LEGGO DAL HTML
  
  var age = 2022 - birthYear; // CALCOLO
  
  var risultato = document.getElementById("risultato"); // SCRIVO SULL'HTML 
  risultato.value = age; 

}
