import { Component, OnInit, Input } from "@angular/core";
import { Message } from "../message";
import { MessageService } from "../message.service";

@Component({
  selector: "app-reported-message",
  templateUrl: "./reported-message.component.html",
  styleUrls: ["./reported-message.component.css"]
})
export class ReportedMessageComponent implements OnInit {
  @Input()
  messageId = this.messageId;
  message: Message;
  constructor(private messageService: MessageService) {}

  ngOnInit() {
    this.findMessage(this.messageId);
  }

  findMessage(id: number): void {
    this.messageService
      .findMessage(id)
      .subscribe(message => (this.message = message));
  }
}
