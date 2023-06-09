let proceedBtn = document.getElementById('proceed-btn')
proceedBtn.addEventListener('click', function () {
    if (phoneEl.value !== "" && amountEl.value !== "") {
        var result = confirm('Do you want to proceed?')
        if (result === false) {
            event.preventDefault()
            popContainer.style.display = 'none'
        }
        let popContainer = document.getElementById('popContainer')
        event.preventDefault() 
        const displayTime = document.getElementById('time')
        let receiptPrice = document.getElementById('receipt-price')
        let receiptPhone = document.getElementById('receipt-phone')
        let receiptNumber = document.getElementById('receipt-number')
        let receiptNetwork = document.getElementById('receipt-network')
        function showReceipt() {
            let time = new Date()
            displayTime.innerText = `${time.toLocaleDateString('en-US', {hour12: false})} ${time.toLocaleTimeString('en-US', {hour12: true})}`
            receiptPrice.innerText = "#" + amountEl.value
            receiptPhone.innerText = phoneEl.value
            receiptNetwork.innerText = document.getElementById('network').value
            receiptNumber.innerText = Math.floor(Math.random()*999999999999)
        }
        showReceipt()
        popContainer.style.display = 'initial'
        let closePop = document.getElementById('close-pop')
        closePop.onclick  = function () {
            popContainer.style.display = 'none'
        }
        phoneEl.value = ""
        amountEl.value = ""
    } else {
        alert('Please fill out all fields')
        event.preventDefault()
    }
})