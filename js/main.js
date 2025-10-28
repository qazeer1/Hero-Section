// main.js - small behavior for the static landing
document.getElementById('year').innerText = new Date().getFullYear();
window.hhEvent = function(event, label){ console.log('hhEvent', event, label); };
(function(){
  const f = document.querySelector('form[name="signup"]');
  if(!f) return;
  f.addEventListener('submit', function(){ try{ window.hhEvent('signup','submitted'); }catch(e){} });
})();
