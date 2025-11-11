Nordisk Automasjon - Statisk nettsted (interaktiv) 
-----------------------------------------------
Innhold:
- index.html
- styles.css
- script.js
- logo.svg
- README.md

Funksjonalitet (lokal/klient-side):
- Chat-widget som simulerer booking og lagrer leads i localStorage.
- Kontakt-skjema som lagrer leads i localStorage.
- Mulighet for å laste ned leads som CSV for import til Google Sheets eller Airtable.
- Interaksjon uten backend (kan kobles til riktig backend / e-posttjeneste etter ønske).

Hvordan bruke:
1. Pakk ut filene og åpne index.html i en nettleser.
2. Test chatten ved å klikke chat-ikonet og sende en bookingforespørsel.
3. Last ned leads som CSV og importer i Google Sheets eller Airtable.

Neste steg hvis du vil gjøre dette live på nett:
- Velg host (Netlify, Vercel, GitHub Pages eller egen server)
- Konfigurer backend (f.eks. webhook til Zapier / Make, eller server-endpoint som sender epost)
- Bytt ut localStorage-lagring med reell database eller Google Sheets API
