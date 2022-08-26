var togglerBtn = document.querySelector("nav .togleBtn")
// console.log(navTogle)
togglerBtn.addEventListener('click',sidebarOpan)
function sidebarOpan(){
    let sidbars = document.querySelector('.sidbar')
    sidbars.classList.toggle("activeSidbar")
}