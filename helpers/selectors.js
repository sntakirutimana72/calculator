/**
 * Sets the given :value to the :textContent attribute of the given HTMLElement :element.
 * If :value is undefined,
 * it returns the value of the :textContent attribute of given HTMLElement :element instead.
 * @param { HTMLElement } element
 * @param { string | undefined } value
 * @returns
 */
export const $text = (element, value) => {
  if (value === undefined) {
    return element.textContent
  }
  element.textContent = value;
};

/**
 * Sets an :innerHTML attribute of the :element to the :html
 * @param { HTMLElement } element
 * @param { string } html
 */
export const $html = (element, html) => {
  element.innerHTML = html;
};

/**
 * Query DOM element using any :id selector
 * @param { string } id
 * @returns
 */
export const $withId = (id) => document.getElementById(id);
