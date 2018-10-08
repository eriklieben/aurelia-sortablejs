import {Aurelia} from 'aurelia-framework'
import environment from './environment';
import logger from './logger';

export function configure(aurelia: Aurelia) {
  aurelia.use
    .standardConfiguration()
    .feature('resources')
    .plugin("aurelia-sortablejs");

  if (environment.debug) {
    logger();
  }

  if (environment.testing) {
    aurelia.use.plugin('aurelia-testing');
  }

  return aurelia.start().then(() => aurelia.setRoot());
}

