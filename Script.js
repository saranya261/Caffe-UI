// Mobile menu
const btn = document.querySelector('.menu-btn');
const links = document.getElementById('links');
btn.addEventListener('click', () => {
  const open = links.classList.toggle('open');
  btn.setAttribute('aria-expanded', open);
});
links.querySelectorAll('a').forEach(a => a.addEventListener('click', () => links.classList.remove('open')));

// Active link on scroll
const sections = [...links.querySelectorAll('a')].map(a => ({a, el: document.querySelector(a.getAttribute('href'))}));
window.addEventListener('scroll', () => {
  const y = window.scrollY + 160;
  let current = sections[0];
  sections.forEach(s => { if (s.el && s.el.offsetTop <= y) current = s; });
  sections.forEach(s => s.a.classList.toggle('active', s === current));
}, {passive: true});

// Add-to-order buttons
document.querySelectorAll('.card button').forEach(b => {
  b.addEventListener('click', () => {
    b.textContent = '✓';
    setTimeout(() => (b.textContent = '+'), 1200);
  });
});

// Newsletter
document.getElementById('newsForm').addEventListener('submit', e => {
  e.preventDefault();
  const form = e.target;
  form.innerHTML = '<span class="toast">Thank you! You\'re on the list.</span>';
});

// Watch Our Story modal
const modal = document.getElementById('videoModal');
const modalVideo = modal.querySelector('video');
document.getElementById('watchBtn').addEventListener('click', e => {
  e.preventDefault();
  modal.showModal();
  modalVideo.currentTime = 0;
  modalVideo.play();
});
function closeModal(){ modalVideo.pause(); modal.close(); }
modal.querySelector('.close').addEventListener('click', closeModal);
modal.addEventListener('click', e => { if (e.target === modal) closeModal(); });
modal.addEventListener('close', () => modalVideo.pause());

// Make sure the hero video plays (some previews block autoplay until ready)
const heroVideo = document.querySelector('.hero-img video');
if (heroVideo) {
  heroVideo.muted = true;
  const tryPlay = () => heroVideo.play().catch(() => {});
  heroVideo.addEventListener('canplay', tryPlay);
  document.addEventListener('click', tryPlay, { once: true });
  tryPlay();
}


// Load photos from the images folder (tries jpg, jpeg, png, webp)
document.querySelectorAll('img[data-img]').forEach(img => {
  const exts = ['jpg','jpeg','png','webp','JPG','PNG'];
  let i = 0;
  const next = () => {
    if (i >= exts.length) { img.hidden = true; return; }
    img.src = img.dataset.img + '.' + exts[i++];
  };
  img.addEventListener('error', next);
  next();
});
