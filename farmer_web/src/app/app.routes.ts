import { Routes } from '@angular/router';
import { RegistrationComponent } from './components/registration/registration.component';
import { ListComponent } from './components/list/list.component';

export const routes: Routes = [
    {path:'register',component: RegistrationComponent},
    {path:'list',component: ListComponent}
];
