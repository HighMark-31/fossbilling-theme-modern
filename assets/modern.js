import './scss/modern.scss';

import $ from 'jquery';
import * as bootstrap from 'bootstrap';
import '../../admin_default/assets/js/tomselect';
import '../../admin_default/assets/js/fossbilling';

globalThis.$ = globalThis.jQuery = $;
globalThis.bootstrap = bootstrap;

document.addEventListener('DOMContentLoaded', () => {
  const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
  [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));

  globalThis.flashMessage = ({message = '', reload = false, type = 'info'}) => {
    let key = 'flash-message';
    let sessionMessage = sessionStorage.getItem(key);
    if (message === '' && sessionMessage) {
      FOSSBilling.message(sessionMessage, type);
      sessionStorage.removeItem(key);
      return;
    }
    if (message) {
      sessionStorage.setItem(key, message);
      if (typeof reload === 'boolean' && reload) {
        bb.reload();
      } else if (typeof reload === 'string') {
        bb.redirect(reload);
      }
    }
  }
  flashMessage({});

  const requiredInputs = document.querySelectorAll('input[required], textarea[required]');
  requiredInputs.forEach(input => {
    const label = input.previousElementSibling;
    const isAuth = input.parentElement.parentElement.classList.contains('auth');
    if (!isAuth && label && label.tagName.toLowerCase() === 'label') {
      const asterisk = document.createElement('span');
      asterisk.textContent = ' *';
      asterisk.classList.add('text-red-500');
      label.appendChild(asterisk);
    }
  });

  const currencySelector = document.querySelectorAll('select.currency_selector');
  currencySelector.forEach(function (select) {
    select.addEventListener('change', function () {
      API.guest.post('cart/set_currency', {currency: select.value}, function(response) {
        location.reload()
      }, function(error) {
        FOSSBilling.message(error)
      });
    });
  });

  const languageSelector = document.querySelectorAll('select.js-language-selector');
  languageSelector.forEach(function (select) {
    select.addEventListener('change', function () {
      const value = select.value;
      const days = 365;
      const date = new Date();
      date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
      document.cookie = "BBLANG=" + value + "; expires=" + date.toGMTString() + "; path=/";
      location.reload();
    });
  });

  const mobileMenuToggle = document.querySelector('[data-mobile-menu-toggle]');
  if (mobileMenuToggle) {
    mobileMenuToggle.addEventListener('click', function() {
      document.body.classList.toggle('mobile-menu-open');
    });
  }

  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
});