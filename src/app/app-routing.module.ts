import { CreateClienteComponent } from './create-cliente/create-cliente.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClienteListComponent } from './cliente-list/cliente-list.component';
import { UpdateClienteComponent } from './update-cliente/update-cliente.component';

const routes: Routes = [
  { path: '', redirectTo: 'employee', pathMatch: 'full' },
  { path: 'client', component: ClienteListComponent },
  { path: 'add', component: CreateClienteComponent },
  { path: 'update/:id', component: UpdateClienteComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
