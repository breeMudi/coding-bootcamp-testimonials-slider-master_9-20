const curr = '.tanya'

function next(){
    // name.style.left = 1500
    const tanya = document.querySelector(`${curr}`)
    const john = document.querySelector('.john')
    tanya.style.left = '1500px'
    john.style.left = '0px'
}

function prev(){
    // name.style.left = 1500
    const tanya = document.querySelector(`${curr}`)
    const john = document.querySelector('.john')
    tanya.style.left = '0px'
    john.style.left = '1500px'
}