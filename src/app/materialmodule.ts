import {MatButtonModule, MatCheckboxModule, MatIconModule, MatToolbarModule, MatFormFieldModule, MatOptionModule, MatSelectModule, MatInputModule, MatCardModule, MatTableModule, MatSortModule, MatDialogModule, MatListModule, MatTabsModule,MatExpansionModule, MatMenuModule} from '@angular/material';
import { NgModule } from '@angular/core';

@NgModule({
    imports: [MatButtonModule, MatCheckboxModule, MatIconModule, MatToolbarModule, MatFormFieldModule, MatOptionModule, MatSelectModule, MatInputModule,MatCardModule, MatTableModule, MatSortModule, MatDialogModule,MatListModule, MatTabsModule, MatExpansionModule, MatMenuModule],

    exports: [MatButtonModule, MatCheckboxModule, MatIconModule, MatToolbarModule, MatFormFieldModule, MatOptionModule, MatSelectModule, MatInputModule,MatCardModule, MatTableModule, MatSortModule, MatDialogModule,MatListModule, MatTabsModule, MatExpansionModule, MatMenuModule],
})

export class MaterialModule { }