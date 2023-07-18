import { $withId, $html, $text } from './selectors.js';
import keys from './keys.js';

const createKey = ({ key, extraClass='' }) => (
  `<button type="button" class="key ${extraClass}" data-key="${key}">${key}</button>`
);

export const initialize = () => {
  $html($withId('keypad'), keys.map(createKey).join(''));
};

export const updateLogger = ({ next=0, operation, total }) => {
  const newValue = [ total, operation, next ].filter(val => val !== null).join('');
  $text($withId('logger'), newValue);
};
