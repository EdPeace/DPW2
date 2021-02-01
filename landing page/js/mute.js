var aud = document.getElementById("sample");
var btn = document.getElementById("btnmute");
var btn1 = document.getElementById("btnunmute");
function enableMute() { 
  aud.muted = true;
  btn.style.display="none";
  btn1.style.display="block";
} 

function disableMute() { 
  aud.muted = false;
  btn.style.display="block";
  btn1.style.display="none";
} 
