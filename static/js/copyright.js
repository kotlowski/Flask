// JS for Copyright Date
document.addEventListener('DOMContentLoaded', function() {
  var footer = document.getElementById('copyright');
  footer.innerHTML = footer.innerHTML + ' ' + new Date().getFullYear();
});
