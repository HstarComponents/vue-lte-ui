export default {
  name: 'lte-tooltip',
  bind(el, binding) {
    el.$$tooltip = binding.value;
    let $el = $(el);
    $el.tooltip({
      title() {
        return el.$$tooltip;
      }
    });
  },
  update(el, binding) {
    el.$$tooltip = binding.value;
  },
  unbind(el, binding) {
    let $el = $(el);
    $el.off('mouseenter');
  }
};
