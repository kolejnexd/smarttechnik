(function () {
  const header = document.querySelector('.site-header');
  const burger = document.querySelector('.burger');
  const mobileMenu = document.getElementById('mobile-menu');

  const closeMobileMenu = function () {
    if (!mobileMenu || !burger) {
      return;
    }

    if (!mobileMenu.hasAttribute('hidden')) {
      mobileMenu.setAttribute('hidden', '');
    }
    burger.setAttribute('aria-expanded', 'false');
  };

  if (burger && mobileMenu) {
    burger.addEventListener('click', function () {
      const isHidden = mobileMenu.hasAttribute('hidden');
      if (isHidden) {
        mobileMenu.removeAttribute('hidden');
        burger.setAttribute('aria-expanded', 'true');
      } else {
        closeMobileMenu();
      }
    });

    mobileMenu.addEventListener('click', function (event) {
      if (event.target instanceof HTMLElement && event.target.closest('a')) {
        closeMobileMenu();
      }
    });

    document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape') {
        closeMobileMenu();
        if (burger) {
          burger.focus();
        }
      }
    });
  }

  const handleScroll = function () {
    if (!header) {
      return;
    }

    if (window.scrollY > 20) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();
})();
