import {MatButtonModule, MatCheckboxModule, MatIconModule, MatToolbarModule, MatFormFieldModule, MatOptionModule, MatSelectModule, MatInputModule, MatCardModule} from '@angular/material';
import { NgModule } from '@angular/core';

@NgModule({
    imports: [MatButtonModule, MatCheckboxModule, MatIconModule, MatToolbarModule, MatFormFieldModule, MatOptionModule, MatSelectModule, MatInputModule,MatCardModule],

    exports: [MatButtonModule, MatCheckboxModule, MatIconModule, MatToolbarModule, MatFormFieldModule, MatOptionModule, MatSelectModule, MatInputModule,MatCardModule],
})

export class MaterialModule { }