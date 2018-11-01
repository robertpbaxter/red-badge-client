import { Component } from "@angular/core";
import { ListingService } from "../listing.service";
import { Listing } from "../listing";
import { CoordsService } from "../coords.service";
import { Coords } from "../coords";

@Component({
  selector: "app-new-housing",
  templateUrl: "./new-housing.component.html",
  styleUrls: ["./new-housing.component.css"]
})
export class NewHousingComponent {

  ngOnInit() {
    this.userListenings();
  }

  listings: Listing[];

  coords: Coords;
  startingLat = 39.7684;
  startingLng = -86.1581;
  lat: number = null;
  lng: number = null;

  constructor(
    private listingService: ListingService,
    private coordsService: CoordsService
  ) {}

  onPickedLocation(event) {
    this.lat = event.coords.lat;
    this.lng = event.coords.lng;
    console.log(this.lat, this.lng);
  }

  submitListing(
    residenceType: string,
    rooms: string,
    bathrooms: string,
    address: string,
    petsAllowed: string,
    facilities: string,
    price: string
  ): void {
    this.listing(
      residenceType,
      rooms,
      bathrooms,
      address,
      petsAllowed,
      facilities,
      price
    );
  }

  listing(
    residenceType: string,
    rooms: string,
    bathrooms: string,
    address: string,
    petsAllowed: string,
    facilities: string,
    price: string
  ): void {
    this.listingService
      .listing({
        residenceType,
        rooms,
        bathrooms,
        address,
        petsAllowed,
        facilities,
        price
      } as Listing)
      .subscribe(results => {
        alert("Listing Added");
        console.log(results.housing.id, this.lat, this.lng);
        this.newCoords(results.housing.id);
      });
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

userListenings(): void {
  this.listingService.userListings(). subscribe(listings => {
    console.log(listings);
    this.listings = listings
  })
}

deleteListing(listing: Listing): void {
  console.log("ticket deleted!", listing.id);
  this.listingService
    .deleteListing(listing.id)
    .subscribe(result => this.userListenings());
}

}
