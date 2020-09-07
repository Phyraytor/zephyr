import VuePopover from './components/VuePopover.vue';

const VuePopoverPlugin = {
  install(Vue) {
    Vue.component(VuePopover.name, VuePopover);
  }
};

export default VuePopoverPlugin;