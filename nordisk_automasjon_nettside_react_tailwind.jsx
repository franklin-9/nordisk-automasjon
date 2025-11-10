import React from 'react';

export default function NordiskAutomasjonSite() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 antialiased">
      <header className="bg-white shadow">
        <div className="max-w-6xl mx-auto px-6 py-6 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center text-white font-bold">NA</div>
            <div>
              <h1 className="text-xl font-semibold">Nordisk Automasjon</h1>
              <p className="text-sm text-gray-500">Smarte automatiseringsløsninger for norske bedrifter</p>
            </div>
          </div>
          <nav className="hidden md:flex gap-6 text-sm">
            <a href="#tjenester" className="hover:underline">Tjenester</a>
            <a href="#hvordan" className="hover:underline">Hvordan det fungerer</a>
            <a href="#fordeler" className="hover:underline">Fordeler</a>
            <a href="#omtaler" className="hover:underline">Omtaler</a>
            <a href="#kontakt" className="bg-blue-600 text-white px-4 py-2 rounded-md">Kontakt oss</a>
          </nav>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-12">
        {/* Hero */}
        <section className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold">Automatiser kundehenvendelser. Øk bookinger. Spar tid.</h2>
            <p className="mt-4 text-gray-700">Nordisk Automasjon leverer profesjonelle, skybaserte løsninger som gjør at bedriften din aldri går glipp av et lead. Vi setter opp chatbots, booking-integrasjoner og rapportering som fungerer 24/7.</p>

            <div className="mt-6 flex gap-4">
              <a href="#kontakt" className="inline-block bg-indigo-600 text-white px-5 py-3 rounded-md font-medium">Be om demo</a>
              <a href="#tjenester" className="inline-block border border-gray-300 px-5 py-3 rounded-md">Les mer</a>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-4 text-sm">
              <div className="bg-white p-4 rounded shadow">
                <div className="font-semibold">24/7</div>
                <div className="text-gray-500">Svar på henvendelser</div>
              </div>
              <div className="bg-white p-4 rounded shadow">
                <div className="font-semibold">Bookinger</div>
                <div className="text-gray-500">Direkte fra chat</div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-white to-indigo-50 p-8 rounded-xl shadow">
            <h3 className="text-lg font-semibold">Eksempel: Chat + Booking</h3>
            <ol className="mt-4 list-decimal list-inside text-gray-700 space-y-2">
              <li>Kunden starter chat på nettsiden.</li>
              <li>Bot samler navn, e-post, telefon og ønsket tid.</li>
              <li>Kunden booker time direkte i chatten.</li>
              <li>Bedriften mottar e-post eller SMS med lead-info.</li>
            </ol>
            <p className="mt-4 text-sm text-gray-500">Valgfritt: lagres i Google Sheets eller Airtable for full oversikt.</p>
          </div>
        </section>

        {/* Services */}
        <section id="tjenester" className="mt-16">
          <h3 className="text-2xl font-bold">Våre tjenester</h3>
          <p className="mt-2 text-gray-600">Skreddersydde løsninger for bedrifter som ønsker mer effektiv kundehåndtering og flere bookinger.</p>

          <div className="mt-6 grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow">
              <h4 className="font-semibold">AI Chatbot for nettsiden</h4>
              <p className="mt-2 text-gray-600">Besvar kundespørsmål automatisk, samle kundeinformasjon og la kunder booke time direkte fra chatten.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow">
              <h4 className="font-semibold">Automatiske e-postsvar</h4>
              <p className="mt-2 text-gray-600">Send umiddelbare bekreftelser og varsler til kunder — og intern varsling til deg via e-post eller SMS.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow">
              <h4 className="font-semibold">Lead-oversikt & rapportering</h4>
              <p className="mt-2 text-gray-600">Hold oversikt i Google Sheets eller Airtable og få rapporter over alle leads og konverteringer.</p>
            </div>
          </div>

          <div className="mt-6 grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow">
              <h4 className="font-semibold">Booking-kalender integrasjon</h4>
              <p className="mt-2 text-gray-600">Integrer med eksisterende kalenderløsninger slik at bookinger settes automatisk inn i kalenderen.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h4 className="font-semibold">SMS-varsling</h4>
              <p className="mt-2 text-gray-600">Få varsler på SMS når nye henvendelser eller haste-saker kommer inn.</p>
            </div>
          </div>
        </section>

        {/* How it works */}
        <section id="hvordan" className="mt-16 bg-white p-8 rounded-lg shadow">
          <h3 className="text-2xl font-bold">Hvordan det fungerer</h3>
          <div className="mt-4 grid md:grid-cols-4 gap-6 text-gray-700">
            <div>
              <div className="font-semibold">1. Start chat</div>
              <div className="text-sm text-gray-500">Kunden starter chat på nettsiden.</div>
            </div>
            <div>
              <div className="font-semibold">2. Samle info</div>
              <div className="text-sm text-gray-500">Bot samler navn, kontaktinfo, tjeneste og ønsket tidspunkt.</div>
            </div>
            <div>
              <div className="font-semibold">3. Book</div>
              <div className="text-sm text-gray-500">Kunden booker time automatisk i chatten.</div>
            </div>
            <div>
              <div className="font-semibold">4. Varsle</div>
              <div className="text-sm text-gray-500">Informasjon sendes til bedriften via e-post eller SMS.</div>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section id="fordeler" className="mt-16">
          <h3 className="text-2xl font-bold">Fordeler for bedriften</h3>
          <ul className="mt-4 grid md:grid-cols-2 gap-4 list-disc list-inside text-gray-700">
            <li>Fang opp alle leads – aldri gå glipp av en kunde</li>
            <li>Spar tid – automatisk håndtering av henvendelser</li>
            <li>Øk bookinger – kunder kan selv bestille time</li>
            <li>Profesjonelt inntrykk – moderne og effektiv kundeservice</li>
            <li>24/7 tilgjengelighet – selv uten ansatte tilstede</li>
            <li>Prioritering av hastehenvendelser</li>
          </ul>

          <h4 className="mt-6 text-xl font-semibold">Fordeler for kunden</h4>
          <ul className="mt-2 list-disc list-inside text-gray-700">
            <li>Rask respons på spørsmål</li>
            <li>Enkel booking direkte på nettsiden</li>
            <li>Får bekreftelse umiddelbart via e-post</li>
            <li>Enklere og mer oversiktlig opplevelse</li>
          </ul>
        </section>

        {/* Extra features */}
        <section className="mt-16 bg-white p-8 rounded-lg shadow">
          <h3 className="text-2xl font-bold">Ekstra funksjoner / Tilleggstjenester</h3>
          <div className="mt-4 grid md:grid-cols-3 gap-6 text-gray-700">
            <div>
              <div className="font-semibold">SMS-varsling</div>
              <div className="text-sm text-gray-500">Varslinger ved nye henvendelser.</div>
            </div>
            <div>
              <div className="font-semibold">Bookingkalender integrasjon</div>
              <div className="text-sm text-gray-500">Synkronisering med din kalender.</div>
            </div>
            <div>
              <div className="font-semibold">Rapporteringsoversikt</div>
              <div className="text-sm text-gray-500">Full oversikt over alle leads og konverteringer.</div>
            </div>
          </div>
        </section>

        {/* Reviews */}
        <section id="omtaler" className="mt-16">
          <h3 className="text-2xl font-bold">Kundeomtaler</h3>

          <div className="mt-6 grid md:grid-cols-3 gap-6">
            <blockquote className="bg-white p-6 rounded-lg shadow">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center font-bold">MH</div>
                <div>
                  <div className="font-semibold">Marius H. – FrisørStudio Bergen</div>
                  <div className="text-sm text-yellow-500">★★★★★</div>
                </div>
              </div>
              <p className="mt-4 text-gray-700">"Vi økte antall bookinger med 40% etter at Nordisk Automasjon satte opp chatboten vår. Profesjonell tjeneste og god oppfølging."</p>
            </blockquote>

            <blockquote className="bg-white p-6 rounded-lg shadow">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center font-bold">LS</div>
                <div>
                  <div className="font-semibold">Linda S. – Bilpleie Oslo</div>
                  <div className="text-sm text-yellow-500">★★★★★</div>
                </div>
              </div>
              <p className="mt-4 text-gray-700">"Kundene våre får svar på sekunder – og jeg slipper å svare på henvendelser om natta. Anbefales på det varmeste."</p>
            </blockquote>

            <blockquote className="bg-white p-6 rounded-lg shadow">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center font-bold">ET</div>
                <div>
                  <div className="font-semibold">Erik T. – Tannlege</div>
                  <div className="text-sm text-yellow-500">★★★★☆</div>
                </div>
              </div>
              <p className="mt-4 text-gray-700">"Enkel implementering og veldig god kundeservice under oppsettet. Vi har mer kontroll over leadsene våre nå."</p>
            </blockquote>
          </div>
        </section>

        {/* Contact */}
        <section id="kontakt" className="mt-16 bg-white p-8 rounded-lg shadow">
          <h3 className="text-2xl font-bold">Kontakt oss</h3>
          <p className="mt-2 text-gray-600">Ta kontakt for en gratis demo eller tilbud. Vi hjelper deg med å finne riktig løsning for din bedrift.</p>

          <div className="mt-6 grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold">Kontaktinformasjon</h4>
              <p className="mt-2 text-gray-700">Benjamin Langås Reigstad</p>
              <p className="text-gray-700">E-post: <a href="mailto:benjaminlr2008@icloud.com" className="text-indigo-600">benjaminlr2008@icloud.com</a></p>
              <p className="text-gray-700">Telefon: <a href="tel:+4748233283" className="text-indigo-600">+47 482 33 283</a></p>
            </div>

            <form className="bg-gray-50 p-6 rounded-lg">
              <label className="block text-sm font-medium text-gray-700">Navn</label>
              <input type="text" className="mt-1 block w-full rounded-md border-gray-200 shadow-sm p-2" placeholder="Ditt navn" />

              <label className="block text-sm font-medium text-gray-700 mt-4">E-post</label>
              <input type="email" className="mt-1 block w-full rounded-md border-gray-200 shadow-sm p-2" placeholder="din@epost.no" />

              <label className="block text-sm font-medium text-gray-700 mt-4">Telefon</label>
              <input type="tel" className="mt-1 block w-full rounded-md border-gray-200 shadow-sm p-2" placeholder="+47 ..." />

              <label className="block text-sm font-medium text-gray-700 mt-4">Melding</label>
              <textarea className="mt-1 block w-full rounded-md border-gray-200 shadow-sm p-2" rows={4} placeholder="Fortell oss om bedriften din og hva du ønsker" />

              <button type="button" className="mt-4 bg-indigo-600 text-white px-4 py-2 rounded-md">Send forespørsel</button>
            </form>
          </div>

          <p className="mt-6 text-sm text-gray-500">Vi svarer normalt innen kort tid og kan hjelpe med integrasjon mot Google Sheets, Airtable og ulike bookingkalendere.</p>
        </section>

        <footer className="mt-16 py-8 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Nordisk Automasjon — Alle rettigheter forbeholdt
        </footer>
      </main>
    </div>
  );
}
