let dataContainer = document.getElementById('dataContainer')
function changeOptions() {
    var dataNetwork = document.getElementById("data-network");
    var dataType = document.getElementById("data-type");
    var dataPlan = document.getElementById("data-plan");

    dataNetwork.addEventListener("change", function () {
        var selectedNetwork = dataNetwork.value;

        // Clear data type and data plan options
        dataType.innerHTML = '<option value="">Select Type</option>';
        dataPlan.innerHTML = '<option value="">Select Plan</option>';

        if (selectedNetwork === "mtn") {
            dataType.innerHTML += '<option value="mtn-sme">SME</option>';
            dataType.innerHTML += '<option value="mtn-corporate">Corporate</option>';
        } else if (selectedNetwork === "airtel") {
            dataType.innerHTML += '<option value="airtel-corporate">Corporate</option>';
        } else if (selectedNetwork === "glo") {
            dataType.innerHTML += '<option value="glo-corporate">Corporate</option>';
        } else if (selectedNetwork === "9mobile") {
            dataType.innerHTML += '<option value="9mobile-sme">SME</option>';
            dataType.innerHTML += '<option value="9mobile-gifting">Gifting</option>';
        }
    });

    dataType.addEventListener("change", function () {
        var selectedType = dataType.value;

        // Clear data plan options
        dataPlan.innerHTML = '<option value="">Select Plan</option>';

        if (selectedType === "mtn-sme") {
            dataPlan.innerHTML += '<option value="">500MB (N120) (30 Days Validity)</option>';
            dataPlan.innerHTML += '<option value="">1GB (N235) (30 Days Validity)</option>';
            dataPlan.innerHTML += '<option value="">2GB (N470) (30 Days Validity)</option>';
            dataPlan.innerHTML += '<option value="">3GB (N705) (30 Days Validity)</option>';
            dataPlan.innerHTML += '<option value="">5GB (N1175) (30 Days Validity)</option>';
            dataPlan.innerHTML += '<option value="">10GB (N2350) (30 Days Validity)</option>';
        } else if (selectedType === "mtn-corporate") {
            dataPlan.innerHTML += '<option value="">500MB (N125) (30 Days Validity)</option>';
            dataPlan.innerHTML += '<option value="">1GB (N250) (30 Days Validity)</option>';
            dataPlan.innerHTML += '<option value="">2GB (N500) (30 Days Validity)</option>';
            dataPlan.innerHTML += '<option value="">3GB (N750) (30 Days Validity)</option>';
            dataPlan.innerHTML += '<option value="">5GB (N1250) (30 Days Validity)</option>';
            dataPlan.innerHTML += '<option value="">10GB (N2500) (30 Days Validity)</option>';
        } else if (selectedType === "airtel-corporate") {
            dataPlan.innerHTML += '<option value="">100MB (N60) (30 Days Validity)</option>';
            dataPlan.innerHTML += '<option value="">300MB (N110) (30 Days Validity)</option>';
            dataPlan.innerHTML += '<option value="">500MB (N150) (30 Days Validity)</option>';
            dataPlan.innerHTML += '<option value="">1GB (N300) (30 Days Validity)</option>';
            dataPlan.innerHTML += '<option value="">2GB (N600) (30 Days Validity)</option>';
            dataPlan.innerHTML += '<option value="">5GB (N1500) (30 Days Validity)</option>';
        } else if (selectedType === "glo-corporate") {
            dataPlan.innerHTML += '<option value="">1GB (N240) (30 Days Validity)</option>';
            dataPlan.innerHTML += '<option value="">2GB (N480) (30 Days Validity)</option>';
            dataPlan.innerHTML += '<option value="">4.5GB (N960) (30 Days Validity)</option>';
            dataPlan.innerHTML += '<option value="">7.2GB (N1440) (30 Days Validity)</option>';
            dataPlan.innerHTML += '<option value="">8.75GB (N1740) (30 Days Validity)</option>';
            dataPlan.innerHTML += '<option value="">12.5GB (N2400) (30 Days Validity)</option>';
        } else if (selectedType === "9mobile-sme") {
            dataPlan.innerHTML += '<option value="">500MB (N150) (30 Days Validity)</option>';
            dataPlan.innerHTML += '<option value="">1GB (N300) (30 Days Validity)</option>';
            dataPlan.innerHTML += '<option value="">2GB (N600) (30 Days Validity)</option>';
            dataPlan.innerHTML += '<option value="">3GB (N900) (30 Days Validity)</option>';
            dataPlan.innerHTML += '<option value="">5GB (N1500) (30 Days Validity)</option>';
            dataPlan.innerHTML += '<option value="">10GB (N3000) (30 Days Validity)</option>';
        } else if (selectedType === "9mobile-gifting") {
            dataPlan.innerHTML += '<option value="">1GB (N500) (30 Days Validity)</option>';
            dataPlan.innerHTML += '<option value="">2GB (N1000) (30 Days Validity)</option>';
            dataPlan.innerHTML += '<option value="">3GB (N1500) (30 Days Validity)</option>';
            dataPlan.innerHTML += '<option value="">5GB (N2500) (30 Days Validity)</option>';
            dataPlan.innerHTML += '<option value="">10GB (N5000) (30 Days Validity)</option>';
        }
    });
};
let proceedData = document.getElementById('proceed-data')
proceedData.onclick = function () {
    if (phoneEl.value !== "") {
        var result = confirm('Do you want to proceed?')
        if (result === false) {
            event.preventDefault()
            dataContainer.style.display = 'none'
        }
        event.preventDefault()
        dataContainer.style.display = 'initial'
        let closePop = document.getElementById('close-pop')
        closePop.onclick  = function () {
            popContainer.style.display = 'none'
        }
        phoneEl.value = ""
        const displayTime = document.getElementById('time')
        let receiptPlan = document.getElementById('receipt-plan')
        let receiptPhone = document.getElementById('receipt-phone')
        let receiptNumber = document.getElementById('receipt-number')
        let receiptNetwork = document.getElementById('receipt-network')
        function showReceipt() {
            let time = new Date()
            displayTime.innerText = `${time.toLocaleDateString('en-US', {hour12: false})} ${time.toLocaleTimeString('en-US', {hour12: true})}`
            receiptPlan.innerText = document.getElementById('data-plan').value
            receiptPhone.innerText = phoneEl.value
            receiptNetwork.innerText = document.getElementById('network').value
            receiptNumber.innerText = Math.floor(Math.random()*999999999999)
        }
        showReceipt()
    } else {
        alert("Please fill out all fields")
        event.preventDefault()
    }
}