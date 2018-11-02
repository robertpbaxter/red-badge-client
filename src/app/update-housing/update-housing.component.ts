import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { MAT_DIALOG_DATA } from '@angular/material';
import { HousingService } from '../housing.service';
import { Housing } from '../housing';

@Component({
  selector: 'app-update-housing',
  templateUrl: './update-housing.component.html',
  styleUrls: ['./update-housing.component.css']
})
export class UpdateHousingComponent implements OnInit {

  housing: Housing

  constructor(public thisDialogReg: MatDialogRef<UpdateHousingComponent>, @Inject(MAT_DIALOG_DATA) public data: string, private housingService: HousingService) { }

  ngOnInit() {
  }

  updateHousing(  id: number,  residenceType: string,
    rooms: string,
    bathrooms: string,
    address: string,
    petsAllowed: string,
    facilities: string,
    price: string): void {
    this.housingService.updateHousing({
      id,
      residenceType,
      rooms,
      bathrooms,
      address,
      petsAllowed,
      facilities,
      price
    } as Housing).subscribe(results => {
      alert('listing updated');
      this.thisDialogReg.close('Confirm');
    })
  }

  onCloseCancel() {
    this.thisDialogReg.close('Cancel');

  }

}
