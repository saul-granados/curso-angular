import { AfterViewInit, Component, inject, Input, ViewChild } from '@angular/core';

import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { FlexLayoutModule } from '@ngbracket/ngx-layout';
import {MatButtonModule} from '@angular/material/button';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import { UsuarioService } from '../../services/usuario.service';
import { Usuario } from '../../interface/usuario.interface';
import { CommonModule } from '@angular/common';
import { MatSort, MatSortModule } from '@angular/material/sort';

@Component({
  selector: 'curso-usuario-listado',
  standalone: true,
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    FlexLayoutModule,
    MatButtonModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule
  ],
  templateUrl: './usuario-listado.component.html',
  styleUrl: './usuario-listado.component.scss'
})
export class UsuarioListadoComponent implements AfterViewInit  {

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  @Input() set usuario(obj: Usuario | undefined) {
    if( obj ) {
      //this.dataSource.data.push(obj);
      this.dataSource.data = [...this.dataSource.data, obj];
      this.dataSource._updateChangeSubscription();
    }
  }

  private _service = inject(UsuarioService);
  protected dataSource = new MatTableDataSource<Usuario>([]);
  protected displayedColumns: string[];

  constructor() {
    this.displayedColumns = ['idusuario', 'nombre', 'correo', 'estatus','fecha'];
    this.getUsuarios();
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  private getUsuarios(): void {
    this._service.findAll().subscribe({
      next: (usuario) => {
        this.dataSource.data = usuario;
      }, error: (err) => {
        console.error(err);
      }
    })
  }
}
