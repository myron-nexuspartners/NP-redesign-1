/**
 * NEXUS PARTNERS — Main JavaScript
 * All interactive behaviour: nav scroll, smooth scroll,
 * scroll-reveal animations, modal open/close, contact form.
 */

(function () {
  'use strict';

  /* ── NAV SCROLL STATE ── */
  var nav = document.getElementById('navbar');
  window.addEventListener('scroll', function () {
    nav.classList.toggle('scrolled', window.scrollY > 60);
  }, { passive: true });

  /* ── SMOOTH SCROLL ── */
  document.querySelectorAll('a[href^="#"]').forEach(function (a) {
    a.addEventListener('click', function (e) {
      var target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        window.scrollTo({ top: target.offsetTop - 80, behavior: 'smooth' });
      }
    });
  });

  /* ── SCROLL REVEAL ──
     Content is visible by default (no JS = still readable).
     JS adds .hidden immediately, then .visible when scrolled into view.
  */
  if ('IntersectionObserver' in window) {
    var items = document.querySelectorAll('.reveal');
    items.forEach(function (el) { el.classList.add('hidden'); });

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.remove('hidden');
          entry.target.classList.add('visible');
          observer.unobserve(entry.target); // fire once only
        }
      });
    }, { threshold: 0.08 });

    items.forEach(function (el) { observer.observe(el); });
  }

  /* ── FOOTER YEAR ── */
  var yrEl = document.getElementById('yr');
  if (yrEl) yrEl.textContent = new Date().getFullYear();

  /* ── CONTACT FORM ── */
  var form = document.getElementById('contactForm');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var btn = document.getElementById('submitBtn');
      btn.textContent = 'Sending…';
      btn.disabled = true;
      // Replace this timeout with your actual form submission (Netlify Forms, etc.)
      setTimeout(function () {
        btn.textContent = 'Message Sent ✓';
        btn.style.background = '#1a6b3a';
        btn.disabled = false;
      }, 1400);
    });
  }

  /* ── MODALS ── */
  var activeModal = null;
  var prevFocus   = null;

  window.openModal = function (id) {
    prevFocus   = document.activeElement;
    activeModal = document.getElementById('modal-' + id);
    if (!activeModal) return;
    activeModal.classList.add('active');
    document.body.style.overflow = 'hidden';
    // Move focus to close button for accessibility
    setTimeout(function () {
      var closeBtn = activeModal.querySelector('.modal-close');
      if (closeBtn) closeBtn.focus();
    }, 100);
  };

  window.closeModal = function (id) {
    var modal = document.getElementById('modal-' + id);
    if (!modal) return;
    modal.classList.remove('active');
    document.body.style.overflow = '';
    activeModal = null;
    if (prevFocus) prevFocus.focus();
  };

  // Close on backdrop click
  document.querySelectorAll('.modal-overlay').forEach(function (overlay) {
    overlay.addEventListener('click', function (e) {
      if (e.target === overlay) {
        closeModal(overlay.id.replace('modal-', ''));
      }
    });
  });

  // Escape key + focus trap
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && activeModal) {
      closeModal(activeModal.id.replace('modal-', ''));
    }
    if (e.key === 'Tab' && activeModal) {
      var focusable = activeModal.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      var first = focusable[0];
      var last  = focusable[focusable.length - 1];
      if (e.shiftKey) {
        if (document.activeElement === first) { e.preventDefault(); last.focus(); }
      } else {
        if (document.activeElement === last)  { e.preventDefault(); first.focus(); }
      }
    }
  });

}());
