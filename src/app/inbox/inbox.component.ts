import { Component, OnInit } from "@angular/core";
import { MessageService } from "../message.service";
import { Message } from "../message";
import { MatDialogConfig, MatDialog } from "@angular/material";
import { SendMessageComponent } from "../send-message/send-message.component";
import { formatDate } from "@angular/common";

@Component({
  selector: "app-inbox",
  templateUrl: "./inbox.component.html",
  styleUrls: ["./inbox.component.css"]
})
export class InboxComponent implements OnInit {
  incomingMessages: Message[];
  outgoingMessages: Message[];

  constructor(
    private messageService: MessageService,
    public dialog: MatDialog
  ) {}

  ngOnInit() {
    this.getInboxMessages();
  }

  getInboxMessages() {
    this.messageService.getInboxMessages().subscribe(messages => {
      this.incomingMessages = messages;
      this.markMessagesAsRead();
    });
  }

  markMessagesAsRead() {
    this.messageService.markMessagesAsRead().subscribe();
  }

  deleteMessage(id: number) {
    this.messageService.deleteMessage(id).subscribe(() => {
      this.getInboxMessages();
    });
  }

  reply(message: Message) {
    let replyMessage = {
      senderId: message.recipientId,
      recipientId: message.senderId,
      subject: `Re: ${message.subject}`,
      content:
        "\n\n" +
        `*****Sent:${message.createdAt}*****` +
        "\n\n" +
        message.content
    };
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = replyMessage;
    this.dialog.open(SendMessageComponent, dialogConfig);
  }
}
