import { Component, OnInit, Input } from '@angular/core';
import { HousingService } from "../housing.service";
import { Housing} from '../housing';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-housing-detail',
  templateUrl: './housing-detail.component.html',
  styleUrls: ['./housing-detail.component.css']
})
export class HousingDetailComponent implements OnInit {
 housing: Housing
 

  constructor(private housingService: HousingService,
    private route: ActivatedRoute, 
    ) {this.housing= {
      id: null,
      residenceType: "",
      rooms: "",
      bathrooms: "",
      address: "",
      petsAllowed: "",
      facilities: "",
      price: "",
      owner: null
    };}

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.getOneHousing(id);
  }

  getOneHousing(id: number): void {
    this.housingService.getOneHousing(id).subscribe(housing => {
      console.log(housing)
      this.housing = housing;
    });
  }

}
