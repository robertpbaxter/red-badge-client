import { Component, OnInit, ViewChild } from "@angular/core";
import { Housing } from "../housing";
import { HousingService } from "../housing.service";
import { MatSort, MatTableDataSource } from "@angular/material";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  dataSource;
  displayedColumns = ["residenceType", "rooms", "city / neigborhood", "price","profile"];

  housing: Housing[];

  constructor(private housingService: HousingService) {}

  @ViewChild(MatSort)
  sort: MatSort;

  ngOnInit() {
    this.getAllHousing();
  }

  getAllHousing(): void {
    this.housingService.getAllHousing().subscribe(housing => {
      if (!housing) {
        return;
      }
      this.dataSource = new MatTableDataSource(
        housing.sort((a, b) => {
          let idA = a.id;
          let idB = b.id;
          if (idA < idB) {
            return -1;
          }
          if (idA > idB) {
            return 1;
          }
        })
      );
      this.dataSource.sort = this.sort;
    });
  }
}
