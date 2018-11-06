import { Component, OnInit, Input } from "@angular/core";
import { HousingService } from "../housing.service";
import { Housing } from "../housing";
import { ActivatedRoute } from "@angular/router";
import { MatDialog, MatDialogConfig } from "@angular/material";
import { SendMessageComponent } from "../send-message/send-message.component";
import { ReportComponent } from "../report/report.component";
import { CoordsService } from "../coords.service";

@Component({
  selector: "app-housing-detail",
  templateUrl: "./housing-detail.component.html",
  styleUrls: ["./housing-detail.component.css"]
})
export class HousingDetailComponent implements OnInit {
  housing: Housing;
  lat: number;
  lng: number;

  constructor(
    private housingService: HousingService,
    private coordsService: CoordsService,
    private route: ActivatedRoute,
    public dialog: MatDialog
  ) {}

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get("id");
    this.getOneHousing(id);
    this.getOneCoords(id);
  }

  getOneHousing(id: number): void {
    this.housingService.getOneHousing(id).subscribe(housing => {
      this.housing = housing;
    });
  }

  getOneCoords(id: number): void {
    this.coordsService.getOneCoords(id).subscribe(coords => {
      this.lat = coords.latitude;
      this.lng = coords.longitude;
    });
  }

  sendMessage(recipientId: number): void {
    let newMessage = {
      senderId: null,
      recipientId: recipientId,
      subject: "",
      content: ""
    };
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = newMessage;
    this.dialog.open(SendMessageComponent, dialogConfig);
  }

  report(housing: Housing): void {
    const reportConfig = new MatDialogConfig();
    reportConfig.data = { housingId: housing.id };
    this.dialog.open(ReportComponent, reportConfig);
  }
}
