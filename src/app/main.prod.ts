import { platformBrowser } from '@angular/platform-browser';
import { enableProdMode } from '@angular/core';

import { AppModuleNgFactory } from './app.module.ngfactory';

export const ENV = {
  API_URL    : 'https://gsk-mydoc-uat-bup.appspot.com'
};

enableProdMode();
platformBrowser().bootstrapModuleFactory(AppModuleNgFactory);
