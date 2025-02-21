import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UsuarioFormularioComponent } from './usuario-formulario/usuario-formulario.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,UsuarioFormularioComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'curso';
}
