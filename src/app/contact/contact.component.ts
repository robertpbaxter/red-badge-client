import { Component, OnInit } from '@angular/core';
import { SupportService } from '../support.service';
import { Support} from '../support';

@Component({
  selector: 'app-support',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(private supportService: SupportService) {}

  support(issue: string, content: string): void {
    this.supportService
    .support({issue, content} as Support)
    .subscribe(credentials => {
      localStorage.getItem("token");
    });
  }

  ngOnInit() {
  }

}
