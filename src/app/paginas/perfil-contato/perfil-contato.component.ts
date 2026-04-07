import { Component, OnInit } from '@angular/core';
import { ContainerComponent } from "../../componentes/container/container.component";
import { Contato } from '../../componentes/contato/contato';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-perfil-contato',
  standalone: true,
  imports: [ContainerComponent, CommonModule, RouterLink],
  templateUrl: './perfil-contato.component.html',
  styleUrl: './perfil-contato.component.css'
})
export class PerfilContatoComponent implements OnInit {

  contato: Contato = {
    id: 0,
    nome: 'dev',
    telefone: '',
    email: 'dev@email.com',
    aniversario: '12/10/1990',
    redes: ''
  }

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit(){
    this.activatedRoute.snapshot.paramMap.get('id')
  }

}
