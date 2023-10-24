'use strict'

let elNavBtn = document.getElementById('nav-btn')
let elNavBtn2 = document.getElementById('nav-btn2')
let elInnerModal = document.getElementById('inner-modal')
let elNavWrapper = document.getElementById('wrapper')
let elNavLink = document.querySelectorAll('.nav-link')


elNavLink.forEach(function(element) { 

    element.addEventListener('click', function(){

        elNavLink.forEach(function(item){
            item.classList.remove('active')
        })    
        element.classList.add('active')
    })

})
 




elNavBtn.addEventListener('click', function(){
    elInnerModal.style.left = '0'
    elNavWrapper.style.visibility = 'visible'
})


elNavBtn2.addEventListener('click', function(){
    elInnerModal.style.left = '-25%'
    elNavWrapper.style.visibility = 'hidden'
 
})


elNavWrapper.addEventListener('click', function(){
    elInnerModal.style.left = '-25%'
    elNavWrapper.style.visibility = 'hidden'

})
