import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  title: 'Map'
  startingLat = 39.7684
  startingLng = -86.1581
  points= [
    {
    
      lat: 38.7684,
      lng: -87.158
    },
    {
      lat: 39.7684,
      lng: -86.1570
    },
    {
      lat: 39.50,
      lng: -86.1570
    },
    {
      lat: 39.301,
      lng: -86.1570
    },
    {
      lat: 39.9,
      lng: -86.1570
    }
  ]



  constructor() { }

  ngOnInit() {


  }
  onPickedLocation(event) {
    console.log(this.points);
    console.log(this.points[0])
    this.points[0].lat= event.coords.lat
    this.points[0].lng= event.coords.lng
    // this.lat = event.coords.lat;
    // this.lng = event.coords.lng;
  }

}

// AIzaSyBjo_g0gV5qXLS1ASDwVNCqvh0M9_IrZsM