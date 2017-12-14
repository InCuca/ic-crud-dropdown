export function submitForm(form) {
  return () => new Promise(resolve => {
    form.$on('input', resolve);
    form.submit();
  })
}
