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

  constructor(private housingService: HousingService) {}

  ngOnInit() {}
}
