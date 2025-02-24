import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UsuarioComponent } from './usuario/usuario.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,UsuarioComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'curso';
}
