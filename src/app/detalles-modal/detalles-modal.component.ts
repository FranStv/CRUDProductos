import { Component ,inject} from '@angular/core';
import {MatDialog, MatDialogModule,
  MAT_DIALOG_DATA,
  MatDialogTitle,
  MatDialogContent,
  MatDialogActions,
  MatDialogClose,
} from '@angular/material/dialog';

import { Product } from '../models/product.model';

@Component({
  selector: 'app-detalles-modal',
  standalone: true,
  imports: [MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatDialogClose,],
  templateUrl: './detalles-modal.component.html',
  styleUrl: './detalles-modal.component.css'
})
export class DetallesModalComponent {
  data = inject(MAT_DIALOG_DATA) as {product:Product};
  
}
