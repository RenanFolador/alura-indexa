import { Component, OnInit } from '@angular/core';
import { ContainerComponent } from '../../componentes/container/container.component';
import { SeparadorComponent } from "../../componentes/separador/separador.component";
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgClass } from '@angular/common';
import { Router, RouterLink, RouterOutlet } from "@angular/router";
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

  constructor(
    private contatoService: ContatoService,
    private router: Router
  ) {}

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
    this.contatoService.salvarContato(novoContato).subscribe(() => {
      this.contatoForm.reset();
      this.router.navigateByUrl('/lista-contatos');
    });
  }

  cancelarForm() {
    this.contatoForm.reset();
    this.router.navigateByUrl('/lista-contatos');
  }
  
}
