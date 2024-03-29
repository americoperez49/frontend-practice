import { Routes } from '@angular/router';
import { EmailSubCardComponent } from './components/email-sub-card/email-sub-card.component';
import { PricingGridsComponent } from './components/pricing-grids/pricing-grids.component';

export const routes: Routes = [
  { path: '', component: EmailSubCardComponent },
  { path: 'email-sub-card', component: EmailSubCardComponent },
  { path: 'pricing-grids', component: PricingGridsComponent },
];
