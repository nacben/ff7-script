// Mobile nav toggle
document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.nav-toggle');
  const links = document.querySelector('.nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', () => {
      links.classList.toggle('open');
    });
  }

  // Highlight current page in nav
  const path = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(a => {
    const href = a.getAttribute('href');
    if (href === path || (path === '' && href === 'index.html')) {
      a.classList.add('active');
    }
  });

  // Lens search (lenses page)
  const search = document.getElementById('lens-search');
  if (search) {
    const items = Array.from(document.querySelectorAll('.lens-item'));
    const count = document.getElementById('lens-count');
    const update = () => {
      const q = search.value.trim().toLowerCase();
      let shown = 0;
      items.forEach(it => {
        const txt = it.textContent.toLowerCase();
        const match = !q || txt.includes(q);
        it.classList.toggle('hidden', !match);
        if (match) shown++;
      });
      if (count) count.textContent = `${shown} of ${items.length} lenses`;
    };
    search.addEventListener('input', update);
    update();
  }
});
