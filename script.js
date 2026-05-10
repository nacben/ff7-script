// Highlight active section in top nav while scrolling.
(function () {
  const links = document.querySelectorAll('.topnav a[href^="#"]');
  const map = new Map();
  links.forEach((a) => {
    const id = a.getAttribute('href').slice(1);
    const target = document.getElementById(id);
    if (target) map.set(target, a);
  });

  const setActive = (entries) => {
    entries.forEach((entry) => {
      const link = map.get(entry.target);
      if (!link) return;
      if (entry.isIntersecting) {
        links.forEach((l) => l.classList.remove('is-active'));
        link.classList.add('is-active');
      }
    });
  };

  const io = new IntersectionObserver(setActive, {
    rootMargin: '-40% 0px -55% 0px',
    threshold: 0,
  });

  map.forEach((_, target) => io.observe(target));
})();

// Inject a tiny style for the active state without bloating the CSS file.
(function () {
  const style = document.createElement('style');
  style.textContent = `.topnav a.is-active { color: var(--fg); }`;
  document.head.appendChild(style);
})();
