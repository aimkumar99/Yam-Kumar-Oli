let x = document.getElementById('menu');
let mIcon = document.getElementById('menuIcon');
let cIcon = document.getElementById('closeIcon');


function openMenu(){
    x.style.display = 'block';
    cIcon.style.display = 'block';
    mIcon.style.display = 'none';
}
function closeMenu(){
    x.style.display = 'none';
    mIcon.style.display = 'block';
    cIcon.style.display = 'none';
}