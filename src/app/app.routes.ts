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
    }
];
