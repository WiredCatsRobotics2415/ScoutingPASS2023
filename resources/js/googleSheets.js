function setUpGoogleSheets() {
    const scriptURL = 'https://script.google.com/macros/s/AKfycbygEOgzrPdcvyqvP3RwkDKcZHmAv6wjO3MwVP27ciTV_daQ8ncL32gooJYhcIJTogi4/exec';
    const form = document.querySelector('#scoutingForm')
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
