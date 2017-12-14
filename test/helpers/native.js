/**
 * Click in an element
 * @param  {DOM} el
 * @return {Promise}
 */
export function click(el) {
  return () => new Promise(resolve => {
    el.addEventListener('click', resolve)
    el.click();
  });
}
