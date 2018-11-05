import { Component, OnInit } from "@angular/core";
import { MessageService } from "../message.service";
import { Message } from "../message";

@Component({
  selector: "app-inbox",
  templateUrl: "./inbox.component.html",
  styleUrls: ["./inbox.component.css"]
})
export class InboxComponent implements OnInit {
  incomingMessages: Message[];
  outgoingMessages: Message[];

  constructor(private messageService: MessageService) {}

  ngOnInit() {
    this.getInboxMessages();
    this.getOutboxMessages();
    this.markMessagesAsRead();
  }

  getInboxMessages() {
    this.messageService
      .getInboxMessages()
      .subscribe(messages => (this.incomingMessages = messages));
  }

  getOutboxMessages() {
    this.messageService
      .getOutboxMessages()
      .subscribe(messages => (this.outgoingMessages = messages));
  }

  markMessagesAsRead() {
    this.messageService.markMessagesAsRead().subscribe();
  }

  deleteMessage(id: number) {
    this.messageService.deleteMessage(id).subscribe(() => {
      this.getInboxMessages();
      this.getOutboxMessages();
    });
  }
}
