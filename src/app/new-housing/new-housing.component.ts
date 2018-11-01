import { Component } from "@angular/core";
import { ListingService } from "../listing.service";
import { Listing } from "../listing";

@Component({
  selector: "app-new-housing",
  templateUrl: "./new-housing.component.html",
  styleUrls: ["./new-housing.component.css"]
})
export class NewHousingComponent {
  startingLat = 39.7684;
  startingLng = -86.1581;
  lat = "";
  lng = "";

  constructor(private listingService: ListingService) {}

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
        console.log(results);
      });
  }
}
