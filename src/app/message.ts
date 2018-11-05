export class Message {
  constructor(
    public id: number,
    public senderId: number,
    public recipientId: number,
    public subject: string,
    public content: string,
    public status: string,
    public createdAt: string
  ) {}
}
