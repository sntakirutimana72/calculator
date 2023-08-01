import { initialize, updateLogger } from './helpers/main.js';
import compute from './helpers/compute.js';

let state = {};

document.addEventListener('DOMContentLoaded', initialize);
document.addEventListener('click', ({ target }) => {
  if (target.classList.contains('key')) {
    state = compute(state, target.getAttribute('data-key'))
    updateLogger(state);
  }
});
