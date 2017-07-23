import { COMPONENTS } from './components';
import { DIRECTIVES } from './directives';

const install = Vue => {
  if (install.installed) return;

  // Register components
  COMPONENTS.forEach(comp => {
    Vue.component(comp.name, comp);
  });

  // Register derectives
  DIRECTIVES.forEach(directive => {
    Vue.directive(directive.name, directive);
  });

  // Register services
  // SERVICES.forEach(service => {
  //   Vue[service.name] = Vue.prototype[service.name] = service;
  // });

  install.installed = true;
};

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
};

export default {
  install,
  version: process.env.LIB_VERSION
};
