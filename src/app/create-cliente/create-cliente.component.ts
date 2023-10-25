import { ClienteService } from '../cliente.service';
import { Cliente } from '../cliente';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-cliente',
  templateUrl: './create-cliente.component.html',
  styleUrls: ['./create-cliente.component.css']
})
export class CreateClienteComponent implements OnInit {

  cliente: Cliente = new Cliente();
  submitted = false;

  constructor(private clientService: ClienteService,
    private router: Router) { }

  ngOnInit() {
  }

  newClient(): void {
    this.submitted = false;
    this.cliente = new Cliente();
  }

  save() {
    this.clientService
    .createCliente(this.cliente).subscribe(data => {
      console.log(data)
      this.cliente = new Cliente();
      this.gotoList();
    }, 
    error => console.log(error));
  }

  onSubmit() {
    this.submitted = true;
    this.save();    
  }

  gotoList() {
    this.router.navigate(['/client']);
  }
}
