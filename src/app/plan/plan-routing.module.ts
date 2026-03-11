import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActiveComponent } from './active/active.component';
import { DActiveComponent } from './d-active/d-active.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { GatewayComponent } from './gateway/gateway.component';
import { ReferenceComponent } from './reference/reference.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'planrefer',
    pathMatch:'full'
  },
  {
    path:'aplan',
    component:ActiveComponent
  },
  {
    path:'dplan',
    component:DActiveComponent
  },
  {
    path:'invoice',
    component:InvoiceComponent
  },
  {
    path:'payment',
    component:GatewayComponent
  },
  {
    path:'planrefer',
    component:ReferenceComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlanRoutingModule { }
