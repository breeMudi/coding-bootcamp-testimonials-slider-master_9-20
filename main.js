// const curr = '.tanya'

function next(now){
    const tanya = document.querySelector(`.${now[0]}`)
    const john = document.querySelector(`.${now[1]}`)
    tanya.style.left = '1500px'
    john.style.left = '0px'
}

function prev(now){
    const tanya = document.querySelector(`.${now[0]}`)
    const john = document.querySelector(`.${now[1]}`)
    tanya.style.left = '1500px'
    john.style.left = '0px'
}
