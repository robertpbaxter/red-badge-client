import { Component, OnInit, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";
import { MessageService } from "../message.service";
import { Message } from "../message";

@Component({
  selector: "app-send-message",
  templateUrl: "./send-message.component.html",
  styleUrls: ["./send-message.component.css"]
})
export class SendMessageComponent implements OnInit {
  message: Message = this.data;

  constructor(
    private messageService: MessageService,
    public dialogRef: MatDialogRef<SendMessageComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit() {}

  sendMessage(): void {
    this.messageService.sendMessage(this.message).subscribe(data => {
      console.log(data);
      this.dialogRef.close();
    });
  }

  cancel(): void {
    this.dialogRef.close();
  }
}
