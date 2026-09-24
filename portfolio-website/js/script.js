(function () {
  var toggle = document.getElementById('nav-toggle');
  var nav = document.getElementById('primary-navigation');

  if (!toggle || !nav) {
    return;
  }

  function setOpen(isOpen) {
    nav.classList.toggle('nav-links-open', isOpen);
    toggle.setAttribute('aria-expanded', String(isOpen));
    toggle.textContent = isOpen ? 'Close' : 'Menu';
  }

  toggle.addEventListener('click', function () {
    var isOpen = !nav.classList.contains('nav-links-open');
    setOpen(isOpen);
  });

  nav.addEventListener('click', function (event) {
    if (event.target.matches('.nav-link')) {
      setOpen(false);
    }
  });

  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape' && nav.classList.contains('nav-links-open')) {
      setOpen(false);
      toggle.focus();
    }
  });
})();

(function () {
  var buttons = document.querySelectorAll('[data-copy]');

  if (!buttons.length || !navigator.clipboard || !navigator.clipboard.writeText) {
    return;
  }

  buttons.forEach(function (button) {
    button.hidden = false;
    button.setAttribute('aria-live', 'polite');

    button.addEventListener('click', function () {
      navigator.clipboard.writeText(button.dataset.copy).then(function () {
        var original = button.textContent;
        button.textContent = 'Copied';
        setTimeout(function () {
          button.textContent = original;
        }, 1600);
      });
    });
  });
})();

(function () {
  var group = document.querySelector('[data-filters]');

  if (!group) {
    return;
  }

  var buttons = group.querySelectorAll('[data-filter]');
  var rows = document.querySelectorAll('.idx__row');
  var status = document.getElementById('idx-status');

  group.hidden = false;

  buttons.forEach(function (button) {
    button.addEventListener('click', function () {
      var filter = button.dataset.filter;
      var shown = 0;

      buttons.forEach(function (other) {
        other.setAttribute('aria-pressed', String(other === button));
      });

      rows.forEach(function (row) {
        var match = filter === 'all' || row.dataset.category === filter;
        row.hidden = !match;
        if (match) {
          shown += 1;
        }
      });

      if (status) {
        status.textContent = 'Showing ' + shown + ' of ' + rows.length + ' projects';
      }
    });
  });
})();

(function () {
  var form = document.getElementById('contact-form');

  if (!form) {
    return;
  }

  var status = document.getElementById('form-status');

  form.addEventListener('submit', function (event) {
    event.preventDefault();

    var name = form.elements.name.value.trim();
    var email = form.elements.email.value.trim();
    var message = form.elements.message.value.trim();
    var topic = form.elements.topic ? form.elements.topic.value : '';
    var subject = 'Portfolio message from ' + name;
    var body = message + '\n\n' + name + '\n' + email + (topic ? '\nTopic: ' + topic : '');

    window.location.href = form.dataset.mailto +
      '?subject=' + encodeURIComponent(subject) +
      '&body=' + encodeURIComponent(body);

    if (status) {
      status.textContent = 'Opening your email app. If nothing happens, email ' + form.dataset.mailto.replace('mailto:', '') + ' directly.';
    }
  });
})();

(function () {
  var ticker = document.querySelector('[data-ticker]');

  if (!ticker || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    return;
  }

  ticker.querySelectorAll('.ticker__row').forEach(function (row) {
    var list = row.querySelector('.ticker__list');
    var track = document.createElement('div');
    var copy = list.cloneNode(true);

    track.className = 'ticker__track';
    copy.setAttribute('aria-hidden', 'true');
    copy.removeAttribute('aria-label');
    row.insertBefore(track, list);
    track.appendChild(list);
    track.appendChild(copy);
  });

  ticker.classList.add('ticker--live');

  var toggle = ticker.querySelector('.ticker__toggle');

  if (toggle) {
    toggle.hidden = false;
    toggle.addEventListener('click', function () {
      var paused = ticker.classList.toggle('ticker--paused');
      toggle.setAttribute('aria-pressed', String(paused));
      toggle.textContent = paused ? 'Play' : 'Pause';
    });
  }
})();

(function () {
  var root = document.documentElement;
  var item = document.querySelector('[data-theme-item]');
  var button = document.getElementById('theme-toggle');

  if (!item || !button) {
    return;
  }

  function apply(theme) {
    if (theme === 'dark') {
      root.setAttribute('data-theme', 'dark');
    } else {
      root.removeAttribute('data-theme');
    }
    button.setAttribute('aria-pressed', String(theme === 'dark'));
  }

  apply(root.getAttribute('data-theme') === 'dark' ? 'dark' : 'light');
  item.hidden = false;

  button.addEventListener('click', function () {
    var next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    apply(next);
    try {
      localStorage.setItem('tv-theme', next);
    } catch (error) {}
  });
})();

(function () {
  var targets = document.querySelectorAll(
    '.work__head, .tile, .build__head, .cap, .abt, .editor, .toolbox__head, ' +
    '.how__tile, .split__side, .msg-card, .bento, .int__copy, .int__visual, .tickets, .els, .case__top, .case__bottom, .summary__grid, .idx__intro, .idx__row, .areas, .fx, .resume__head, .rs, .more__bar, .cta__grid > *'
  );

  if (!('IntersectionObserver' in window) ||
      window.matchMedia('(prefers-reduced-motion: reduce)').matches ||
      !targets.length) {
    return;
  }

  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (!entry.isIntersecting) {
        return;
      }
      var el = entry.target;
      observer.unobserve(el);
      el.classList.add('is-revealed');
      // hand the element back to its normal styles (hover transforms, transitions) once it has faded in
      setTimeout(function () {
        el.removeAttribute('data-reveal');
        el.classList.remove('is-revealed');
        el.style.removeProperty('--reveal-delay');
      }, 900);
    });
  }, { rootMargin: '0px 0px -8% 0px' });

  targets.forEach(function (el, index) {
    // anything already on screen at load stays put; only content below the fold animates in
    if (el.getBoundingClientRect().top < window.innerHeight) {
      return;
    }
    el.setAttribute('data-reveal', '');
    el.style.setProperty('--reveal-delay', (index % 3) * 0.08 + 's');
    observer.observe(el);
  });

  document.documentElement.classList.add('reveal-ready');
})();
