import { Component, OnInit } from '@angular/core';
import { Home } from '../home';
import { HomeService } from '../home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  homes: Home[];

  constructor(private homeService: HomeService) { }

  ngOnInit() {
    this.home()
  }

  home(): void {
    this.homeService.home().subscribe(homes => {
      this.homes = homes;
      console.log(homes)
    })
  }

}
