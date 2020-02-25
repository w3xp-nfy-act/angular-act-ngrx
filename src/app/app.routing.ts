import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import {
  ObservableComponent
} from './examples/01-observable-example'

import {
  OperatorComponent,
} from './examples/02-operators-example';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: 'examples/01-observable-example',
    pathMatch: 'full'
  },
  {path: 'examples/01-observable-example', component: ObservableComponent},
  {path: 'examples/02-operators-example', component: OperatorComponent},
];

export const appRoutingProviders: any[] = [];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
