document.querySelector('.menu').addEventListener('click',()=>{
    document.querySelectorAll('.target').forEach((item)=>{
        item.classList.toggle('change')
    })
})

// To select all the Icons
const icons = document.querySelectorAll('.section-1-icons i') 

// To use this i in 'If' class Inorder to get the icons one by one
let i =1


//  SetInterval is a pre-def function 
setInterval (()=>{
    i++ 
    const icon = document.querySelector('.section-1-icons .change')
    icon.classList.remove('change')

    if(i>icons.length){
        icons[0].classList.add('change')
        i=1
    }else{
        icon.nextElementSibling.classList.add('change')
    }
},4000)

// If the value of i is greater than the icons array index value, Then the function will add "change" class to the first index of the icon array, and also set the i value to 1. else it will add the "change" class to the siblings, i.e) to the next element in the array


