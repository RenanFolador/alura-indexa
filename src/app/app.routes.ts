import { Routes } from '@angular/router';
import { ContatoFormularioComponent } from './paginas/contato-formulario/contato-formulario.component';
import { ListaContatosComponent } from './paginas/lista-contatos/lista-contatos.component';
import { PerfilContatoComponent } from './paginas/perfil-contato/perfil-contato.component';

export const routes: Routes = [
    {
        path: 'formulario',
        component: ContatoFormularioComponent
    },
    {
        path: 'lista-contatos',
        component: ListaContatosComponent
    },
    {
        path: 'perfil-contato/:id',
        component: PerfilContatoComponent
    },
    {
        path: '',
        redirectTo: '/lista-contatos',
        pathMatch: 'full'
    }
];
