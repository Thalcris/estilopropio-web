import { Component, OnInit } from '@angular/core';
import { Cliente } from '../cliente';
import { ActivatedRoute, Router } from '@angular/router';
import { ClienteService } from '../cliente.service';

@Component({
  selector: 'app-update-cliente',
  templateUrl: './update-cliente.component.html',
  styleUrls: ['./update-cliente.component.css']
})
export class UpdateClienteComponent implements OnInit {

  correo: string;
  cliente: Cliente;

  constructor(private route: ActivatedRoute,private router: Router,
    private clientService: ClienteService) { }

  ngOnInit() {
    this.cliente = new Cliente();

    this.correo = this.route.snapshot.params['correo'];
    
    this.clientService.getCliente(this.correo)
      .subscribe(data => {
        console.log(data)
        this.cliente = data;
      }, error => console.log(error));
  }

  updateCliente() {
    this.clientService.updateCliente(this.cliente)
      .subscribe(data => {
        console.log(data);
        this.cliente = new Cliente();
        this.gotoList();
      }, error => console.log(error));
  }

  onSubmit() {
    this.updateCliente();    
  }

  gotoList() {
    this.router.navigate(['/client']);
  }
}
