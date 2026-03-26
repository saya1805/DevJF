import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    {
        path:'',
        redirectTo:'action',
        pathMatch:'full'
    },
    {
        path:'action',
        loadChildren:()=> import('../app/acc-action/acc-action.module').then(m=> m.AccActionModule)
    },
    {
        path:'courses',
        loadChildren:()=> import('../app/courses/courses.module').then(m=> m.CoursesModule)
    },
    {
        path:'plan',
        loadChildren:()=> import('../app/plan/plan.module').then(m=> m.PlanModule)
    },
    {
        path:'Settings',
        loadChildren:()=> import('../app/settings/settings.module').then(m=> m.SettingsModule)
    },
    {
        path:'home',
        component:HomeComponent
    },
];
