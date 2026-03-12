import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

import { ContatoFormularioComponent } from "./paginas/contato-formulario/contato-formulario.component";
import { ListaContatosComponent } from "./paginas/lista-contatos/lista-contatos.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, ContatoFormularioComponent, ListaContatosComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
}
