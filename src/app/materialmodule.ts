import {MatButtonModule, MatCheckboxModule, MatIconModule, MatToolbarModule, MatFormFieldModule, MatOptionModule, MatSelectModule, MatInputModule, MatCardModule, MatTableModule, MatSortModule, MatDialogModule,} from '@angular/material';
import { NgModule } from '@angular/core';

@NgModule({
    imports: [MatButtonModule, MatCheckboxModule, MatIconModule, MatToolbarModule, MatFormFieldModule, MatOptionModule, MatSelectModule, MatInputModule,MatCardModule, MatTableModule, MatSortModule, MatDialogModule],

    exports: [MatButtonModule, MatCheckboxModule, MatIconModule, MatToolbarModule, MatFormFieldModule, MatOptionModule, MatSelectModule, MatInputModule,MatCardModule, MatTableModule, MatSortModule, MatDialogModule],
})

export class MaterialModule { }