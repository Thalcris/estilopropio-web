import { Observable } from "rxjs";
import { ClienteService } from "../cliente.service";
import { Cliente } from "../cliente";
import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';

@Component({
  selector: 'app-cliente-list',
  templateUrl: './cliente-list.component.html',
  styleUrls: ['./cliente-list.component.css']
})
export class ClienteListComponent implements OnInit {
  clients: Observable<Cliente[]>;

  constructor(private clientService: ClienteService,
    private router: Router) {}

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.clients = this.clientService.getClientList();
  }

  deleteCliente(correo: string) {
    this.clientService.deleteCliente(correo)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  updateCliente(correo: string){
    this.router.navigate(['update', correo]);
  }
}
