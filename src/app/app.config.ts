import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, withHashLocation } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import {Circle,TextSearch,SearchSlash,CircleAlertIcon,FileSearch,TriangleAlert, LucideAngularModule, Rocket, LayoutDashboard, MoveRight, BookOpen, Mail, Settings,CalendarDays,CircleOff,CircleCheck,ReceiptText,CreditCard,FileText,Wallet,ShieldCheck,Palette,User,Bookmark,CheckCircle2,Award,PlayCircle,Flame,Calendar,Zap,
  Route,CodeXml,Cpu,CloudUpload,HamIcon,FilePlus,MessageSquareQuote,ListTodo,ChartBarIcon,FileQuestionMark,Users,FileAxis3dIcon,SquareChartGantt,
  LogOutIcon,PowerOff,ViewIcon
 } from 'lucide-angular';
import { provideHttpClient, withFetch, withInterceptors } from '@angular/common/http';
import { apiInterceptor } from './Interceptor/api.interceptor';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideToastr } from 'ngx-toastr';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }),
    importProvidersFrom(LucideAngularModule.pick({Circle,FilePlus,ChartBarIcon,FileQuestionMark,FileAxis3dIcon,Users,ListTodo,SquareChartGantt,MessageSquareQuote,TextSearch,FileSearch,CircleAlertIcon,TriangleAlert, SearchSlash,Rocket,LayoutDashboard,MoveRight, BookOpen, Mail, Settings,CalendarDays,CircleOff,CircleCheck,ReceiptText,CreditCard,FileText,Wallet,ShieldCheck,Palette,User,Bookmark,CheckCircle2,Award,PlayCircle,Flame,Calendar,Zap,
      Route,CodeXml,Cpu,CloudUpload, HamIcon,LogOutIcon,PowerOff,ViewIcon
     })),
     provideRouter(routes,withHashLocation()), provideClientHydration(withEventReplay()), provideHttpClient(withInterceptors([apiInterceptor]),withFetch()),provideAnimations(), 
  provideToastr({
    timeOut: 3000,
    positionClass: 'toast-top-right',
    preventDuplicates: true,
    progressBar: true, // प्रोग्रेस बार दिसेल
    progressAnimation: 'increasing'
  }),
provideHttpClient()]
};
