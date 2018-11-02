import { Component, OnInit, Input } from "@angular/core";
import { HousingService } from "../housing.service";

@Component({
  selector: "app-map-details",
  templateUrl: "./map-details.component.html",
  styleUrls: ["./map-details.component.css"]
})
export class MapDetailsComponent implements OnInit {
  @Input()
  housingId = this.housingId;
  housing = {
    id: "",
    residenceType: "",
    rooms: "",
    bathrooms: "",
    address: "",
    petsAllowed: "",
    facilities: "",
    price: ""
  };

  constructor(private housingService: HousingService) {}

  ngOnInit() {
    this.getOneHousing(this.housingId);
  }

  getOneHousing(id: number): void {
    this.housingService.getOneHousing(id).subscribe(housing => {
      this.housing = housing;
    });
  }
}
