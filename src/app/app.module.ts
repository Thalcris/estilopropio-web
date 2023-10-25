import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateClienteComponent } from './create-cliente/create-cliente.component';
import { ClienteListComponent } from './cliente-list/cliente-list.component';
import { HttpClientModule } from '@angular/common/http';
import { UpdateClienteComponent } from './update-cliente/update-cliente.component';
@NgModule({
  declarations: [
    AppComponent,
    CreateClienteComponent,
    ClienteListComponent,
    UpdateClienteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
