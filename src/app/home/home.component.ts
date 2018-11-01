import { Component, OnInit } from '@angular/core';
import { Home } from '../home';
import { HomeService } from '../home.service';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  dataSource;
  displayedColumns = ['residenceType', 'rooms', 'address', 'price']

  homes: Home[];

  constructor(private homeService: HomeService) { }

  ngOnInit() {
    this.home()
  }

  home(): void {
    this.homeService.home().subscribe(homes => {
      if (!homes) {
        return;
      }
      this.dataSource = new MatTableDataSource(homes)
    })

  }

}
