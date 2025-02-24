import { Component, signal } from '@angular/core';
import { UsuarioFormularioComponent } from './usuario-formulario/usuario-formulario.component';
import { UsuarioListadoComponent } from './usuario-listado/usuario-listado.component';
import { FlexLayoutModule } from '@ngbracket/ngx-layout';
import { Usuario } from '../interface/usuario.interface';

@Component({
  selector: 'curso-usuario',
  standalone: true,
  imports: [
    FlexLayoutModule,
    UsuarioFormularioComponent,
    UsuarioListadoComponent
  ],
  templateUrl: './usuario.component.html',
  styleUrl: './usuario.component.scss'
})
export class UsuarioComponent {

  usuario = signal<Usuario | undefined>(undefined);

}
