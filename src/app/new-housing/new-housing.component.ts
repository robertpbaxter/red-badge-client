import { Component, OnInit } from '@angular/core';
import { ListingService } from "../listing.service";
import { Listing } from "../listing";

@Component({
  selector: 'app-new-housing',
  templateUrl: './new-housing.component.html',
  styleUrls: ['./new-housing.component.css']
})
export class NewHousingComponent implements OnInit {

  constructor(private listingService: ListingService) { }

  submitListing(residenceType: string, rooms: string, bathrooms: string, address: string, petsAllowed: string, facilities: string, price: string) : void {
    this.listing(residenceType, rooms, bathrooms, address, petsAllowed, facilities, price)
  }

  listing(residenceType: string, rooms: string, bathrooms: string, address: string, petsAllowed: string, facilities: string, price: string) : void {
    this.listingService
    .listing({residenceType, rooms, bathrooms, address, petsAllowed, facilities, price} as Listing)
    .subscribe( results => {
      alert("Listing Added")
      console.log(results)
    })
  }

  ngOnInit() {
  }

}
