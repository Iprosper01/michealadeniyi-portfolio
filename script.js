document.addEventListener('DOMContentLoaded', function () {
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.querySelector('.site-nav');
  var navLinks = nav ? Array.prototype.slice.call(nav.querySelectorAll('a')) : [];

  /* ---------- Mobile menu ---------- */
  function setMenu(open) {
    nav.classList.toggle('open', open);
    document.body.classList.toggle('menu-open', open);
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
  }

  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      setMenu(!nav.classList.contains('open'));
    });

    navLinks.forEach(function (link) {
      link.addEventListener('click', function () { setMenu(false); });
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && nav.classList.contains('open')) {
        setMenu(false);
        toggle.focus();
      }
    });

    window.matchMedia('(min-width: 721px)').addEventListener('change', function (e) {
      if (e.matches) setMenu(false);
    });
  }

  /* ---------- Highlight the current section in the nav ---------- */
  if ('IntersectionObserver' in window && navLinks.length) {
    var sections = navLinks
      .map(function (a) { return document.querySelector(a.getAttribute('href')); })
      .filter(Boolean);

    var spy = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        navLinks.forEach(function (a) {
          if (a.getAttribute('href') === '#' + entry.target.id) {
            a.setAttribute('aria-current', 'true');
          } else {
            a.removeAttribute('aria-current');
          }
        });
      });
    }, { rootMargin: '-45% 0px -50% 0px', threshold: 0 });

    sections.forEach(function (s) { spy.observe(s); });
  }
});
