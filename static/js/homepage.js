// Change paragraph color function
var p1 = document.getElementById('p');
var p1revert = p1.innerHTML;

function changeColor() {
  p1.style.color = 'green';
  p1.innerHTML = p1.innerHTML + ' <--- Now Edited by JavaScript';
  console.log('Change Color Function Activated');
}

function revert() {
  p1.style.color = 'black';
  p1.innerHTML = p1revert;
  console.log('Revert Function Activated');
}

// Contact Info Scale Fucntionality
function scaleContactInfo() {
  var scale = document.getElementById('scale');
  scale.classList.toggle('scale-in');
  console.log('Contact Info Scaled');
}

// Parallax Functionality
document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.parallax');
  var instances = M.Parallax.init(elems, {});
  console.log('Parallax Initialized');
});
