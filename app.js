const X = document.querySelector('.x')
const openNav = document.getElementById('open-nav');
const closeNav = document.getElementById('close-nav')
const navLinks = document.getElementById('nav-links')
console.log(X)
X.addEventListener('click',(e)=>{
    console.log(e.target)

    if(e.target.id == 'open-nav'){
        e.target.style.display='none'
        closeNav.style.display='block'
        console.log('open')
        navLinks.style.display='block'
        
    }else if(e.target.id == 'close-nav'){
        e.target.style.display='none'
        openNav.style.display='block'
        navLinks.style.display='none'
    }
})