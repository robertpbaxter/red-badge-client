import { Component, OnInit, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";
import { HousingService } from "../housing.service";
import { Housing } from "../housing";
import { CoordsService } from "../coords.service";
import { Coords } from "../coords";

@Component({
  selector: "app-update-housing",
  templateUrl: "./update-housing.component.html",
  styleUrls: ["./update-housing.component.css"]
})
export class UpdateHousingComponent implements OnInit {
  housing: Housing;
  coords: Coords;
  newLat = null;
  newLng = null;

  constructor(
    public thisDialogReg: MatDialogRef<UpdateHousingComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private housingService: HousingService,
    private coordsService: CoordsService
  ) {}

  ngOnInit() {
    this.coords = {
      id: null,
      housingId: null,
      lat: null,
      lng: null,
      latitude: null,
      longitude: null
    };
    this.getOneCoords(this.data.housing.id);
  }

  getOneCoords(id: number): void {
    this.coordsService.getOneCoords(id).subscribe(coords => {
      console.log(coords);
      this.coords = coords;
      this.newLat = coords.latitude;
      this.newLng = coords.longitude;
    });
  }

  onPickedLocation(event) {
    console.log(event);
    this.newLat = event.coords.lat;
    this.newLng = event.coords.lng;
  }

  updateHousing(
    id: number,
    residenceType: string,
    rooms: string,
    bathrooms: string,
    address: string,
    petsAllowed: string,
    facilities: string,
    price: string
  ): void {
    this.housingService
      .updateHousing({
        id,
        residenceType,
        rooms,
        bathrooms,
        address,
        petsAllowed,
        facilities,
        price
      } as Housing)
      .subscribe(results => {
        console.log(results);
        this.updateCoords(this.data.housing.id, this.newLat, this.newLng);
        // this.thisDialogReg.close("Confirm");
      });
  }

  updateCoords(housingId: number, lat: number, lng: number): void {
    console.log(housingId, lat, lng);
    this.coordsService
      .updateCoords({ housingId, lat, lng } as Coords)
      .subscribe(result => {
        console.log(result);
        this.thisDialogReg.close("Confirm");
      });
  }

  onCloseCancel() {
    this.thisDialogReg.close("Cancel");
  }
}
