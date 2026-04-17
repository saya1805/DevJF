import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import {Circle, LucideAngularModule, Rocket, LayoutDashboard, MoveRight, BookOpen, Mail, Settings,CalendarDays,CircleOff,CircleCheck,ReceiptText,CreditCard,FileText,Wallet,ShieldCheck,Palette,User,Bookmark,CheckCircle2,Award,PlayCircle,Flame,Calendar,Zap,
  Route,CodeXml,Cpu,CloudUpload,HamIcon
 } from 'lucide-angular';
import { provideHttpClient, withFetch, withInterceptors } from '@angular/common/http';
import { apiInterceptor } from './Interceptor/api.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }),
    importProvidersFrom(LucideAngularModule.pick({Circle, Rocket,LayoutDashboard,MoveRight, BookOpen, Mail, Settings,CalendarDays,CircleOff,CircleCheck,ReceiptText,CreditCard,FileText,Wallet,ShieldCheck,Palette,User,Bookmark,CheckCircle2,Award,PlayCircle,Flame,Calendar,Zap,
      Route,CodeXml,Cpu,CloudUpload, HamIcon
     })),
     provideRouter(routes), provideClientHydration(withEventReplay()), provideHttpClient(withInterceptors([apiInterceptor]),withFetch())]
};
