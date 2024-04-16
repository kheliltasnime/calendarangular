// src/app/private/model/event.ts
export interface Event {
    id: number;
    title: string;
    color: {
        primary: string;
        secondary: string;
      };
  
    start: Date;
    end: Date;
}
