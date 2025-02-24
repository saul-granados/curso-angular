import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { FlexLayoutModule } from '@ngbracket/ngx-layout';
import {MatButtonModule} from '@angular/material/button';
import { Form, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { UsuarioService } from '../../services/usuario.service';
import { Usuario } from '../../interface/usuario.interface';

@Component({
  selector: 'curso-usuario-formulario',
  standalone: true,
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    FlexLayoutModule,
    MatButtonModule,
    ReactiveFormsModule],
  templateUrl: './usuario-formulario.component.html',
  styleUrl: './usuario-formulario.component.scss',
})
export class UsuarioFormularioComponent implements OnInit {

  protected form!: FormGroup;

  @Output() usuario = new EventEmitter<Usuario>();

  constructor(
    private _formBuilder: FormBuilder,
    private _service: UsuarioService
  ) {

    this.initForm();

    // this._service.findAll().subscribe({
    //   next: (usuario) => {
    //     console.log(usuario);
    //   }, error: (err) => {
    //     console.error(err);
    //   }
    // })

  }

  ngOnInit(): void {

    // this.form.get('nombre')?.valueChanges.subscribe(nombre => {
    //   this.form.get('paterno')?.disable();
    //   if( nombre.length > 0 && nombre == 'saul') {
    //     this.form.get('paterno')?.enable();
    //   }
    // });

  }

  get f() {
    return this.form.controls;
  }


  onSubmit(): void {

    if( this.form.invalid) {

      this.form.markAllAsTouched();
      this.form.markAsDirty();

    } else {


      this._service.save(this.form.value).subscribe({
        next: (usuario) => {
          this.initForm(); // this.form.reset();
          this.usuario.emit(usuario);
        }
      })



    }


  }

  private initForm(): void {
    this.form = this._formBuilder.group({
      idusuario: new FormControl(null),
      nombre: new FormControl('',Validators.required),
      paterno: new FormControl({ value: '', disabled: false },Validators.required),
      materno: new FormControl(''),
      correo: new FormControl('',[Validators.required,Validators.email]),
      estatus: new FormControl(1),
    });
  }


}
