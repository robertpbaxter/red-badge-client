import { Component, OnInit, Input } from "@angular/core";
import { Message } from "../message";
import { MessageService } from "../message.service";
import { UserService } from "../user.service";

@Component({
  selector: "app-reported-message",
  templateUrl: "./reported-message.component.html",
  styleUrls: ["./reported-message.component.css"]
})
export class ReportedMessageComponent implements OnInit {
  @Input()
  messageId = this.messageId;
  message: Message;
  sentBy: string = "";
  constructor(
    private messageService: MessageService,
    private userService: UserService
  ) {}

  ngOnInit() {
    this.findMessage(this.messageId);
  }

  findMessage(id: number): void {
    this.messageService
      .findMessage(id)
      .subscribe(message => (this.message = message));
  }

  delete(id: number): void {
    this.messageService.deleteMessage(id).subscribe(() => this.findMessage(id));
  }

  populateName(senderId: number): void {
    this.userService.getUser(senderId).subscribe(result => {
      this.sentBy = `${result.lastName}, ${result.firstName}, (${
        result.email
      })`;
    });
  }
}
