import { AfterViewInit, Component, inject, OnInit, ViewChild } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { Product } from '../models/product.model';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatSort, MatSortModule} from '@angular/material/sort';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule, MatLabel} from '@angular/material/form-field';
import { NgFor } from '@angular/common';
import { PrintHandlers } from 'typescript';
import { MatDialog } from '@angular/material/dialog';
import { DetallesModalComponent } from '../detalles-modal/detalles-modal.component';
import { EditarModalComponent } from '../editar-modal/editar-modal.component';
import { EliminarModalComponent } from '../eliminar-modal/eliminar-modal.component';
import { FormsModule } from '@angular/forms';
import { MatIcon } from '@angular/material/icon';
@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [NgFor,MatTableModule, MatPaginatorModule,MatFormFieldModule, MatInputModule,MatSortModule,FormsModule,MatInputModule,MatLabel,MatIcon],
  templateUrl: './productos.component.html',
  styleUrl: './productos.component.css'
})
export class ProductosComponent implements OnInit, AfterViewInit{
  dialog = inject(MatDialog);
  productList: Product [] = [];
  private productsServ = inject(ProductsService);
  dataSource: MatTableDataSource<any>;
 displayedColumns: string[] = ['id', 'title', 'image', 'actions'];
 @ViewChild(MatPaginator) paginator!: MatPaginator;
 @ViewChild(MatSort) sort!: MatSort;
 constructor(){
  
  this.dataSource = new MatTableDataSource(this.productList);
 }
  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  ngOnInit(): void {
    this.productsServ.getProducts().subscribe( (data:Product[]) =>{
      console.log(data);
      this.productList = data;
      this.dataSource.data=this.productList;
    });
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  abrirDetalles(product: Product){
    this.dialog.open(DetallesModalComponent, {
     
      data: { product },
    });
  }
  abrirEditar(product:Product){
    const dialogRef = this.dialog.open(EditarModalComponent, {
     data: { product },
    });

    dialogRef.afterClosed().subscribe((result: Product | undefined) => {
      if (result) {
        // Actualiza el producto en la lista local
        const index = this.productList.findIndex((p) => p.id === result.id);
        if (index !== -1) {
          this.productList[index] = result;
          this.dataSource.data = [...this.productList]; // Refrescar tabla
        }
      }
    });
  }
  abrirEliminar(product:Product){
    const dialogRef = this.dialog.open(EliminarModalComponent, {
      width: '300px',
      data: { product },
    });

    dialogRef.afterClosed().subscribe((confirmado: boolean) => {
      if (confirmado) {
        this.productList = this.productList.filter((p) => p.id !== product.id);
        this.dataSource.data = [...this.productList]; // Refrescar tabla
      }
    });
  }

}
