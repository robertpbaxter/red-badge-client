import { Component, OnInit } from "@angular/core";
import { Coords } from "../coords";
import { CoordsService } from "../coords.service";

@Component({
  selector: "app-map",
  templateUrl: "./map.component.html",
  styleUrls: ["./map.component.css"]
})
export class MapComponent implements OnInit {
  coords: Coords[];
  startingLat = 39.7684;
  startingLng = -86.1581;

  constructor(private coordsService: CoordsService) {}

  ngOnInit() {
    this.fetchCoordinates();
  }

  fetchCoordinates(): void {
    this.coordsService.getAllCoords().subscribe(coords => {
      this.coords = coords;
    });
  }
}
