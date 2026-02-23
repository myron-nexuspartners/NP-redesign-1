/**
 * Nexus Partners – main.js
 * Handles: mobile nav toggle, contact form validation, dynamic footer year.
 */

(function () {
  'use strict';

  /* ── Footer year ──────────────────────────────────────────────── */
  var yearEl = document.getElementById('footer-year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  /* ── Mobile nav toggle ────────────────────────────────────────── */
  var toggle = document.querySelector('.nav__toggle');
  var menu   = document.getElementById('nav-menu');

  if (toggle && menu) {
    toggle.addEventListener('click', function () {
      var isOpen = menu.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', String(isOpen));
    });

    // Close menu when a link is clicked
    menu.querySelectorAll('.nav__link').forEach(function (link) {
      link.addEventListener('click', function () {
        menu.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });

    // Close menu when clicking outside
    document.addEventListener('click', function (e) {
      if (!menu.contains(e.target) && !toggle.contains(e.target)) {
        menu.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  /* ── Contact form validation ──────────────────────────────────── */
  var form        = document.getElementById('contact-form');
  var successMsg  = document.getElementById('form-success');

  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var valid = validateForm(form);
      if (valid && successMsg) {
        form.reset();
        successMsg.hidden = false;
        // Hide success message after 6 s
        setTimeout(function () {
          successMsg.hidden = true;
        }, 6000);
      }
    });

    // Real-time field validation on blur
    form.querySelectorAll('[required]').forEach(function (field) {
      field.addEventListener('blur', function () {
        validateField(field);
      });
    });
  }

  /**
   * Validate all required fields; return true if all pass.
   * @param {HTMLFormElement} formEl
   * @returns {boolean}
   */
  function validateForm(formEl) {
    var fields  = formEl.querySelectorAll('[required]');
    var allValid = true;
    fields.forEach(function (field) {
      if (!validateField(field)) { allValid = false; }
    });
    return allValid;
  }

  /**
   * Validate a single form field; display inline error if invalid.
   * @param {HTMLInputElement|HTMLTextAreaElement} field
   * @returns {boolean}
   */
  function validateField(field) {
    var errorEl = document.getElementById(field.id + '-error');
    var message = '';

    if (field.value.trim() === '') {
      message = 'This field is required.';
    } else if (field.type === 'email' && !isValidEmail(field.value.trim())) {
      message = 'Please enter a valid email address.';
    }

    if (message) {
      field.classList.add('is-invalid');
      if (errorEl) { errorEl.textContent = message; }
      return false;
    }

    field.classList.remove('is-invalid');
    if (errorEl) { errorEl.textContent = ''; }
    return true;
  }

  /**
   * Simple RFC-5322-friendly email check.
   * @param {string} value
   * @returns {boolean}
   */
  function isValidEmail(value) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
  }

})();
