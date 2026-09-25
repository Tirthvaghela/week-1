/* AURA Studio — script
   Everything here enhances a page that already works without it: every section, link and form
   field is in the HTML, and native form validation still runs if this file never loads.

   1  Scroll-linked effects   (progress line, header, lit words, drifting words)
   2  Header & mobile menu
   3  Reveal on scroll & figure count-up
   4  Services preview
   5  Project stack (keyboard focus)
   6  Project viewer
   7  Enquiry form                                                                           */

(function () {
  'use strict';

  var reduced = window.matchMedia('(prefers-reduced-motion: reduce)');

  function $(selector, root) { return (root || document).querySelector(selector); }
  function $$(selector, root) { return Array.prototype.slice.call((root || document).querySelectorAll(selector)); }
  function clamp(value, low, high) { return Math.min(high, Math.max(low, value)); }
  function listen(query, handler) {
    if (query.addEventListener) { query.addEventListener('change', handler); }
    else if (query.addListener) { query.addListener(handler); }
  }


  /* ------------------------------------------------------------------
     1. Scroll-linked effects. One throttled scroll handler feeds CSS custom properties
        (--progress, --p, --n); the stylesheet turns them into clip, scale, opacity and drift.
     ------------------------------------------------------------------ */
  var header = $('[data-header]');
  var bar = $('[data-progress]');
  var statement = $('[data-words]');
  var words = statement ? $$('[data-word]', statement) : [];
  var drift = $('[data-drift]');
  var lastY = window.scrollY;
  var lit = -1;
  var frame = 0;

  words.forEach(function (word, i) { word.style.setProperty('--i', i); });

  function menuIsOpen() {
    return !!header && header.classList.contains('is-open');
  }

  function tick() {
    frame = 0;

    var y = window.scrollY;
    var vh = window.innerHeight;
    var room = document.documentElement.scrollHeight - vh;
    var moving = !reduced.matches;

    if (bar) {
      bar.style.setProperty('--progress', room > 0 ? clamp(y / room, 0, 1).toFixed(4) : 0);
    }

    // the header tucks away while reading downwards and returns on any upward scroll
    if (header && moving) {
      if (y > lastY && y > 400 && !menuIsOpen()) {
        header.classList.add('is-hidden');
      } else if (y < lastY || y <= 400) {
        header.classList.remove('is-hidden');
      }
    }
    lastY = y;

    if (!moving) { return; }

    // studio statement: words light up in reading order
    if (statement) {
      var text = statement.getBoundingClientRect();
      var progress = clamp((vh * .8 - text.top) / (text.height + vh * .25), 0, 1);
      var count = Math.round(progress * words.length);
      if (count !== lit) {
        lit = count;
        statement.style.setProperty('--n', count);
      }
    }

    // "Light — Material — Life" slides sideways as the band passes through the viewport
    if (drift) {
      var band = drift.getBoundingClientRect();
      if (band.bottom > -vh && band.top < vh * 2) {
        drift.style.setProperty('--p', ((vh - band.top) / (vh + band.height)).toFixed(4));
      }
    }
  }

  function requestTick() {
    if (!frame) { frame = window.requestAnimationFrame(tick); }
  }

  function resetMotion() {
    if (header) { header.classList.remove('is-hidden'); }
    if (statement) { statement.style.removeProperty('--n'); lit = -1; }
    if (drift) { drift.style.removeProperty('--p'); }
  }

  window.addEventListener('scroll', requestTick, { passive: true });
  window.addEventListener('resize', requestTick);
  window.addEventListener('load', requestTick);
  listen(reduced, function () { if (reduced.matches) { resetMotion(); } requestTick(); });
  tick();


  /* ------------------------------------------------------------------
     2. Header & mobile menu (below 768px the nav becomes a full-screen panel)
     ------------------------------------------------------------------ */
  (function menu() {
    var toggle = $('[data-menu-toggle]');
    var nav = document.getElementById('site-menu');
    var behind = [document.getElementById('main'), $('[data-footer]')];

    if (!header || !toggle || !nav) { return; }

    var label = $('[data-menu-label]', toggle);
    var desktop = window.matchMedia('(min-width: 768px)');

    function focusable() {
      return $$('a[href]', nav);
    }

    function isOpen() {
      return toggle.getAttribute('aria-expanded') === 'true';
    }

    function setMenu(open, returnFocus) {
      toggle.setAttribute('aria-expanded', String(open));
      header.classList.toggle('is-open', open);
      document.body.classList.toggle('menu-open', open);

      if (label) { label.textContent = open ? 'Close' : 'Menu'; }

      // the page behind the open menu leaves the tab order and the accessibility tree
      behind.forEach(function (el) { if (el) { el.inert = open; } });

      if (open) {
        header.classList.remove('is-hidden');
        var links = focusable();
        if (links.length) { links[0].focus(); }
      } else if (returnFocus) {
        toggle.focus();
      }
    }

    toggle.addEventListener('click', function () {
      setMenu(!isOpen(), true);
    });

    // choosing a link (or the wordmark) closes the menu; the browser then scrolls to the section
    header.addEventListener('click', function (event) {
      if (event.target.closest('a[href]') && isOpen()) { setMenu(false, false); }
    });

    // keyboard users reaching the header while it is tucked away bring it back
    header.addEventListener('focusin', function () {
      header.classList.remove('is-hidden');
    });

    document.addEventListener('keydown', function (event) {
      if (!isOpen()) { return; }

      if (event.key === 'Escape') {
        event.preventDefault();
        setMenu(false, true);
        return;
      }

      // keep Tab inside the open menu: button <-> links
      if (event.key === 'Tab') {
        var links = focusable();
        var last = links[links.length - 1];

        if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          toggle.focus();
        } else if (event.shiftKey && document.activeElement === toggle) {
          event.preventDefault();
          last.focus();
        }
      }
    });

    // growing past the breakpoint always resets the menu
    listen(desktop, function () {
      if (desktop.matches && isOpen()) { setMenu(false, false); }
    });
  })();


  /* ------------------------------------------------------------------
     3. Reveal on scroll & figure count-up. Content is visible by default; only elements that
        start below the fold are held back (.is-pending) until they are about to arrive.
     ------------------------------------------------------------------ */
  (function reveal() {
    var observers = [];

    function format(el, value) {
      return String(value).padStart(+el.getAttribute('data-pad') || 0, '0') + (el.getAttribute('data-suffix') || '');
    }

    // reduced motion switched on while the page is open: show everything at once
    function settle() {
      observers.forEach(function (observer) { observer.disconnect(); });
      $$('.is-pending').forEach(function (el) { el.classList.remove('is-pending'); });
      $$('[data-count]').forEach(function (el) { el.textContent = format(el, +el.getAttribute('data-count')); });
    }

    listen(reduced, function () { if (reduced.matches) { settle(); } });

    if (!('IntersectionObserver' in window) || reduced.matches) { return; }

    function countUp(el) {
      var target = +el.getAttribute('data-count');
      var start = window.performance.now();

      (function step(now) {
        if (reduced.matches) { el.textContent = format(el, target); return; }

        var k = Math.min(1, (now - start) / 1400);
        el.textContent = format(el, Math.round(target * (1 - Math.pow(1 - k, 3))));
        if (k < 1) { window.requestAnimationFrame(step); }
      })(start);
    }

    var reveals = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) { return; }

        entry.target.classList.remove('is-pending');
        reveals.unobserve(entry.target);
      });
    }, { rootMargin: '0px 0px -10% 0px' });

    var counts = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) { return; }

        countUp(entry.target);
        counts.unobserve(entry.target);
      });
    }, { rootMargin: '0px' });

    observers.push(reveals, counts);

    $$('[data-reveal], [data-clip]').forEach(function (el) {
      if (el.getBoundingClientRect().top > window.innerHeight) {
        el.classList.add('is-pending');
        reveals.observe(el);
      }
    });

    // every figure starts at zero (never flashing its final value), then counts up as it arrives
    $$('[data-count]').forEach(function (el) {
      el.textContent = format(el, 0);
      counts.observe(el);
    });
  })();


  /* ------------------------------------------------------------------
     4. Services preview — hover, focus or click a service to open it and show its picture
     ------------------------------------------------------------------ */
  (function services() {
    var list = $('[data-services]');

    if (!list) { return; }

    var items = $$('.service', list);
    var buttons = $$('.service__btn', list);
    var slides = $$('.service-preview__slide');
    var counter = $('[data-service-count]');
    var wide = window.matchMedia('(min-width: 768px)');
    var active = 0;

    // the hidden slides are clipped away, so the browser would never lazy-load them: fetch them
    // just before the section arrives so the first hover shows a picture straight away
    var previews = $$('.service-preview img');

    function warm() {
      previews.forEach(function (img) { img.loading = 'eager'; });
    }

    if ('IntersectionObserver' in window) {
      var near = new IntersectionObserver(function (entries) {
        if (entries[0].isIntersecting) { warm(); near.disconnect(); }
      }, { rootMargin: '700px 0px' });
      near.observe(list);
    } else {
      warm();
    }

    // on phones every description is already open, so every button reports "expanded"
    function syncAria() {
      buttons.forEach(function (button, i) {
        button.setAttribute('aria-expanded', String(!wide.matches || i === active));
      });
    }

    function choose(index) {
      if (index === active) { return; }
      active = index;

      items.forEach(function (item, i) { item.classList.toggle('is-active', i === index); });
      slides.forEach(function (slide, i) { slide.classList.toggle('is-active', i === index); });
      if (counter) { counter.textContent = '0' + (index + 1); }
      syncAria();
    }

    buttons.forEach(function (button, i) {
      ['mouseenter', 'focus', 'click'].forEach(function (type) {
        button.addEventListener(type, function () { choose(i); });
      });
    });

    listen(wide, syncAria);
    syncAria();
  })();


  /* ------------------------------------------------------------------
     5. Project stack — the panels stack as you scroll, so a panel that is not on top could be
        hidden under the next one. When keyboard focus lands inside a panel, bring that panel to
        the top of the stack so the focus ring is never covered.
     ------------------------------------------------------------------ */
  (function projectStack() {
    var articles = $$('.project');

    if (!articles.length) { return; }

    // a panel taller than the screen (short window, browser zoom, large text) cannot show its
    // lower half while it sticks, so it is marked .is-flow and scrolls like normal content
    function fits(article) {
      var inner = $('.project__inner', article);
      var media = $('.project__media', article);
      var panel = $('.project__panel', article);
      var stuckAt = parseFloat(window.getComputedStyle(article).top) || 0;

      return article.offsetHeight <= window.innerHeight - stuckAt &&
        inner.scrollHeight <= inner.clientHeight + 1 &&
        panel.scrollHeight <= panel.clientHeight + 1 &&
        media.offsetHeight >= 170;
    }

    var pending = 0;

    function refit() {
      pending = 0;
      articles.forEach(function (article) { article.classList.remove('is-flow'); });

      var flows = articles.filter(function (article) { return !fits(article); });
      flows.forEach(function (article) { article.classList.add('is-flow'); });
    }

    function scheduleRefit() {
      if (!pending) { pending = window.requestAnimationFrame(refit); }
    }

    refit();
    window.addEventListener('resize', scheduleRefit);
    window.addEventListener('load', scheduleRefit);
    if (document.fonts && document.fonts.ready) { document.fonts.ready.then(scheduleRefit); }

    // the panels stack, so a panel that is not on top could be hidden under the next one: when
    // keyboard focus lands inside a panel, bring that panel to the top of the stack
    articles.forEach(function (article, i) {
      article.addEventListener('focusin', function (event) {
        if (article.classList.contains('is-flow') || !event.target.matches(':focus-visible')) { return; }

        var target = articles[0].parentElement.getBoundingClientRect().top + window.scrollY -
          (parseFloat(window.getComputedStyle(article).top) || 0);

        articles.slice(0, i).forEach(function (before) { target += before.offsetHeight; });

        if (Math.abs(window.scrollY - target) > 2) {
          window.scrollTo({ top: target, behavior: 'instant' });
        }
      });
    });
  })();


  /* ------------------------------------------------------------------
     6. Project viewer — "View Project" (or the picture) opens it large, with its details, in a
        native <dialog>. Offered only where <dialog> works; otherwise the buttons stay hidden.
     ------------------------------------------------------------------ */
  (function projectViewer() {
    var dialog = document.getElementById('project-dialog');

    if (!dialog || typeof dialog.showModal !== 'function') { return; }

    document.documentElement.classList.add('has-dialog');

    var figure = $('[data-dialog-figure]', dialog);
    var numeral = $('.project-dialog__numeral', dialog);
    var count = $('.project-dialog__count', dialog);
    var title = $('.project-dialog__title', dialog);
    var meta = $('.project-dialog__meta', dialog);
    var desc = $('.project-dialog__desc', dialog);
    var invoker = null;

    function text(root, selector) {
      var node = $(selector, root);
      return node ? node.textContent.replace(/\s+/g, ' ').trim() : '';
    }

    function open(article, button) {
      var source = $('.project__media img', article);

      // the picture is built on demand, so the page never holds an image without a source
      var img = document.createElement('img');
      img.className = 'project-dialog__img';
      img.src = source.getAttribute('src');
      img.alt = source.getAttribute('alt');
      img.width = source.getAttribute('width');
      img.height = source.getAttribute('height');
      figure.replaceChildren(img);

      numeral.textContent = text(article, '.project__numeral');
      count.textContent = text(article, '.project__count').replace(/^Project\s*/, '');
      title.textContent = text(article, '.project__title');
      desc.textContent = text(article, '.project__desc');
      meta.replaceChildren.apply(meta, $$('.project__meta > div', article).map(function (group) {
        return group.cloneNode(true);
      }));

      invoker = button;
      document.body.classList.add('dialog-open');
      dialog.showModal();
    }

    $$('.project').forEach(function (article) {
      var button = $('[data-project-open]', article);

      button.addEventListener('click', function () { open(article, button); });

      // the picture is a larger target for the same action (the button stays the keyboard route)
      $('.project__media', article).addEventListener('click', function () { open(article, button); });
    });

    $('[data-dialog-close]', dialog).addEventListener('click', function () { dialog.close(); });

    // "Enquire about similar work" closes the viewer and lets the link scroll to the form
    $('[data-dialog-enquire]', dialog).addEventListener('click', function () {
      invoker = null;
      dialog.close();
    });

    // a click on the backdrop (the dialog element itself) closes it
    dialog.addEventListener('click', function (event) {
      if (event.target === dialog) { dialog.close(); }
    });

    dialog.addEventListener('close', function () {
      document.body.classList.remove('dialog-open');
      if (invoker) {
        invoker.focus();
        invoker = null;
      }
    });
  })();


  /* ------------------------------------------------------------------
     7. Enquiry form — native HTML validation works without JavaScript; here it is enhanced with
        inline messages, aria-invalid, focus on the first problem and a clear demo confirmation.
        Nothing is sent anywhere.
     ------------------------------------------------------------------ */
  (function enquiryForm() {
    var form = document.getElementById('enquiry-form');

    if (!form) { return; }

    form.setAttribute('novalidate', '');

    var status = document.getElementById('enquiry-status');
    var controls = $$('.field__control', form);

    function messageFor(el) {
      var value = el.value.trim();

      switch (el.name) {
        case 'name':
          return value.length < 2 ? 'Please enter your full name (at least 2 characters).' : '';
        case 'email':
          if (!value) {
            return 'Please enter your email address.';
          }
          return (el.validity.typeMismatch || !/^\S+@\S+\.\S+$/.test(value))
            ? 'Please enter a valid email address, for example name@example.com.' : '';
        case 'phone':
          return (value && el.validity.patternMismatch)
            ? 'Please use digits, spaces and + ( ) . - only, or leave this blank.' : '';
        case 'type':
          return el.value ? '' : 'Please choose a project type.';
        case 'message':
          if (value.length < 20) {
            return 'Please tell us a little more (at least 20 characters).';
          }
          return value.length > 1000 ? 'Please keep your message to 1,000 characters or fewer.' : '';
        default:
          return '';
      }
    }

    function showState(el, message) {
      var error = document.getElementById(el.getAttribute('aria-describedby').split(' ').filter(function (id) {
        return /-error$/.test(id);
      })[0]);

      el.setAttribute('aria-invalid', message ? 'true' : 'false');

      if (error) {
        error.textContent = message;
        error.hidden = !message;
      }
    }

    function validate(el) {
      var message = messageFor(el);
      showState(el, message);
      return !message;
    }

    function setStatus(message, isError) {
      status.textContent = message;
      status.classList.toggle('is-error', !!isError);
    }

    controls.forEach(function (el) {
      // validate once the person leaves a field, then keep it live while they correct it
      el.addEventListener('blur', function () {
        if (el.value !== '' || el.getAttribute('aria-invalid') === 'true') {
          validate(el);
        }
      });

      el.addEventListener('input', function () {
        if (el.getAttribute('aria-invalid') === 'true') {
          validate(el);
        }
      });

      el.addEventListener('change', function () {
        if (el.tagName === 'SELECT') {
          validate(el);
        }
      });
    });

    form.addEventListener('submit', function (event) {
      event.preventDefault();
      setStatus('', false);

      var invalid = controls.filter(function (el) {
        return !validate(el);
      });

      if (invalid.length) {
        invalid[0].focus();
        setStatus(invalid.length === 1
          ? 'Please check the highlighted field.'
          : 'Please check the ' + invalid.length + ' highlighted fields.', true);
        return;
      }

      form.reset();
      controls.forEach(function (el) {
        showState(el, '');
      });

      setStatus('Thanks — this is a demo enquiry. Nothing was sent.', false);
      status.focus();
    });
  })();
})();
