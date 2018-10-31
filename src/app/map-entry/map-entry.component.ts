import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map-entry',
  templateUrl: './map-entry.component.html',
  styleUrls: ['./map-entry.component.css']
})
export class MapEntryComponent implements OnInit {

  lat = 39.7684
  lng = -86.1581

  constructor() { }

  ngOnInit() {
  }

  onPickedLocation(event) {
    console.log(event)
    this.lat = event.coords.lat
    this.lng = event.coords.lng
  }
}
