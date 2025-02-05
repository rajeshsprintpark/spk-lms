import { Component } from '@angular/core';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { MatRippleModule } from '@angular/material/core'; // Optional for ripple effects

@Component({
  selector: 'app-login-dialog',
  imports: [  MatDialogModule,
    MatTabsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCheckboxModule,
    MatIconModule,
    MatRippleModule,],
  templateUrl: './login-dialog.component.html',
  styleUrl: './login-dialog.component.css'
})
export class LoginDialogComponent {
  constructor(private dialogRef: MatDialogRef<LoginDialogComponent>) {}

  closeDialog() {
    this.dialogRef.close(); // This will close the dialog programmatically
  }

}