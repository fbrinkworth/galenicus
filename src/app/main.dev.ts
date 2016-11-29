import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app.module';

export const ENV = {
  API_URL    : 'https://gsk-mydoc-uat-bup.appspot.com'
};

platformBrowserDynamic().bootstrapModule(AppModule);
