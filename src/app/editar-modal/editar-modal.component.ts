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
import { FormsModule } from '@angular/forms';
import { MatInput } from '@angular/material/input';

@Component({
  selector: 'app-editar-modal',
  standalone: true,
  imports: [MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatDialogClose,MatFormField,MatInput,MatLabel,FormsModule],
  templateUrl: './editar-modal.component.html',
  styleUrl: './editar-modal.component.css'
})
export class EditarModalComponent {
  readonly dialogRef = inject(MatDialogRef<EditarModalComponent>);
  data = inject(MAT_DIALOG_DATA) as {product:Product};
}
