function setUpGoogleSheets() {
    const scriptURL = 'https://script.google.com/macros/s/AKfycbxwu3K2VJ6Dar3VQjJg7xor3C36Yc55opeevrJq9m8zDfATZHo2ntutASh_z_gyuw1f/exec';
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

        fetch(scriptURL, { method: 'POST', mode: 'no-cors', body: fd, redirect: 'follow' })
          .then(response => { 
              alert('Success!', response) })
          .catch(error => {
              alert('Error!', error.message)})

        btn.disabled = false
        btn.innerHTML = "Send to Google Sheets"
      })
    }
}
