import { Component, OnInit } from '@angular/core';
import { ContainerComponent } from '../../componentes/container/container.component';
import { SeparadorComponent } from "../../componentes/separador/separador.component";
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgClass } from '@angular/common';
import { RouterLink, RouterOutlet } from "@angular/router";
import { ContatoService } from '../../services/contato.service';

@Component({
  selector: 'app-contato-formulario',
  standalone: true,
  imports: [ContainerComponent, SeparadorComponent, ReactiveFormsModule, NgClass, RouterLink],
  templateUrl: './contato-formulario.component.html',
  styleUrl: './contato-formulario.component.css'
})
export class ContatoFormularioComponent implements OnInit{

  contatoForm!: FormGroup;

  constructor(private contatoService: ContatoService) {}

  ngOnInit(){
    this.iniciarFormulario();
  }

  iniciarFormulario(){
    this.contatoForm = new FormGroup({
      nome: new FormControl('', Validators.required),
      telefone: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      aniversario: new FormControl(''),
      redes: new FormControl(''),
      observacoes: new FormControl('')
    })
  }

  salvarContato() {
    const novoContato = this.contatoForm.value;
    this.contatoService.salvarContato(novoContato);
  }

  cancelarForm() {
    console.log("Formulário Cancelado!")
  }
  
}
