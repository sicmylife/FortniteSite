const open = document.querySelector('.open')
const close = document.querySelector('.close')
const nav = document.querySelector('.nav')



open.onclick = function(e) {
    e.preventDefault()
    nav.classList.add('show')
    

}

close.onclick = function(e) {
    e.preventDefault()
    nav.classList.remove('show')
    


}



// function abrir() {
// if(nav.contain('show')){
//     nav.classList.remove('show')
    
// }

// nav.classList.add('show')

// }


// open.addEventListener('click',abrir);