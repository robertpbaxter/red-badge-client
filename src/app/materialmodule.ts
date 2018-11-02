import {MatButtonModule, MatCheckboxModule, MatIconModule, MatToolbarModule, MatFormFieldModule, MatOptionModule, MatSelectModule, MatInputModule, MatCardModule, MatTableModule, MatSortModule} from '@angular/material';
import { NgModule } from '@angular/core';

@NgModule({
    imports: [MatButtonModule, MatCheckboxModule, MatIconModule, MatToolbarModule, MatFormFieldModule, MatOptionModule, MatSelectModule, MatInputModule,MatCardModule, MatTableModule, MatSortModule],

    exports: [MatButtonModule, MatCheckboxModule, MatIconModule, MatToolbarModule, MatFormFieldModule, MatOptionModule, MatSelectModule, MatInputModule,MatCardModule, MatTableModule, MatSortModule],
})

export class MaterialModule { }