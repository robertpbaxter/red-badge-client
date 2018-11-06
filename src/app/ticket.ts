export class Ticket {
  constructor(
    public id: number,
    public type: string,
    public issue: string,
    public content: string,
    public status: string,
    public housingId: number,
    public messageId: number
  ) {}
}
