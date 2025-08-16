// Hent navbar fra components og sett inn på siden
fetch('../components/navbar.html')
  .then(response => response.text())
  .then(data => {
    document.getElementById('navbar').innerHTML = data;
  })
  .catch(error => console.error('Kunne ikke laste navbar:', error));
