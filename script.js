const modal = document.getElementById('modal')
const modalCloseBtn = document.getElementById('modal-close-btn')
const consentForm = document.getElementById('consent-form')
const modalText = document.getElementById('modal-text')

setTimeout(function(){
  modalContainer.style.display = 'inline'
}, 500)

setTimeout(function(){
  modal.style.display = 'inline'
}, 500)

modalCloseBtn.addEventListener('click', function(){
  modal.style.display = 'none'
})

modalCloseBtn.addEventListener('click', function(){
  modalContainer.style.display = 'none'
})

consentForm.addEventListener('submit', function(e){
    e.preventDefault()

    const consentFormData = new FormData(consentForm)
    const fullName = consentFormData.get('fullName')

    modalText.innerHTML = `
    <div class="modal-inner-loading">
        <img src="img/loading.svg" class="loading">
        <span id="upload-text">Uploading your data...</span>
    </div>` 
    
    setTimeout(function(){
        document.getElementById('upload-text').innerText = `
        Please wait...`
    }, 1500)
    
    setTimeout(function(){
        document.getElementById('modal-inner').innerHTML = `
        <h2>Thank you <span class="modal-display-name">${fullName}</span></h2><br>
        <p>Wish you all the best.</p>
        <div class="thank-gif">
            <img src="img/thanks.gif" width=100%>
        </div>
    `
    modalCloseBtn.disabled = false
    }, 3000)
  })


      