export class Ticket {
    constructor(
      public type: string,
      public issue: string,
      public content: string,
      public status: string,
    ) {}
  }