/*
============================================
; Title: In-N-Out Books
; Author: Mike Goldberg
; Date: 08/27/2020
; Modified By: Mike Goldberg
; Description: Angular Application using API
;===========================================
*/

import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
