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
var script = document.createElement('script')
script.src = 'jquery-3.6.4.js'
document.getElementsByTagName('head')[0].appendChild(script)

$(function () {
    $("#format").hide()
    $("#passwordForm").on('click', function () {
        $("#format").show()
        $("#format").css({'color':'teal'})
        $("#password-eye").css({"top": "-83px"})
    })
    $("#passwordForm").mouseleave(function () {
        $("#format").hide()
        $("#password-eye").css({"top": "-35px", "left": "53%"})
    })
    $("#acct-btn-agent").on('click', function () {
        $("#acct-btn-agent").toggleClass("acct-btn-select")
        event.preventDefault()
    })
    $("#acct-btn-personal").on('click', function () {
        $("#acct-btn-personal").toggleClass("acct-btn-select")
        event.preventDefault()
    })
    $('#acct-btn-agent').css('margin-right', '15px')
    $("#password-eye").click(function () {
        const type = $("#passwordForm").attr('type') === 'password' ? 'text' : 'password';
        $("#passwordForm").attr('type', type)
        const src = $(this).attr('src') === 'images/eye-hide.png' ? 'images/eye-show.png' : 'images/eye-hide.png';
        $(this).attr('src', src)
    })
})