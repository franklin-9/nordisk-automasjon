// script.js — demo interactivity, chat, lead storage and CSV export
(function(){
    const LEADS_KEY = 'na_leads_prod_demo';
  
    // Chart.js setup
    const ctx = document.getElementById('leadsChart').getContext('2d');
    const chartData = { labels: [], datasets: [{ label: 'Leads', data: [], tension:0.3, fill:true, backgroundColor:'rgba(11,105,255,0.08)', borderColor:'rgba(11,105,255,0.9)'}] };
    const leadsChart = new Chart(ctx, { type:'line', data:chartData, options:{responsive:true, maintainAspectRatio:false, plugins:{legend:{display:false}}}});
  
    // Update stats UI
    function updateStats(){
      const arr = JSON.parse(localStorage.getItem(LEADS_KEY) || '[]');
      document.getElementById('statLeads').textContent = arr.length;
      document.getElementById('statBookings').textContent = arr.filter(l=>l.type==='booking').length;
      const avg = arr.length ? Math.round(arr.reduce((s,a)=>s+(a.responseTime||4),0)/arr.length) : '—';
      document.getElementById('statResponse').textContent = avg + (avg!=='—' ? 's' : '');
    }
    updateStats();
  
    // Demo button: simulate leads
    document.getElementById('demoBtn').addEventListener('click', ()=> simulateLeads(6));
    function simulateLeads(n){
      const now = new Date();
      for(let i=0;i<n;i++){
        const t = new Date(now.getTime() - (n-i)*60000);
        const lead = { id:Date.now()+i, name:'Demo Kunde '+(i+1), email:'demo'+(i+1)+'@eksempel.no', type:i%3===0?'booking':'lead', created:t.toISOString(), responseTime:Math.floor(Math.random()*8)+2 };
        saveLead(lead);
        pushChartPoint(t.getHours()+':'+String(t.getMinutes()).padStart(2,'0'), Math.floor(Math.random()*3)+1);
      }
      updateStats();
    }
    function pushChartPoint(label, value){
      chartData.labels.push(label);
      chartData.datasets[0].data.push(value);
      if(chartData.labels.length>12){ chartData.labels.shift(); chartData.datasets[0].data.shift(); }
      leadsChart.update();
    }
  
    // Lead storage
    function saveLead(l){ const arr = JSON.parse(localStorage.getItem(LEADS_KEY)||'[]'); arr.push(l); localStorage.setItem(LEADS_KEY, JSON.stringify(arr)); }
  
    // Contact form
    const contactForm = document.getElementById('contactForm');
    contactForm.addEventListener('submit', function(e){
      e.preventDefault();
      const lead = {
        id: Date.now(),
        name: document.getElementById('cfName').value.trim(),
        email: document.getElementById('cfEmail').value.trim(),
        phone: document.getElementById('cfPhone').value.trim(),
        company: document.getElementById('cfCompany').value.trim(),
        message: document.getElementById('cfMessage').value.trim(),
        type: 'lead', created: new Date().toISOString(), responseTime: Math.floor(Math.random()*6)+2
      };
      if(!lead.name || !lead.email){ document.getElementById('formMsg').textContent = 'Navn og e-post kreves.'; return; }
      saveLead(lead);
      contactForm.reset();
      document.getElementById('formMsg').textContent = 'Takk — vi har mottatt forespørselen. Vi kontakter deg snart.';
      updateStats();
      setTimeout(()=> document.getElementById('formMsg').textContent = '', 4000);
    });
  
    // Demo lead
    document.getElementById('demoLead').addEventListener('click', function(){
      const lead = { id:Date.now(), name:'Test Kunde', email:'test@kunde.no', type:'lead', created:new Date().toISOString(), responseTime:3 };
      saveLead(lead); updateStats(); pushChartPoint(new Date().getHours()+':'+String(new Date().getMinutes()).padStart(2,'0'),1);
    });
  
    // Integrations info buttons
    document.querySelectorAll('.int-btn').forEach(btn=>{
      btn.addEventListener('click', ()=> {
        const id = btn.dataset.int;
        const info = {
          sheets: 'Eksporter automatisk til Google Sheets ved å bruke Zapier / Make eller Sheets API. Vi hjelper med setup.',
          airtable: 'Synkroniser leads til Airtable med tilpasset feltkartlegging og visninger.',
          calendar: 'Bookinger skrives direkte til Google Calendar eller Outlook med tilgjengelighetssjekk.'
        };
        document.getElementById('intInfo').textContent = info[id] || 'Velg en integrasjon for info.';
      });
    });
  
    // Price modal
    document.querySelectorAll('.selectPlan').forEach(b=> b.addEventListener('click', function(){
      const plan = this.dataset.plan;
      document.getElementById('modalTitle').textContent = 'Plan valgt: ' + plan;
      document.getElementById('modalBody').textContent = 'Takk! Vi sender et tilpasset tilbud til din e-post. Kontakt oss gjerne for demo.';
      showModal();
    }));
    document.getElementById('modalOk').addEventListener('click', hideModal);
    document.getElementById('closeModal').addEventListener('click', hideModal);
    function showModal(){ document.getElementById('modal').classList.remove('hidden'); document.getElementById('modal').setAttribute('aria-hidden','false'); }
    function hideModal(){ document.getElementById('modal').classList.add('hidden'); document.getElementById('modal').setAttribute('aria-hidden','true'); }
  
    // Chat widget behavior
    const chat = document.getElementById('chatWidget'), openChat = document.getElementById('openChatBtn'), closeChat = document.getElementById('closeChat');
    openChat.addEventListener('click', ()=> { chat.classList.remove('closed'); chat.setAttribute('aria-hidden','false'); document.getElementById('chatName').focus(); renderBot('Hei! Hvordan kan vi hjelpe deg i dag?'); });
    closeChat.addEventListener('click', ()=> { chat.classList.add('closed'); chat.setAttribute('aria-hidden','true'); });
  
    function renderBot(text){ const body = document.getElementById('chatBody'); const el = document.createElement('div'); el.className='bot'; el.textContent = text; body.appendChild(el); body.scrollTop = body.scrollHeight; }
  
    document.getElementById('chatForm').addEventListener('submit', function(e){
      e.preventDefault();
      const name = document.getElementById('chatName').value.trim(), email = document.getElementById('chatEmail').value.trim();
      if(!name || !email){ alert('Vennligst fyll ut navn og e-post.'); return; }
      const payload = { id:Date.now(), name, email, service:document.getElementById('chatService').value, time:document.getElementById('chatTime').value, type:'booking', created:new Date().toISOString(), responseTime:2 };
      saveLead(payload);
      renderBot('Takk — din forespørsel er sendt. Vi kontakter deg per e-post.');
      updateStats();
      this.reset();
      setTimeout(()=> { chat.classList.add('closed'); chat.setAttribute('aria-hidden','true'); }, 1200);
    });
  
    // Download leads as CSV
    document.getElementById('downloadLeads').addEventListener('click', function(){
      const arr = JSON.parse(localStorage.getItem(LEADS_KEY) || '[]');
      if(arr.length===0){ alert('Ingen leads å laste ned.'); return; }
      const keys = Array.from(new Set(arr.flatMap(o=>Object.keys(o))));
      const header = keys.join(',') + '\n';
      const lines = arr.map(o => keys.map(k => JSON.stringify(o[k]||'')).join(',')).join('\n');
      const csv = header + lines;
      const blob = new Blob([csv], {type:'text/csv;charset=utf-8;'});
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a'); a.href = url; a.download = 'leads_nordisk_automasjon.csv'; document.body.appendChild(a); a.click(); a.remove(); URL.revokeObjectURL(url);
    });
  
    // Init storage
    if(!localStorage.getItem(LEADS_KEY)) localStorage.setItem(LEADS_KEY, JSON.stringify([]));
    updateStats();
  
    // Accessibility: ESC closes modals/chat
    document.addEventListener('keydown', e => { if(e.key==='Escape'){ chat.classList.add('closed'); hideModal(); }});
  
  })();
  