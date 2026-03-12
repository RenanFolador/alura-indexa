import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet, RouterLink } from '@angular/router';
import { CabecalhoComponent } from '../../componentes/cabecalho/cabecalho.component';
import { ContainerComponent } from '../../componentes/container/container.component';
import { ContatoComponent } from '../../componentes/contato/contato.component';
import { SeparadorComponent } from '../../componentes/separador/separador.component';
import { ContatoFormularioComponent } from '../contato-formulario/contato-formulario.component';

interface Contato {
  id: number
  nome: string
  telefone: string
}

import agenda from '../../agenda.json'

@Component({
  selector: 'app-lista-contatos',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, ContainerComponent, CabecalhoComponent, SeparadorComponent, ContatoComponent, FormsModule, ContatoFormularioComponent, RouterLink],
  templateUrl: './lista-contatos.component.html',
  styleUrl: './lista-contatos.component.css'
})
export class ListaContatosComponent {
  alfabeto: string = 'abcdefghijklmnopqrstuvwxyz'
  contatos: Contato[] = agenda;

  filtroPorTexto: string = ''

  private removerAcentos(texto: string): string {
    return texto.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  }

  filtrarContatosPorTexto(): Contato[] {
    if(!this.filtroPorTexto){
      return this.contatos
    }
    return this.contatos.filter(contato => {
      return this.removerAcentos(contato.nome).toLowerCase().includes(this.removerAcentos(this.filtroPorTexto).toLowerCase())
    })
  }

  filtrarContatosPorLetraInicial(letra: string): Contato[] {
    return this.filtrarContatosPorTexto().filter( contato => {
      return this.removerAcentos(contato.nome).toLowerCase().startsWith(letra)
    })
  }
}
