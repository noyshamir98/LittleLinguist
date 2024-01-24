import { Component, Inject } from '@angular/core';
import {MAT_DIALOG_DATA,MatDialogRef,MatDialogTitle,
MatDialogContent,MatDialogActions,MatDialogClose} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';

@Component({
  imports: [MatButtonModule,MatDialogTitle,MatDialogContent,MatDialogActions,MatDialogClose],
  standalone: true,
  selector: 'app-delete-person-dialog',
  templateUrl: './delete-person-dialog.component.html',
  styleUrls: ['./delete-person-dialog.component.css']
})
export class DeletePersonDialogComponent {
  constructor(
   public dialogRef: MatDialogRef<DeletePersonDialogComponent>,
   @Inject(MAT_DIALOG_DATA) public name: string,) {}
  }
  

