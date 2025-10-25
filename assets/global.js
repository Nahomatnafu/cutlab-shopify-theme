/**
 * Global JavaScript utilities
 * Loaded before theme.js
 */

// Debounce function for performance
function debounce(fn, wait) {
  let t;
  return (...args) => {
    clearTimeout(t);
    t = setTimeout(() => fn.apply(this, args), wait);
  };
}

// Fetch config for Shopify API calls
const fetchConfig = (type = 'json') => {
  return {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'Accept': `application/${type}` }
  };
};

// Publish custom event
function publish(event, data) {
  document.dispatchEvent(new CustomEvent(event, { detail: data }));
}

// Subscribe to custom event
function subscribe(event, callback) {
  document.addEventListener(event, callback);
}

// Trap focus within an element
function trapFocus(container, elementToFocus = container) {
  const elements = getFocusableElements(container);
  const first = elements[0];
  const last = elements[elements.length - 1];

  removeTrapFocus();

  container.setAttribute('tabindex', '-1');
  elementToFocus.focus();

  function handleFocus(event) {
    if (event.target !== container && event.target !== last && event.target !== first) return;

    document.addEventListener('keydown', handleKeydown);
  }

  function handleKeydown(event) {
    if (event.code.toUpperCase() !== 'TAB') return;

    if (event.target === last && !event.shiftKey) {
      event.preventDefault();
      first.focus();
    }

    if ((event.target === container || event.target === first) && event.shiftKey) {
      event.preventDefault();
      last.focus();
    }
  }

  document.addEventListener('focusout', handleFocus);
}

function removeTrapFocus(elementToFocus = null) {
  document.removeEventListener('focusout', handleFocus);
  document.removeEventListener('keydown', handleKeydown);

  if (elementToFocus) elementToFocus.focus();
}

function getFocusableElements(container) {
  return Array.from(
    container.querySelectorAll(
      "summary, a[href], button:enabled, [tabindex]:not([tabindex^='-']), [draggable], area, input:not([type=hidden]):enabled, select:enabled, textarea:enabled, object, iframe"
    )
  );
}

// Serialize form data
function serializeForm(form) {
  const obj = {};
  const formData = new FormData(form);
  for (const key of formData.keys()) {
    obj[key] = formData.get(key);
  }
  return JSON.stringify(obj);
}

// Expose utilities globally
window.theme = window.theme || {};
window.theme.utils = {
  debounce,
  fetchConfig,
  publish,
  subscribe,
  trapFocus,
  removeTrapFocus,
  getFocusableElements,
  serializeForm
};

