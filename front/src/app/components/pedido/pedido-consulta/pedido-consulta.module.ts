import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageHeaderModule } from '../../../shared';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PedidoConsultaComponent } from './pedido-consulta.component';
import { PedidoConsultaRoutingModule } from './pedido-consulta-routing.module';
import { 
          MatTableModule, 
          MatSortModule, 
          MatFormFieldModule, 
          MatInputModule, 
          MatPaginatorModule, 
          MatIconModule 
        } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    PedidoConsultaRoutingModule,
    PageHeaderModule,
    CommonModule,
    FormsModule,
    PageHeaderModule,
    ReactiveFormsModule,
    MatTableModule,
    MatSortModule,
    MatFormFieldModule,
    MatInputModule,
    MatPaginatorModule,
    MatIconModule,
    NgbModule
  ],
  declarations: [PedidoConsultaComponent]
})
export class PedidoConsultaModule { }
