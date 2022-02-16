const menuBtn = document.getElementById('menuBtn')
const menu = document.getElementById('menu')
const exitBtn = document.getElementById('closeMenu')

menuBtn.addEventListener('click',()=>{
    if(menu.classList.contains('show-menu')){
        menu.classList.remove('show-menu')
    }else{
    menu.classList.add('show-menu')
    }
})

exitBtn.addEventListener('click',()=>{
    menu.classList.remove('show-menu')
})