import { Component } from "@angular/core";
import { HousingService } from "../housing.service";
import { Housing } from "../housing";
import { CoordsService } from "../coords.service";
import { Coords } from "../coords";

@Component({
  selector: "app-new-housing",
  templateUrl: "./new-housing.component.html",
  styleUrls: ["./new-housing.component.css"]
})
export class NewHousingComponent {
  ngOnInit() {
    this.getUserHousing();
  }

  housing: Housing[];

  coords: Coords;
  startingLat = 39.7684;
  startingLng = -86.1581;
  lat: number = null;
  lng: number = null;

  constructor(
    private housingService: HousingService,
    private coordsService: CoordsService
  ) {}

  onPickedLocation(event) {
    this.lat = event.coords.lat;
    this.lng = event.coords.lng;
    console.log(this.lat, this.lng);
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
        alert("Listing Added");
        console.log(results.housing.id, this.lat, this.lng);
        this.newCoords(results.housing.id);
      });
      // window.location.href = '/new';?
  }

  newCoords(housingId: number): void {
    if (!this.lat || !this.lng) {
      alert("You must select a location on the map first");
    }
    let lat = this.lat;
    let lng = this.lng;
    this.coordsService
      .newCoords({ housingId, lat, lng } as Coords)
      .subscribe(results => console.log(results));
  }

  getUserHousing(): void {
    this.housingService.getUserHousing().subscribe(housing => {
      console.log(housing);
      this.housing = housing;
    });
  }

  deleteHousing(housing: Housing): void {
    console.log("ticket deleted!", housing.id);
    this.housingService
      .deleteHousing(housing.id)
      .subscribe(result => this.getUserHousing());
    this.coordsService.deleteCoords(housing.id).subscribe();
  }
}
