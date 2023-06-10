let menu = document.getElementById('menu-img')
let navbar = document.getElementById('navbar')
let closeImg = document.getElementById('close-img')
let amountEl = document.getElementById('amount')
let phoneEl = document.getElementById('phone')

menu.addEventListener('click', function () {
    navbar.style.right = '0px'
})
closeImg.addEventListener('click', function () {
    navbar.style.right = '-500px'
})
function priceInput() {
    let priceBtnA = document.getElementById('price-btn-1')
    let priceBtnB = document.getElementById('price-btn-2')
    let priceBtnC = document.getElementById('price-btn-3')
    let priceBtnD = document.getElementById('price-btn-4')

    priceBtnA.onclick = function () {
        amountEl.value = priceBtnA.textContent
        event.preventDefault()
    }
    priceBtnB.onclick = function () {
        amountEl.value = priceBtnB.textContent
        event.preventDefault()
    }
    priceBtnC.onclick = function () {
        amountEl.value = priceBtnC.textContent
        event.preventDefault()
    }
    priceBtnD.onclick = function () {
        amountEl.value = priceBtnD.textContent
        event.preventDefault()
    }
}