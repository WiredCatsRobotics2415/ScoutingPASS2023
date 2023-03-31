function setUpGoogleSheets() {
    const scriptURL = 'https://script.google.com/a/macros/westminster.net/s/AKfycbwhwjzdjZclSyxrfuODB4YLT75Ez1aanj1X659tb5rv2gYvReoPdCVVOlv_z0feeGz_og/exec';
    const btn = document.querySelector('#submit')
 
    if(scriptURL != null){
      form.addEventListener('submit', e => {
        e.preventDefault()
        btn.disabled = true
        btn.innerHTML = "Sending..."

        let fd = getData(false)
        for (const [key, value] of fd) {
          console.log(`${key}: ${value}\n`);
        }

        fetch(scriptURL, { method: 'POST', mode: 'no-cors', body: fd })
          .then(response => { 
              alert('Success!', response) })
          .catch(error => {
              alert('Error!', error.message)})

        btn.disabled = false
        btn.innerHTML = "Send to Google Sheets"
      })
    }
}
