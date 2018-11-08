import { Component, OnInit, Input } from '@angular/core';
import { CoordsService } from "../coords.service";

@Component({
  selector: 'app-mini-map',
  templateUrl: './mini-map.component.html',
  styleUrls: ['./mini-map.component.css']
})
export class MiniMapComponent implements OnInit {
  @Input() id = this.id
  lat: number;
  lng: number;

  constructor(private coordsService: CoordsService) { }

  ngOnInit() {
    this.getOneCoords(this.id)
  }

  getOneCoords(id: number): void {
    this.coordsService.getOneCoords(id).subscribe(coords => {
      console.log(coords)
      this.lat = coords.latitude;
      this.lng = coords.longitude;
    });
  }

}
