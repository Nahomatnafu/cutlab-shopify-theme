/**
 * Theme JavaScript
 * Julian Prohaska Shopify Theme
 */

(function() {
  'use strict';

  // ============================================
  // MOBILE MENU
  // ============================================
  function initMobileMenu() {
    const menuToggle = document.querySelector('[data-mobile-menu-toggle]');
    const menuClose = document.querySelector('[data-mobile-menu-close]');
    const menuOverlay = document.querySelector('[data-mobile-menu-overlay]');
    const menu = document.querySelector('[data-mobile-menu]');
    const menuLinks = document.querySelectorAll('[data-mobile-menu-link]');

    if (!menuToggle || !menu) return;

    function openMenu() {
      menu.classList.add('active');
      if (menuOverlay) menuOverlay.classList.add('active');
      document.body.style.overflow = 'hidden';
    }

    function closeMenu() {
      menu.classList.remove('active');
      if (menuOverlay) menuOverlay.classList.remove('active');
      document.body.style.overflow = '';
    }

    menuToggle.addEventListener('click', openMenu);
    
    if (menuClose) {
      menuClose.addEventListener('click', closeMenu);
    }
    
    if (menuOverlay) {
      menuOverlay.addEventListener('click', closeMenu);
    }

    // Close menu when clicking on a link
    menuLinks.forEach(link => {
      link.addEventListener('click', closeMenu);
    });

    // Close menu on ESC key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && menu.classList.contains('active')) {
        closeMenu();
      }
    });
  }

  // ============================================
  // NEWSLETTER FORM
  // ============================================
  function initNewsletterForm() {
    const form = document.querySelector('[data-newsletter-form]');
    if (!form) return;

    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      
      const emailInput = form.querySelector('input[type="email"]');
      const email = emailInput.value;

      // Here you would integrate with Shopify's customer API or a newsletter service
      console.log('Newsletter signup:', email);
      
      // Show success message (you can customize this)
      alert('Thank you for subscribing!');
      
      // Reset form
      form.reset();
    });
  }

  // ============================================
  // CART FUNCTIONALITY
  // ============================================
  function initCart() {
    const cartIcon = document.querySelector('[data-cart-icon]');
    if (!cartIcon) return;

    // Update cart count
    function updateCartCount() {
      fetch('/cart.js')
        .then(response => response.json())
        .then(cart => {
          const count = cart.item_count;
          const countElement = document.querySelector('[data-cart-count]');
          if (countElement) {
            countElement.textContent = count;
            countElement.style.display = count > 0 ? 'block' : 'none';
          }
        })
        .catch(error => console.error('Error fetching cart:', error));
    }

    // Initialize cart count on page load
    updateCartCount();

    // Listen for cart updates
    document.addEventListener('cart:updated', updateCartCount);
  }

  // ============================================
  // PRODUCT COLOR SWATCHES
  // ============================================
  function initColorSwatches() {
    const swatches = document.querySelectorAll('.color-swatch');
    
    swatches.forEach(swatch => {
      swatch.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        
        const productCard = swatch.closest('.product-card');
        const allSwatches = productCard.querySelectorAll('.color-swatch');
        
        // Remove active class from all swatches
        allSwatches.forEach(s => s.classList.remove('active'));
        
        // Add active class to clicked swatch
        swatch.classList.add('active');
        
        // Here you could update the product image based on the selected color
        // const colorName = swatch.getAttribute('data-color');
        // updateProductImage(productCard, colorName);
      });
    });
  }

  // ============================================
  // SMOOTH SCROLL FOR ANCHOR LINKS
  // ============================================
  function initSmoothScroll() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
      link.addEventListener('click', (e) => {
        const href = link.getAttribute('href');
        if (href === '#') return;
        
        const target = document.querySelector(href);
        if (target) {
          e.preventDefault();
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      });
    });
  }

  // ============================================
  // LAZY LOAD IMAGES
  // ============================================
  function initLazyLoad() {
    const images = document.querySelectorAll('img[data-src]');
    
    if ('IntersectionObserver' in window) {
      const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.dataset.src;
            img.removeAttribute('data-src');
            imageObserver.unobserve(img);
          }
        });
      });

      images.forEach(img => imageObserver.observe(img));
    } else {
      // Fallback for browsers that don't support IntersectionObserver
      images.forEach(img => {
        img.src = img.dataset.src;
        img.removeAttribute('data-src');
      });
    }
  }

  // ============================================
  // SEARCH FUNCTIONALITY
  // ============================================
  function initSearch() {
    const searchToggle = document.querySelector('[data-search-toggle]');
    const searchOverlay = document.querySelector('[data-search-overlay]');
    const searchClose = document.querySelector('[data-search-close]');
    const searchInput = document.querySelector('[data-search-input]');

    if (!searchToggle) return;

    function openSearch() {
      if (searchOverlay) {
        searchOverlay.classList.add('active');
        if (searchInput) searchInput.focus();
        document.body.style.overflow = 'hidden';
      }
    }

    function closeSearch() {
      if (searchOverlay) {
        searchOverlay.classList.remove('active');
        document.body.style.overflow = '';
      }
    }

    searchToggle.addEventListener('click', openSearch);
    
    if (searchClose) {
      searchClose.addEventListener('click', closeSearch);
    }

    // Close on ESC key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && searchOverlay && searchOverlay.classList.contains('active')) {
        closeSearch();
      }
    });
  }

  // ============================================
  // INITIALIZE ALL
  // ============================================
  function init() {
    initMobileMenu();
    initNewsletterForm();
    initCart();
    initColorSwatches();
    initSmoothScroll();
    initLazyLoad();
    initSearch();
  }

  // Run on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  // Expose some functions globally for Shopify sections
  window.theme = window.theme || {};
  window.theme.init = init;
  window.theme.initMobileMenu = initMobileMenu;
  window.theme.initCart = initCart;

})();

