/**
 * Show modal and wait to be shown
 * @param  {Object} modal
 * @return {Promise}
 */
export function showModal(modal) {
  return () => new Promise(resolve => {
    modal.$on('shown', () => resolve());
    modal.show();
  });
}

/**
 * Click OK and wait to be hidden
 * @param  {Object} modal
 * @return {Promise}
 */
export function clickOk(modal) {
  return () => new Promise(resolve => {
    modal.$on('ok', () => resolve());
    modal.hide();
    modal.$emit('ok');
  })
}
