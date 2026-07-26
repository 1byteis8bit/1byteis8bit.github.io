const toggle=document.querySelector('.nav-toggle'),nav=document.querySelector('#site-nav');
toggle?.addEventListener('click',()=>{const open=nav.classList.toggle('open');toggle.setAttribute('aria-expanded',String(open))});
const filters=[...document.querySelectorAll('.filter')],cards=[...document.querySelectorAll('.archive-card')],search=document.querySelector('.search');
function filterCards(){const active=document.querySelector('.filter.active')?.dataset.filter||'all',q=(search?.value||'').toLowerCase();cards.forEach(card=>{const category=card.dataset.category||'',text=card.textContent.toLowerCase();card.hidden=!((active==='all'||category.includes(active))&&text.includes(q))})}
filters.forEach(button=>button.addEventListener('click',()=>{filters.forEach(b=>b.classList.remove('active'));button.classList.add('active');filterCards()}));
search?.addEventListener('input',filterCards);
