import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { LucideAngularModule, Rocket } from 'lucide-angular';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { apiInterceptor } from './Interceptor/api.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }),
    importProvidersFrom(LucideAngularModule.pick({ Rocket })),
     provideRouter(routes), provideClientHydration(withEventReplay()), provideHttpClient(withInterceptors([apiInterceptor]),)]
};
