// script.js - interactivity: form handling, chat simulation, reviews, download CSV
(function(){
  // Utility: localStorage key
  const LEADS_KEY = 'na_leads_v1';

  // Demo button opens chat
  document.getElementById('demoBtn').addEventListener('click', ()=> openChat());

  // Chat open/close
  const chatWidget = document.getElementById('chatWidget'), openBtn = document.getElementById('openChatBtn'), closeChat = document.getElementById('closeChat');
  openBtn.addEventListener('click', ()=> openChat());
  closeChat.addEventListener('click', ()=> closeChatWidget());
  function openChat(){ chatWidget.classList.remove('closed'); chatWidget.setAttribute('aria-hidden','false'); document.getElementById('chatName').focus(); }
  function closeChatWidget(){ chatWidget.classList.add('closed'); chatWidget.setAttribute('aria-hidden','true'); openBtn.focus(); }

  // Chat form: simulate booking and save lead
  document.getElementById('chatForm').addEventListener('submit', function(e){
    e.preventDefault();
    const name = document.getElementById('chatName').value.trim();
    const email = document.getElementById('chatEmail').value.trim();
    const phone = document.getElementById('chatPhone').value.trim();
    const service = document.getElementById('chatService').value;
    const time = document.getElementById('chatTime').value;

    if(!name || !email){ alert('Vennligst oppgi navn og e-post.'); return; }

    const lead = {id:Date.now(), kanal:'chat', navn:name, epost:email, telefon:phone, tjeneste:service, tidspunkt:time, created:new Date().toISOString()};
    saveLead(lead);
    appendChatMessage('bot', 'Takk! Din booking er registrert. Vi kontakter deg via epost.');
    document.getElementById('chatForm').reset();
    setTimeout(()=> closeChatWidget(), 1400);
  });

  // Contact form handler
  document.getElementById('contactForm').addEventListener('submit', function(e){
    e.preventDefault();
    const name = document.getElementById('cfName').value.trim();
    const email = document.getElementById('cfEmail').value.trim();
    const phone = document.getElementById('cfPhone').value.trim();
    const message = document.getElementById('cfMessage').value.trim();
    if(!name || !email){ document.getElementById('formMsg').textContent = 'Navn og e-post er nødvendig.'; return; }
    const lead = {id:Date.now(), kanal:'skjema', navn:name, epost:email, telefon:phone, melding:message, created:new Date().toISOString()};
    saveLead(lead);
    document.getElementById('formMsg').textContent = 'Takk — vi har mottatt forespørselen din.';
    document.getElementById('contactForm').reset();
    setTimeout(()=> document.getElementById('formMsg').textContent = '', 4000);
  });

  // Save lead to localStorage
  function saveLead(lead){
    const arr = JSON.parse(localStorage.getItem(LEADS_KEY) || '[]');
    arr.push(lead);
    localStorage.setItem(LEADS_KEY, JSON.stringify(arr));
  }

  // Download leads as CSV
  document.getElementById('downloadLeads').addEventListener('click', function(){
    const arr = JSON.parse(localStorage.getItem(LEADS_KEY) || '[]');
    if(arr.length===0){ alert('Ingen leads tilgjengelig. Prøv å sende en forespørsel eller book via chat først.'); return; }
    const csv = toCSV(arr);
    const blob = new Blob([csv], {type:'text/csv;charset=utf-8;'});
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url; a.download = 'nordisk_automasjon_leads.csv'; document.body.appendChild(a); a.click(); a.remove();
    URL.revokeObjectURL(url);
  });
  function toCSV(objArray){
    const arr = typeof objArray !== 'object' ? JSON.parse(objArray) : objArray;
    const keys = Array.from(new Set(arr.flatMap(o=>Object.keys(o))));
    const header = keys.join(',') + '\n';
    const lines = arr.map(o => keys.map(k => JSON.stringify(o[k] || '')).join(',')).join('\n');
    return header + lines;
  }

  // Chat body messages
  function appendChatMessage(who, text){
    const body = document.getElementById('chatBody');
    const el = document.createElement('div');
    el.className = who==='bot' ? 'bot' : 'user';
    el.textContent = text;
    body.appendChild(el);
    body.scrollTop = body.scrollHeight;
  }

  // Inject sample reviews & interactive carousel (simple)
  const reviews = [
    {name:'Marius H.', org:'FrisørStudio Bergen', rating:5, text:'Vi økte antall bookinger med 40% etter at Nordisk Automasjon satte opp chatboten vår. Profesjonell tjeneste og god oppfølging.'},
    {name:'Linda S.', org:'Bilpleie Oslo', rating:5, text:'Kundene våre får svar på sekunder – og jeg slipper å svare på henvendelser om natta. Anbefales på det varmeste.'},
    {name:'Erik T.', org:'Tannlege', rating:4, text:'Enkel implementering og veldig god kundeservice under oppsettet. Vi har mer kontroll over leadsene våre nå.'}
  ];
  function renderReviews(){
    const container = document.getElementById('reviews');
    container.innerHTML = '';
    reviews.forEach(r=>{
      const el = document.createElement('blockquote'); el.className='review';
      el.innerHTML = `<div style="display:flex;gap:12px;align-items:center"><div style="width:44px;height:44px;border-radius:22px;background:#eef2ff;display:flex;align-items:center;justify-content:center;font-weight:700">${r.name.split(' ')[0].charAt(0)}${r.name.split(' ')[0].charAt(1)||''}</div><div><strong>${r.name} – ${r.org}</strong><div style="color:#f59e0b">${'★'.repeat(r.rating)}</div></div></div><p style="margin-top:12px;color:#0f172a">${r.text}</p>`;
      container.appendChild(el);
    });
  }
  renderReviews();

  // Demo: prefill chat with sample data when opening via Demo button
  // Already handled by focusing chat

  // Accessibility: close chat with Escape
  document.addEventListener('keydown', function(e){ if(e.key==='Escape'){ closeChatWidget(); } });

  // On load: ensure localStorage key exists
  (function init(){ if(!localStorage.getItem(LEADS_KEY)) localStorage.setItem(LEADS_KEY, JSON.stringify([])); })();
})();
