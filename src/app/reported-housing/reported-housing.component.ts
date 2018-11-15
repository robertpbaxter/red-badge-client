import { Component, OnInit, Input } from "@angular/core";
import { HousingService } from "../housing.service";
import { Housing } from "../housing";

@Component({
  selector: "app-reported-housing",
  templateUrl: "./reported-housing.component.html",
  styleUrls: ["./reported-housing.component.css"]
})
export class ReportedHousingComponent implements OnInit {
  @Input()
  housingId = this.housingId;
  housing: Housing;
  constructor(private housingService: HousingService) {}

  ngOnInit() {
    this.getOneHousing(this.housingId);
  }

  getOneHousing(id: number): void {
    this.housingService.getOneHousing(id).subscribe(housing => {
      this.housing = housing;
    });
  }

  delete(id: number): void {
    this.housingService
      .deleteHousing(id)
      .subscribe(() => this.getOneHousing(id));
  }
}
