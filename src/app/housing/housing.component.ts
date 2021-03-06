import { Component } from "@angular/core";
import { HousingService } from "../housing.service";
import { Housing } from "../housing";
import { CoordsService } from "../coords.service";
import { Coords } from "../coords";
import { MatDialog, MatDialogConfig } from "@angular/material";
import { UpdateHousingComponent } from "../update-housing/update-housing.component";

@Component({
  selector: "app-housing",
  templateUrl: "./housing.component.html",
  styleUrls: ["./housing.component.css"]
})
export class HousingComponent {
  dialogResult = "";

  ngOnInit() {
    this.getUserHousing();
  }

  housing: Housing[];
  editHousing: Housing;

  coords: Coords;
  startingLat = 39.7684;
  startingLng = -86.1581;
  lat: number = null;
  lng: number = null;

  constructor(
    private housingService: HousingService,
    private coordsService: CoordsService,
    public dialog: MatDialog
  ) {}

  openDialog(housing: Housing) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    dialogConfig.data = {
      housing: housing
    };
    this.dialog.open(UpdateHousingComponent, dialogConfig);
  }

  onPickedLocation(event) {
    this.lat = event.coords.lat;
    this.lng = event.coords.lng;
  }

  submitHousing(
    residenceType: string,
    rooms: string,
    bathrooms: string,
    address: string,
    petsAllowed: string,
    facilities: string,
    price: string
  ): void {
    this.newHousing(
      residenceType,
      rooms,
      bathrooms,
      address,
      petsAllowed,
      facilities,
      price
    );
  }

  newHousing(
    residenceType: string,
    rooms: string,
    bathrooms: string,
    address: string,
    petsAllowed: string,
    facilities: string,
    price: string
  ): void {
    if (!this.lat || !this.lng) {
      alert("You must select a location on the map first");
    } else {
      this.housingService
        .newHousing({
          residenceType,
          rooms,
          bathrooms,
          address,
          petsAllowed,
          facilities,
          price
        } as Housing)
        .subscribe(results => {
          if (results.housing.id) {
            this.newCoords(results.housing.id);
          }
        });
    }
  }

  newCoords(housingId: number): void {
    let lat = this.lat;
    let lng = this.lng;
    this.coordsService
      .newCoords({ housingId, lat, lng } as Coords)
      .subscribe(results => {
        if (results.coords.id) {
          alert("Listing Added");
          window.location.href = "/home";
        }
      });
  }

  getUserHousing(): void {
    this.housingService.getUserHousing().subscribe(housing => {
      this.housing = housing.sort((a, b) => {
        let idA = a.id;
        let idB = b.id;
        if (idA < idB) {
          return -1;
        }
        if (idA > idB) {
          return 1;
        }
      });
    });
  }

  updateHousing(housing: Housing): void {
    this.housingService
      .updateHousing(housing)
      .subscribe(results => this.getUserHousing());
  }

  deleteHousing(housing: Housing): void {
    this.housingService
      .deleteHousing(housing.id)
      .subscribe(result => this.getUserHousing());
    this.coordsService.deleteCoords(housing.id).subscribe();
  }
}
