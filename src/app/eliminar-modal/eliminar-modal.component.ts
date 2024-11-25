import { Component ,inject} from '@angular/core';
import { MatFormField,MatLabel } from '@angular/material/form-field';
import {MatDialog, MatDialogModule,
  MAT_DIALOG_DATA,
  MatDialogTitle,
  MatDialogContent,
  MatDialogActions,
  MatDialogClose,
    MatDialogRef,
} from '@angular/material/dialog';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-eliminar-modal',
  standalone: true,
  imports: [MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatDialogClose],
  templateUrl: './eliminar-modal.component.html',
  styleUrl: './eliminar-modal.component.css'
})
export class EliminarModalComponent {
   dialogRef = inject(MatDialogRef<EliminarModalComponent>);
  data = inject(MAT_DIALOG_DATA) as {product:Product};
}
